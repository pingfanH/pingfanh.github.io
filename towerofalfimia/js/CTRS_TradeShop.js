/*:
 * @plugindesc メダルや貝殻など、特定のアイテムをお金の代わりに使えるショップを作成することができます
 *
 * @author シトラス
 *
 * @param tradeShopSwitchId
 * @text 交換ショップスイッチID
 * @desc このスイッチがONの時にショップを起動すると
 * 交換ショップになります
 * @default 1
 *
 * @param tradeItemId
 * @text 交換アイテムID
 * @desc この番号のIDを持つアイテムを交換に使用します
 * @default 1
 *
 * @param tradeItemTanni
 * @text 交換アイテム単位
 * @desc アイテムの単位（個、枚など、アイテムをどう数えるかです）
 * @default 枚
 *
 * @help
 * 注意点：
 * 交換ショップのスイッチは、イベントが終わった後に自分でOFFしてください
 *
*/

var hoge = PluginManager.parameters("CTRS_TradeShop");

//このスイッチがONになっていれば、交換ショップとして扱う
var tradeShopSwitchId = Number(hoge.tradeShopSwitchId);

//交換に使うアイテムのID
var tradeItemId = Number(hoge.tradeItemId);

//交換に使うアイテムの単位
var tradeItemTanni = hoge.tradeItemTanni;

Scene_Shop.prototype.prepare = function(goods, purchaseOnly) {
    this._goods = goods;
	if($gameSwitches.value(tradeShopSwitchId) ){
		this._purchaseOnly = true;
	}else{
		this._purchaseOnly = purchaseOnly;
	}
    this._item = null;
};

//購入を実行
Scene_Shop.prototype.doBuy = function(number) {
	if($gameSwitches.value(tradeShopSwitchId) ){
		$gameParty.gainItem($dataItems[tradeItemId],-1*number*this.buyingPrice() );
	}else{
		$gameParty.loseGold(number * this.buyingPrice() );
	}
    $gameParty.gainItem(this._item, number);
};

//----------------------------------------------------------------------------
// Window_Gold
//
// The window for displaying the party's gold.
// ゴールドの表示ウィンドウを司るスクリプト

function Window_Gold() {
    this.initialize.apply(this, arguments);
}

Window_Gold.prototype = Object.create(Window_Base.prototype);
Window_Gold.prototype.constructor = Window_Gold;

Window_Gold.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_Gold.prototype.windowWidth = function() {
    return 240;
};

Window_Gold.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};

Window_Gold.prototype.refresh = function() {
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();

	if($gameSwitches.value(tradeShopSwitchId) ){
		this.drawCurrencyValue(this.value(),tradeItemTanni, x, 0, width);
	}else{
		this.drawCurrencyValue(this.value(), this.currencyUnit(), x, 0, width);
	}
};

Window_Gold.prototype.value = function() {
	if($gameSwitches.value(tradeShopSwitchId) ){
		return $gameParty.numItems($dataItems[tradeItemId] );
	}else{
		return $gameParty.gold();
	}
};

Window_Gold.prototype.currencyUnit = function() {
    return TextManager.currencyUnit;
};

Window_Gold.prototype.open = function() {
    this.refresh();
    Window_Base.prototype.open.call(this);
};

Window_ShopNumber.prototype.drawTotalPrice = function() {
    var total = this._price * this._number;
    var width = this.contentsWidth() - this.textPadding();

	if($gameSwitches.value(tradeShopSwitchId) ){
		this.drawCurrencyValue(total,tradeItemTanni, 0, this.priceY(), width);
	}else{
		this.drawCurrencyValue(total, this._currencyUnit, 0, this.priceY(), width);
	}
};