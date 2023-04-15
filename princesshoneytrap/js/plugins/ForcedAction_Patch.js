/*:ja
 * @plugindesc バトルイベントが起こるとアクターのステートが解除されない問題を解決します。
 * @author ecf5DTTzl6h6lJj02
 * @help
 * ver.1.6.2 では、戦闘行動の強制が発生した場合、ターン終了時に各バトラーに
 * 対して行われる、ステート解除までの残りの歩数やターン数の減少が
 * 行われないよう、変更されているようです。
 * 鉄壁やカウンターなど、味方に付加するステートをかけるスキルによってかけた
 * ステートが、解除条件を満たしても解除されません。
 * 
 * この不具合を解消するパッチプラグインです。
 *
 * 利用規約：
 * この作品は マテリアル・コモンズ・ブルー・ライセンスの下に提供されています。
 * https://materialcommons.tk/mtcm-b-summary/
 *
 */

Game_Battler.prototype.onTurnEnd = function() {
    this.clearResult();
    this.regenerateAll();
    this.updateStateTurns();
    this.updateBuffTurns();
    this.removeStatesAuto(2);
};

BattleManager.updateTurn = function() {
    $gameParty.requestMotionRefresh();
    if (!this._subject) {
        this._subject = this.getNextSubject();
    }
    if (this._subject) {
        this.processTurn();
    } 
    else if(this.isForcedTurn()){
			this._turnForced = false;
			this.updateTurnEnd();
		}
		else{
        this.endTurn();
    }
};

BattleManager.endTurn = function() {
    this._phase = 'turnEnd';
    this._preemptive = false;
    this._surprise = false;
    this.allBattleMembers().forEach(function(battler) {
        battler.onTurnEnd();
        this.refreshStatus();
        this._logWindow.displayAutoAffectedStatus(battler);
        this._logWindow.displayRegeneration(battler);
    }, this);
};

BattleManager.processForcedAction = function() {
			if(this._actionForcedBattler){
				if(this.isTurnEnd()){
					this._turnForced = true;
					this._subject = this._actionForcedBattler;
		      this._actionForcedBattler = null;
		      this.startAction();
		      this._subject.removeCurrentAction();
		      this.updateAction();
		      this._subject.onAllActionsEnd();
		      this.refreshStatus();
		      this._logWindow.push('clear');
		      this._logWindow.displayAutoAffectedStatus(this._subject);
		      this._logWindow.displayCurrentState(this._subject);
		      this._logWindow.displayRegeneration(this._subject);
				}
				else{
					this._subject = this._actionForcedBattler;
		      this._actionForcedBattler = null;
		      this.startAction();
		      this._subject.removeCurrentAction();
	      }
	    }
};

