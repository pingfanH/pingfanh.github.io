//=============================================================================
// MT_CustomizeBasicSystemRate.js
// 基本システムの倍率を変更できるプラグイン
// ----------------------------------------------------------------------------
// (C) 2019 Moooty
//=============================================================================
/*:
 * @plugindesc Change basic system rates.
 * @author Moooty
 * 
 * @param criticalDamageRate
 * @desc Critical damage rate.(default: 3)
 * @type number
 * @decimals 2
 * @default 3.00
 * 
 * @param buffRate
 * @desc Status up(/ down) rate.(1 = +100%)(default: 0.25)
 * @type number
 * @decimals 2
 * @default 0.25
 * 
 * @param damagedStandardTP
 * @desc Standard TP value when damaged.(gain TP when damaged same as max HP)(dafault: 50)
 * @type number
 * @default 50
 *
 * @param bentchMemberExpRate
 * @desc Bentch member's EXP rate when battle finished.(default: 1)
 * @type numbe
 * @decimals 2
 * @default 1.00
 * 
 * @param escapeBasicRateVariable
 * @desc Variable for setting escape command success rate.(if variable isn't set, 0.5)
 * @type variable
 * 
 * @param escapeAdjustRate
 * @desc Additional probability per escape faild.(1 = 100%)(default: 0.1)
 * @type number
 * @decimals 2
 * @default 0.10
 * 
 * @help
 * === Description ===
 * Change basic system rates with plugin parameter.
 * 
 * Nothing plugin commnad this plugin.
 * 
 * 
 * === Change Log ===
 * Mar 22, 2019 ver1.00 Initial release.
 * Apr 7 , 2019 ver1.01 Change plugin parameter name for Japanese version.
 * Nov 11, 2019 ver1.10 Rename plugin file.（CustomizeBasicSystemRate.js → MT_CustomizeBasicSystemRate.js）
 * 
 * === Manual & License(Japanese) ===
 * https://www.5ing-myway.com/rpgmaker-plugin-customize-basic-system-rate/
 *
 */

/*:ja
 * @plugindesc 基本システムの倍率調整用プラグイン
 * @author むーてぃ
 * 
 * @param criticalDamageRate
 * @text クリティカルダメージ倍率
 * @desc クリティカルダメージ倍率(デフォルト: 3)
 * @type number
 * @decimals 2
 * @default 3.00
 * 
 * @param buffRate
 * @text 強化/弱体倍率
 * @desc 強化/弱体倍率(1で100%加算＝2倍)(デフォルト: 0.25)
 * @type number
 * @decimals 2
 * @default 0.25
 * 
 * @param damagedStandardTP
 * @text 被ダメージTPの基準値
 * @desc 最大HPと同量のダメージをくらった時に増えるTP量(デフォルト: 50)
 * @type number
 * @default 50
 *
 * @param bentchMemberExpRate
 * @text 控えメンバー経験値倍率
 * @desc 控えメンバー獲得する経験値の倍率(デフォルト: 1)
 * @type numbe
 * @decimals 2
 * @default 1.00
 * 
 * @param escapeBasicRateVariable
 * @text 逃げる基本確率(変数)
 * @desc 逃げる基本確率を設定する変数(変数が設定されていない場合、0.5)
 * @type variable
 * 
 * @param escapeAdjustRate
 * @text 逃げる失敗補正値
 * @desc 逃げるに失敗した時の補正値(1で100%成功)(デフォルト: 0.1)
 * @type number
 * @decimals 2
 * @default 0.10
 * 
 * @help
 * === 説明 ===
 * 基本システムの倍率を変更できるプラグインです。
 * 
 * このプラグインにはプラグインコマンドはありません。
 * 
 * === 更新履歴 ===
 * 2019/03/22 ver1.00 初版
 * 2019/04/06 ver1.01 JP版のパラメータ名を日本語表示に変更
 * 2019/11/24 ver1.10 ファイル名を変更（CustomizeBasicSystemRate.js → MT_CustomizeBasicSystemRate.js）
 *
 * === マニュアル＆ライセンス ===
 * https://www.5ing-myway.com/rpgmaker-plugin-customize-basic-system-rate/
 * 
 */

var Imported = Imported || {};
Imported.MT_CustomizeBasicSystemRate = true;

(function(){
    'use strict';

    // 定数の定義
    const PLUGIN_NAME                    = "MT_CustomizeBasicSystemRate";
    const VARIABLE_UNSET                 = -1;
    const DEFAULT_CRITICAL_DAMAGE_RATE   = 3;
    const DEFAULT_BUFF_RATE              = 0.25;
    const DEFAULT_DAMAGED_STANDARD_TP    = 50;
    const DEFAULT_BENTCH_MEMBER_EXP_RATE = 1;
    const DEFAULT_ESCAPE_BASIC_RATE      = 0.5;
    const DEFAULT_ESCAPE_ADJUST_RATE     = 0.1;

    // パラメータを受け取る
    var parameters          = PluginManager.parameters(PLUGIN_NAME);
    var criticalDamageRate  = getParameterValue(parameters['criticalDamageRate'] , DEFAULT_CRITICAL_DAMAGE_RATE);
    var buffRate            = getParameterValue(parameters['buffRate']           , DEFAULT_BUFF_RATE);
    var damagedStandardTP   = getParameterValue(parameters['damagedStandardTP']  , DEFAULT_DAMAGED_STANDARD_TP);
    var bentchMemberExpRate = getParameterValue(parameters['bentchMemberExpRate'], DEFAULT_BENTCH_MEMBER_EXP_RATE);
    var escapeAdjustRate    = getParameterValue(parameters['escapeAdjustRate']   , DEFAULT_ESCAPE_ADJUST_RATE);
    
    // プラグインを読み込んだ時点では$gameVariablesがnullになっているので、変数型のパラメータは直前に取得
    var variableIndex;

    
    // ---------- rpg_object.js のパラメータここから ----------
    // クリティカルのダメージ倍率
    Game_Action.prototype.applyCritical = function(damage) {
	    return damage * criticalDamageRate;
    };

    
    // バフ倍率
    Game_BattlerBase.prototype.paramBuffRate = function(paramId) {
	    return this._buffs[paramId] * buffRate + 1.0;
    };
    
    // 被ダメージのTP獲得量
    Game_Battler.prototype.chargeTpByDamage = function(damageRate) {
	    var value = Math.floor(damagedStandardTP * damageRate * this.tcr);
	    this.gainSilentTp(value);
    };

    // 控えメンバーの獲得経験値倍率
    Game_Actor.prototype.benchMembersExpRate = function() {
	    return $dataSystem.optExtraExp ? bentchMemberExpRate : 0;
    };
    
    // ---------- rpg_object.js のパラメータここまで ----------

    
    // ---------- rpg_managers.js のパラメータここから ----------
    BattleManager.makeEscapeRatio = function() {
	    variableIndex = parseInt(parameters['escapeBasicRateVariable']);
	    variableIndex = getParameterValue(variableIndex, VARIABLE_UNSET);

	    var escapeBasicRate;	
	    if(variableIndex == VARIABLE_UNSET){
	        escapeBasicRate = DEFAULT_ESCAPE_BASIC_RATE;
	    } else {
	        escapeBasicRate = $gameVariables.value(variableIndex) / 100;
	    }

	    this._escapeRatio = escapeBasicRate * $gameParty.agility() / $gameTroop.agility();
    };

    // 逃げる失敗ごとの成功確率補正
    BattleManager.processEscape = function() {
	    $gameParty.performEscape();
	    SoundManager.playEscape();
	    var success = this._preemptive ? true : (Math.random() < this._escapeRatio);
	    if (success) {
            this.displayEscapeSuccessMessage();
            this._escaped = true;
            this.processAbort();
	    } else {
            this.displayEscapeFailureMessage();
            this._escapeRatio += escapeAdjustRate;
            $gameParty.clearActions();
            this.startTurn();
	    }
	    return success;
    };
    // ---------- rpg_managers.js のパラメータここまで ----------

    // ---------- パラメータ取得用関数ここから ----------
    // @type numberのパラメータでも文字列を入れることができてしまう対策
    function getParameterValue(param, defaultValue){
	    var result = Number(param || defaultValue);
	
	    if(Number.isNaN(result)){
	        result = defaultValue;
	    }

	    return result;
    };    
    // ---------- パラメータ取得用関数ここまで ----------
})();    
