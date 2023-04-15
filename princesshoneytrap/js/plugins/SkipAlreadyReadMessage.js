//=============================================================================
// SkipAlreadyReadMessage.js
//=============================================================================

/*:
 * @plugindesc 既読メッセージスキップの機能を提供します。
 * @author 奏ねこま（おとぶきねこま）
 * @target MZ
 *
 * @param メッセージスキップキー
 * @desc メッセージ（既読、未読の両方）をスキップするキーを指定してください。
 * @default control
 *
 * @param 既読メッセージスキップキー
 * @desc 既読メッセージをスキップするキーを指定してください。
 * @default control
 *
 * @param 既読フラグ保存用変数ID
 * @desc 既読フラグを保存する変数のIDを指定してください。
 * @default 1
 *
 * @param 未読スキップ判定用スイッチID
 * @desc 未読もスキップするかどうかを判定するスイッチのIDを指定してください。
 * @default 0
 *
 * @param 既読メッセージ文字色
 * @desc 既読メッセージの文字色の番号を指定してください。
 * @default 6
 *
 * @param 既読メッセージ文字色制御用スイッチID
 * @desc 既読メッセージ文字色の有効無効を切り替えるスイッチのIDを指定してください。
 * @default 0
 *
 * @param 修正前文章判定用タグ
 * @desc 注釈コマンドの内容が、修正前の文章であることを判断するためのタグを指定してください。
 * @default **修正前**
 *
 * @help
 * [プラグインパラメータ]
 *  ▽メッセージスキップキー
 *    既読、未読の両方のメッセージをスキップするキーを指定します。
 *     shift   : Shiftキー
 *     control : CtrlキーまたはAltキー
 *    上記以外のキーについては、rpg_core.jsのInput.keyMapperを参照してください。
 *
 *  ▽既読メッセージスキップキー
 *    既読メッセージをスキップするキーを指定します。
 *
 *  ▽既読フラグ保存用変数ID
 *    メッセージの既読状態を保存するための変数のIDを指定します。
 *    変数をセーブ間で共有できるプラグインをご使用の場合、ここで指定した変数を対
 *    象にすることで、既読状態を共有することができるようになります。
 *
 *  ▽未読スキップ判定用スイッチID
 *    未読メッセージをスキップするかどうかを判定するスイッチのIDを指定します。
 *    ここで指定したスイッチがONになっていない場合は、既読未読共用のメッセージス
 *    キップキーを押下しても、既読メッセージしかスキップされません。
 *
 *  ▽既読メッセージ文字色
 *    既読メッセージの文字色を、番号で指定します。
 *    Window.pngの右下にある8x4のカラーリストが番号と対応しており、左上から右下に
 *    向って0番～31番となります。
 *
 *  ▽既読メッセージ文字色制御用スイッチID
 *    既読メッセージの文字色を適用を切り替えるスイッチのIDを指定します。
 *    ここで指定したスイッチがOFFの場合、既読メッセージ文字色は適用されません。
 *
 *  ▽修正前文章判定用タグ
 *    「文章修正について」の説明を参照。
 *
 * [既読の判断方法について]
 *   メッセージは、以下の要素がすべて一致した場合、同じメッセージと判断されます。
 *
 *   ・マップID（コモンイベントはID:0、バトルイベントはID:-1として判断）
 *   ・イベントID
 *   ・イベントページ（コモンイベントはページ0として判断）
 *   ・文章内容
 *
 *   文章内容が全く同じでもページが異なれば「別のメッセージ」として判断されます。
 *   逆に同ページ内に同じ内容の文章があれば「同じメッセージ」として判断されます。
 *   同ページ内の同じ内容の文章を別物として扱いたい場合は、文末に空白を入れるなど
 *   して差別化してください。
 *
 * [文章修正について]
 *   製品版としてリリース済みのゲームを、バージョンアップなどで誤字修正してしまう
 *   と修正前の文章と修正後の文章は「別のメッセージ」となり、そのままでは既読扱い
 *   されず、スキップできなくなってしまいます。これを回避するには、以下のように対
 *   応してください。
 *
 *   ・修正した文章の直前に「注釈」イベントコマンドを挿入
 *   ・注釈の一行目に「**修正前**」と記述
 *   ・二行目以降に、修正前の文章をそのままコピー
 *
 *   これにより、既読判定には修正後の文章ではなく、注釈の二行目以降に書かれた文章
 *   を使用するようになります。
 *   なお、一行目に記述する「**修正前**」は、プラグインパラメータの「修正前文章判
 *   定用タグ」にて他の文字列に変更することができます。
 *
 * *このプラグインには、プラグインコマンドはありません。      
 *
 * [利用規約] -------------------------------------------------------------------
 *   本プラグインの利用はRPGツクール/RPG Makerの正規ユーザーに限られます。
 *   商用、非商用、有償、無償、一般向け、成人向けを問わず利用可能です。
 *   ご利用の際に連絡や報告は必要ありません。また、製作者名の記載等も不要です。
 *   プラグインを導入した作品に同梱する形以外での再配布、転載はご遠慮ください。
 *   本プラグインにより生じたいかなる問題についても一切の責任を負いかねます。
 * [改訂履歴] -------------------------------------------------------------------
 *   Version 1.00  2016/08/01  初版
 *   Version 1.01  2016/08/06  メッセージ切り替え時のウェイトをカットできていない
 *                             問題を修正
 *   Version 1.02  2021/09/06  RPGツクールMZに仮対応
 * ------------------------------------------------------------------------------
 *                                              Copylight (c) 2021 Nekoma Otobuki
 *                                         http://makonet.sakura.ne.jp/rpg_tkool/
 *                                                  https://twitter.com/koma_neko
 */

(function(){
    'use strict';
    
    const _PRODUCT    = 'SkipAlreadyReadMessage';
    const _PARAMETERS = PluginManager.parameters(_PRODUCT);

    const _KEY_MSGSKIP   =  _PARAMETERS['メッセージスキップキー'] || '';
    const _KEY_ARMSGSKIP =  _PARAMETERS['既読メッセージスキップキー'] || '';
    const _VID_ARFLAGS   = +_PARAMETERS['既読フラグ保存用変数ID'] || 1;
    const _SID_URSKIP    = +_PARAMETERS['未読スキップ判定用スイッチID'] || 0;
    const _CID_ARMSG     = +_PARAMETERS['既読メッセージ文字色'] || 0;
    const _SID_ARMSGCLR  = +_PARAMETERS['既読メッセージ文字色制御用スイッチID'] || 0;
    const _TAG_ORGMSG    =  _PARAMETERS['修正前文章判定用タグ'] || '';
    
    function _(f){ return f[_PRODUCT] = f[_PRODUCT] || {} }

    var _MapID = 0;
    
    function AddEventInfo(map, event, page, list) {
        list.forEach(function(command) {
            if (command.code === 101) {
                _(command).info = {
                    map: map + 1,
                    event: event,
                    page: page
                };
            }
        });
    }

    function ReadARFlag (command, text) {
        var flag = $gameVariables._data[_VID_ARFLAGS];
        var map = _(command).info.map;
        var event = _(command).info.event;
        var page = _(command).info.page;
        if (flag) {
            if (flag[map]) {
                if (flag[map][event]) {
                    if (flag[map][event][page]) {
                        return !!flag[map][event][page][text];
                    }
                }
            }
        }
        return false;
    }
    
    function UpdateARFlag (command, text) {
        var flag = $gameVariables._data[_VID_ARFLAGS];
        var map = _(command).info.map;
        var event = _(command).info.event;
        var page = _(command).info.page;
        if (!flag) {
            $gameVariables._data[_VID_ARFLAGS] = [];
            flag = $gameVariables._data[_VID_ARFLAGS];
        }
        if (!flag[map]) {
            flag[map] = [];
        }
        if (!flag[map][event]) {
            flag[map][event] = [];
        }
        if (!flag[map][event][page]) {
            flag[map][event][page] = {};
        }
        flag[map][event][page][text] = true;
    }
    
    function isSkip() {
        var skip = false;
        if (Input.isPressed(_KEY_MSGSKIP) && ($gameSwitches.value(_SID_URSKIP) || _($gameMessage).already_read)) {
            skip = true;
        } else if (Input.isPressed(_KEY_ARMSGSKIP) && _($gameMessage).already_read) {
            skip = true;
        }
        return skip;
    }
    
    var _DataManager_loadMapData = DataManager.loadMapData;
    DataManager.loadMapData = function(mapId) {
        _MapID = mapId;
        _DataManager_loadMapData.call(this, mapId);
    };
    
    var _DataManager_onLoad = DataManager.onLoad;
    DataManager.onLoad = function(object) {
        _DataManager_onLoad.call(this, object);
        var eventId;
        switch(object) {
            case $dataMap:
                $dataMap.events.forEach(function(event) {
                    if (event) {
                        event.pages.forEach(function(page, index) {
                            AddEventInfo(_MapID, event.id, index, page.list);
                        });
                    }
                });
                break;
            case $dataCommonEvents:
                $dataCommonEvents.forEach(function(event) {
                    if (event) {
                        AddEventInfo(0, event.id, 0, event.list);
                    }
                });
                break;
            case $dataTroops:
                $dataTroops.forEach(function(event) {
                    if (event) {
                        event.pages.forEach(function(page, index) {
                            AddEventInfo(-1, event.id, index, page.list);
                        });
                    }
                });
                break;
        }
    };

    var _Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
    Game_Interpreter.prototype.command101 = function() {
        if (!$gameMessage.isBusy()) {
            var text = '';
            if (_($gameMessage).org_text) {
                text = _($gameMessage).org_text;
                _($gameMessage).org_text = '';
            } else {
                var index = this._index;
                while (this.nextEventCode() === 401) {
                    this._index++;
                    text += this.currentCommand().parameters[0];
                }
                this._index = index;
            }
            _($gameMessage).already_read = ReadARFlag(this.currentCommand(), text)
            UpdateARFlag(this.currentCommand(), text);
        }
        return _Game_Interpreter_command101.apply(this, arguments);
    };

    var _Game_Interpreter_command108 = Game_Interpreter.prototype.command108;
    Game_Interpreter.prototype.command108 = function() {
        var result = _Game_Interpreter_command108.apply(this, arguments);
        if (_TAG_ORGMSG) {
            if (this._comments[0] === _TAG_ORGMSG) {
                _($gameMessage).org_text = '';
                this._comments.forEach(function(comment, index) {
                    if (index) {
                        _($gameMessage).org_text += comment;
                    }
                });
            }
        }
        return result;
    };
    
    var _Window_Message_isTriggered = Window_Message.prototype.isTriggered;
    Window_Message.prototype.isTriggered = function() {
        this._pauseSkip = this._pauseSkip || isSkip();
        return _Window_Message_isTriggered.call(this) || isSkip();
    };

    var _Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
    Window_Message.prototype.terminateMessage = function() {
        _Window_Message_terminateMessage.call(this);
        _($gameMessage).already_read = false;
    };

    var _Scene_Map_isFastForward = Scene_Map.prototype.isFastForward;
    Scene_Map.prototype.isFastForward = function() {
        return _Scene_Map_isFastForward.call(this) || ($gameMap.isEventRunning() && !SceneManager.isSceneChanging() && isSkip());
    };
    
    if (Window_Message.prototype.normalColor) {
        var _Window_Message_normalColor = Window_Message.prototype.normalColor;
        Window_Message.prototype.normalColor = function() {
            var color = _Window_Message_normalColor.call(this);
            return ($gameSwitches.value(_SID_ARMSGCLR) && _($gameMessage).already_read) ? this.textColor(_CID_ARMSG) : color;
        };
    } else {
        var _Window_Message_resetTextColor = Window_Base.prototype.resetTextColor;
        Window_Message.prototype.resetTextColor = function() {
            _Window_Message_resetTextColor.call(this);
            if (($gameSwitches.value(_SID_ARMSGCLR) && _($gameMessage).already_read)) {
                this.changeTextColor(ColorManager.textColor(_CID_ARMSG));
            }
        };
    }
}());
