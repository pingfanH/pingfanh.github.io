//=============================================================================
// ChoiceListWithTimeLimit.js
// ----------------------------------------------------------------------------
// <利用規約>
//  利用はRPGツクールMV/RPGMakerMVの正規ユーザーに限られます。
//  商用、非商用、ゲームの内容を問わず利用可能です。
//  ゲームへの利用の際、報告や出典元の記載等は必須ではありません。
//  二次配布や転載は禁止します。
//  ソースコードURL、ダウンロードURLへの直接リンクも禁止します。
//  不具合対応以外のサポートやリクエストは受け付けておりません。
//  スクリプト利用により生じたいかなる問題においても、一切責任を負いかねます。
// ----------------------------------------------------------------------------
//  Ver1.00  2016/01/09  初版
//=============================================================================

/*:
 * @plugindesc 選択肢に、時間制限を設定します。
 * @author こま
 *
 * @help
 * 時間制限を設定したい選択肢の「一番最後の選択文」に、以下のように記述します。
 *
 *  <limit:3>
 *
 * 上記例の場合、制限時間を3秒に設定します。
 * 選択肢が2つの例を挙げると、以下のようになります。
 *
 *  #1:  選択肢1
 *  #2:  選択肢2
 *  #3:  <limit:3>
 *
 * 上記例の場合、プレイヤーが3秒以内に選択肢を選択しなかった場合、
 * #3が選択されたことになります。
 *
 * *このプラグインには、プラグインコマンドはありません。
 */

(function(){
    var _Window_ChoiceList_start = Window_ChoiceList.prototype.start;
    Window_ChoiceList.prototype.start = function() {
        this._time_limit = {time:0, limit:0, index:0};
        if (/<limit:(.*)>/.test ($gameMessage._choices[$gameMessage._choices.length - 1])) {
            this._time_limit.limit = RegExp.$1 * 60;
            this._time_limit.index = $gameMessage._choices.length - 1;
            $gameMessage._choices.pop();
        }
        _Window_ChoiceList_start.call (this);
    };

    var _Window_ChoiceList_update = Window_ChoiceList.prototype.update;
    Window_ChoiceList.prototype.update = function() {
        if (this._time_limit && this._time_limit.limit > 0) {
            this._time_limit.time++;
            if (this._time_limit.time > this._time_limit.limit) {
                this._index = this._time_limit.index;
                delete this._time_limit;
                this.playBuzzerSound();
                this.updateInputData();
                this.deactivate();
                this.callOkHandler();
                return;
            }
        }
        _Window_ChoiceList_update.call (this);
    };

    var _Window_ChoiceList_close = Window_ChoiceList.prototype.close;
    Window_ChoiceList.prototype.close = function() {
        if (this._time_limit) {
            delete this._time_limit;
        }
        _Window_ChoiceList_close.call (this);
    };
}());
