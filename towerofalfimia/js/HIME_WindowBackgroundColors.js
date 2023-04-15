/*:ja
 * @target MV
 * @url https://raw.githubusercontent.com/munokura/HIME-MV-plugins-jp/master/HIME_WindowBackgroundColors.js
 * @title Window Background Colors
 * @author Hime --> HimeWorks (http://himeworks.com)
 * @version 1.0
 * @date Apr 14, 2016
 * @video https://www.youtube.com/watch?v=KMArLErZCwQ
 * @filename HIME_WindowBackgroundColors.js
 *
 * @plugindesc v1.0 ゲーム中にウィンドウ背景色と不透明度を変更できます
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン:
 * http://himeworks.com/2016/04/window-background-colors/
 *
 * == 説明 ==
 *
 * デフォルトでは、RPGツクールMVのウィンドウの色は次の2つで決まります。
 *
 * 1. img/systemフォルダ内の 'Window' というウィンドウスキンファイル
 * 2. 標準的な背景の不透明度
 *
 * 例えばデフォルトのウィンドウは暗い色で半透明の不透明度になっています。
 * しかし、もし素敵なソリッドカラーにしたいとしたらどうでしょうか?
 * このプラグインを使えば、ウィンドウ色を素早く設定することができます。
 * このプラグインはウィンドウスキンの背景色の設定を上書きします。
 *
 * 
 * == 使用方法 ==
 *
 * プラグインのパラメータで、ウィンドウに使用する色と不透明度を選択します。
 * プラグインはデフォルトのウィンドウ色で設定されています。
 * これらの設定は全てのウィンドウに適用されます。
 * 不透明度は0から255の間の値で、0は完全に透明、255は完全に不透明です。
 * 背景色はRGB値のリストで、[R,G,B]として指定します。
 * 例えば、赤のウィンドウにしたい場合、次のように書きます。
 *
 * [255, 0, 0]
 *
 * カラーホイールを使用して、RGB値が何であるかを判断するのに役立ちます。
 * ゲーム内でのウィンドウ背景色、不透明度を変更するには、
 * 以下のスクリプトを使用します。
 *
 * $gameSystem.setWindowBackColor(R, G, B)
 * $gameSystem.setWindowBackOpacity(A)
 *
 * ここでの、R,G,B,Aは0から255までの整数です。
 *
 * -- オプションメニューのカラー設定 --
 *
 * このプラグインは、ビデオにあるように
 * オプションメニューに設定を追加しないことに注意してください。
 * このような機能をご希望の場合、私に連絡していただければ、
 * プロジェクトに実装する方法を検討します。
 *
 * 
 * == 利用規約 ==
 *
 * - クレジットを表示する非営利プロジェクトでの使用は無料
 * - 商用プロジェクトでの使用は無料ですが、連絡してください
 * - クレジット表示をHimeWorksにしてください
 *
 * == Change Log ==
 *
 * 1.0 - Apr 14, 2016
 *  * initial release
 *
 * @param Opacity
 * @text ウィンドウ不透明度
 * @type number
 * @max 255
 * @desc ウィンドウ背景の不透明度
 * 0から255の間で、0は透明、255は完全に不透明
 * @default 192
 *
 * @param Background Color
 * @text ウィンドウ背景色
 * @desc ウィンドウ背景色
 * 書式は[赤,緑,青]でRGBです。
 * @default [42, 37, 43]
 */
/*
 * あなたが私の仕事を楽しんでいるなら、
 * パトレオンで私への支援を検討してください！
 *
 * - https://www.patreon.com/himeworks
 *
 * ご質問や懸念がある場合、
 * 次のサイトのいずれかで私に連絡できます。
 *
 * - Main Website: http://himeworks.com
 * - Facebook: https://www.facebook.com/himeworkscom/
 * - Twitter: https://twitter.com/HimeWorks
 * - Youtube: https://www.youtube.com/c/HimeWorks
 * - Tumblr: http://himeworks.tumblr.com/
*/

 /*:
@title Window Background Colors
@author Hime --> HimeWorks (http://himeworks.com)
@version 1.0
@date Apr 14, 2016
@video https://www.youtube.com/watch?v=KMArLErZCwQ
@filename HIME_WindowBackgroundColors.js
@url http://himeworks.com/2016/04/window-background-colors/

If you enjoy my work, consider supporting me on Patreon!

* https://www.patreon.com/himeworks

If you have any questions or concerns, you can contact me at any of
the following sites:

* Main Website: http://himeworks.com
* Facebook: https://www.facebook.com/himeworkscom/
* Twitter: https://twitter.com/HimeWorks
* Youtube: https://www.youtube.com/c/HimeWorks
* Tumblr: http://himeworks.tumblr.com/

@plugindesc v1.0 - Allows you to customize the background window color and
opacity.
@help 
== Description ==

By default, RPG Maker's window colors are determined by two things

1. The windowskin file called "Window" in the img/system folder
2. A standard background opacity

So for example, the default windows are dark colored with a semi-transparent
opacity.

However, what if you just wanted to have a nice solid color?
Using this plugin, you can quickly set up the colors for your windows.

This plugin overwrites the background color settings of the windowskin.

== Terms of Use ==

- Free for use in non-commercial projects with credits
- Free for use in commercial projects, but it would be nice to let me know
- Please provide credits to HimeWorks

== Change Log ==

1.0 - Apr 14, 2016
 * initial release

== Usage ==

In the plugin parameters, choose the color and opacity that you would like to
use for your windows. The plugin has been set up with the default window
colors.

These settings apply to all windows.

The opacity is a value between 0 and 255, where 0 is fully transparent,
and 255 is fully opaque.

The background color is a list of RGB values, specified as [R, G, B].
For example, if you wanted to have a red window, you would just write

[255, 0, 0]

You can use a color wheel to help you determine what your RGB value is.

Changing Color Options in-game

You can change the color of the windows during the game by using the following
script calls

$gameSystem.setWindowBackColor(R, G, B)
$gameSystem.setWindowBackOpacity(A)

Where R, G, B, and A are integers from 0 to 255.

-- Color Settings in the Option Menu --

Please note that this plugin doesn't add settings to the options menu as shown
in the video. If you would like such functionality contact me and we can look
at how it may be implemented for your project.

@param Opacity
@desc Opacity for your window background. Between 0 and 255,
where 0 is transparent and 255 is fully opaque.
@default 192

@param Background Color
@desc Background color for your windows.
Format is RGB as [Red, Green, Blue]
@default [42, 37, 43]
 */

var Imported = Imported || {};
var TH = TH || {};
Imported.TH_WindowBackgroundColors = 1;
TH.WindowBackgroundColors = TH.WindowBackgroundColors || {};

(function ($) {

  $.params = PluginManager.parameters("HIME_WindowBackgroundColors");
  $.opacity = Math.floor($.params["Opacity"]);
  $.bgColor = eval($.params["Background Color"]);

  SceneManager.refreshWindowBackgrounds = function () {
    this._scene._windowLayer.refreshWindowBackgrounds();
  };

  WindowLayer.prototype.refreshWindowBackgrounds = function () {
    var wins = this.children;
    for (var i = 0; i < wins.length; i++) {
      var win = wins[i];
      if (win instanceof Window) {
        wins[i]._refreshBack();
        wins[i].updateBackOpacity();
      }
    }
  };

  /***************************************************************************/

  Game_System.prototype.setWindowBackColor = function (r, g, b) {
    this._windowBackColor = [r, g, b];
    SceneManager.refreshWindowBackgrounds();
  }

  Game_System.prototype.setWindowBackOpacity = function (value) {
    this._windowBackOpacity = value;
    SceneManager.refreshWindowBackgrounds();
  };

  Game_System.prototype.windowBackOpacity = function () {
    if (this._windowBackOpacity === undefined) {
      this._windowBackOpacity = $.opacity;
    }
    return this._windowBackOpacity;
  };

  Game_System.prototype.windowBackColor = function () {
    if (this._windowBackColor === undefined) {
      this._windowBackColor = $.bgColor;
    }
    return this._windowBackColor;
  };

  /***************************************************************************/

  Window_Base.prototype.standardBackOpacity = function () {
    return $gameSystem.windowBackOpacity();
  };

  /* Ignore windowskin tone */
  Window.prototype._refreshBack = function () {
    var m = this._margin;
    var w = this._width - m * 2;
    var h = this._height - m * 2;
    var bitmap = new Bitmap(w, h);
    var rgb = $gameSystem.windowBackColor();
    var color = "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
    bitmap.fillRect(0, 0, w, h, color);
    this._windowBackSprite.bitmap = bitmap;
    this._windowBackSprite.setFrame(0, 0, w, h);
    this._windowBackSprite.move(m, m);
  };
})(TH.WindowBackgroundColors);
