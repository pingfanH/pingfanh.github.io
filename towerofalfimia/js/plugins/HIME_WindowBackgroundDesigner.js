/*:ja
 * @target MV
 * @url https://raw.githubusercontent.com/munokura/HIME-MV-plugins-jp/master/HIME_WindowBackgroundDesigner.js
 * @title Window Background Designer
 * @author Hime --> HimeWorks (http://himeworks.com)
 * @version 1.1
 * @date Apr 25, 2016
 * @filename HIME_WindowBackgroundDesigner.js
 *
 * @plugindesc v1.1 ウィンドウ別に背景画像を指定できます
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * 元プラグイン:
 * http://himeworks.com/2016/04/window-background-designer/
 *
 * == 説明 ==
 *
 * 同じ古いウィンドウに飽きた?
 * 背景を作成するためにあなた自身のカスタム画像を使用したいですか?
 * このプラグインを使用すると、ウィンドウに画像を割り当てて、
 * ウィンドウの背景として使用することができます。
 * また、ウィンドウのフレームを削除して、
 * プレイヤーに見えるのはカスタム画像だけになります。
 * 画像はウィンドウの内容の下に表示されるので、
 * ウィンドウに表示されたテキストやその他の画像は画像の上に表示されます。
 * このプラグインは、付属の設定ファイルに追加する限り、
 * どのようなウィンドウにも対応しています。
 *
 * == 使用方法 ==
 *
 * dataフォルダ内に'windows_config.csv'という設定ファイルを作成します。
 * このファイルには、ウィンドウに使用する全背景の情報を保存します。
 *
 * ファイルの書式は下記です。
 *
 * Window Name,Image Name (in System folder),Window Opacity,Scene Name
 * Window_MenuStatus,bg_menuStatus,0,
 * Window_MenuCommand,bg_menuCommand,0
 *
 * これをcsvファイルにコピーするか、
 * 私が提供したテンプレートをダウンロードしてください。
 *
 * 全ての画像は img/system フォルダに保存します。
 * そして、どのシーンにいるかに応じて、
 * どの画像をどのウィンドウに使用するかを決定します。
 *
 * -- ウィンドウに画像を割り当てる --
 *
 * このプラグインは、
 * コードで定義されているウィンドウのクラス名に基づいて画像を割り当てます。
 * テンプレートの設定ファイルでは、
 * デフォルトのコードベースに存在するウィンドウのリストを書き留めていますので、
 * どのウィンドウが目的のウィンドウなのかを把握する必要があります。
 * 名前は、ほとんどの場合、ある程度直感的なものになっています。
 * 例えば、以下のようになります。
 *
 * "Window_Gold"は所持金を表示するためのウィンドウです。
 * "Window_MenuStatus"はメニューの全アクターを表示するウィンドウです。
 * "Window_EquipList"は装備メニューの中で
 * 装備を選択できる全ての装備を表示するウィンドウです。
 *
 * カスタムウィンドウを提供するプラグインを使用している場合、
 * ウィンドウの名前を見つけ出して設定ファイルに追加する必要があります。
 * 通常、プラグインを開いて、次のような形式のものを探すことで行われます。
 *
 *    function WINDOW_SOMETHING()
 *
 * WINDOW_SOMETHING は対象となるウィンドウの名前です。
 * いつもこのパターンに従うとは限りませんが、運が良ければそうなるでしょう。
 * ウィンドウ名が何であるかは、いつでも何かに教えてもらうことができます。
 *
 * -- ウィンドウの不透明度を設定 --
 *
 * デフォルトでは、全てのウィンドウの不透明度は255です。
 * ウィンドウを透明にしたい場合は0に設定します。
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
 * 1.1 - Apr 25, 2016
 *  * Fixed bug with scene-specific entries.
 * 1.0 - Apr 1, 2016
 *  * initial release
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
@title Window Background Designer
@author Hime --> HimeWorks (http://himeworks.com)
@version 1.1
@date Apr 25, 2016
@filename HIME_WindowBackgroundDesigner.js
@url http://himeworks.com/2016/04/window-background-designer/

If you enjoy my work, consider supporting me on Patreon!

* https://www.patreon.com/himeworks

If you have any questions or concerns, you can contact me at any of
the following sites:

* Main Website: http://himeworks.com
* Facebook: https://www.facebook.com/himeworkscom/
* Twitter: https://twitter.com/HimeWorks
* Youtube: https://www.youtube.com/c/HimeWorks
* Tumblr: http://himeworks.tumblr.com/

@plugindesc v1.1 - Decorate all of your windows with custom images
@help 
== Description ==

Tired of the same old windows? Want to use your own custom image to create your
background?

This plugin allows you to assign images to your windows and use them as the
window backgrounds. It also allows you to remove the window frame so that all
the player will see is your custom image.

Images are drawn under the contents of the window, so text and other images
drawn on the window will be displayed above the image.

This plugin supports any window, as long as you add them to the supplied
configuration file.

== Terms of Use ==

- Free for use in non-commercial projects with credits
- Free for use in commercial projects, but it would be nice to let me know
- Please provide credits to HimeWorks

== Change Log ==

1.1 - Apr 25, 2016
 * Fixed bug with scene-specific entries.
1.0 - Apr 1, 2016
 * initial release

== Usage ==

In the data folder, create a configuration file called "window_config.csv".
This file will store all of the backgrounds that will be used for your windows.

The format of the file is

Window Name,Image Name (in System folder),Window Opacity,Scene Name
Window_MenuStatus,bg_menuStatus,0,
Window_MenuCommand,bg_menuCommand,0
  
You can start by copying this into your csv file, or just download a template
that I have provided.
  
All images will be stored in the img/system folder.

You can then determine which image will be used for which windows, depending
on which scene you're in.

-- Assigning Images to Windows --

This plugin assigns images based on the class name of the window as it is
defined in the code.

In the template configuration file, I have written down a list of windows
that exist in the default codebase, so you just need to figure out
which one is the window you want.

The names are somewhat intuitive most of the time. For example,

“Window_Gold” refers to the window that is used to display how much
gold you have.

“Window_MenuStatus” refers to the window that displays all of the
actors in the menu

“Window_EquipList” refers to the window that shows all of the equips
you can choose to equip, in the equip menu

If you are using plugins that provide custom windows, you will have to
figure out the name of the window and add it to the configuration file.
This is typically done by opening up the plugin and looking for something
of the form

   function WINDOW_SOMETHING()

Where WINDOW_SOMETHING is the name of the window you’re interested in.
It doesn’t always follow this pattern, but if you’re lucky they will be.
You can always have something tell you what the window names are.

-- Setting Window Opacity

By default, all windows have an opacity of 255.
If you would like to make the window transparent, you can set that to 0.

 */

var Imported = Imported || {};
var TH = TH || {};
Imported.TH_WindowBackgroundDesigner = 1;
TH.WindowBackgroundDesigner = TH.WindowBackgroundDesigner || {};

(function ($) {

  $.configLoaded = false;

  $.getData = function (windowName) {
    return $._data[windowName];
  };

  $.loadConfig = function () {
    var xhr = new XMLHttpRequest();
    var url = 'data/window_config.csv';
    xhr.open('GET', url);
    // xhr.overrideMimeType('application/json');
    xhr.onload = function () {
      if (xhr.status < 400) {
        $.onLoad(xhr.responseText);
      }
    };
    xhr.onerror = function () {
      DataManager._errorUrl = DataManager._errorUrl || url;
    };
    xhr.send();
  };

  $.onLoad = function (data) {
    $._data = {};
    data = data.split("\n");
    for (var i = 1; i < data.length; i++) {
      var dat = {}
      var tokens = data[i].split(",");
      dat.windowName = tokens[0];
      dat.imageName = tokens[1];
      dat.opacity = Math.floor(tokens[2]);
      dat.sceneName = tokens[3];

      var key;
      if (dat.sceneName !== '') {
        key = dat.sceneName + "-" + dat.windowName;
      }
      else {
        key = dat.windowName;
      }

      $._data[key] = dat;
    }
    $.configLoaded = true;
  };

  var TH_DataManager_loadDatabase = DataManager.loadDatabase;
  DataManager.loadDatabase = function () {
    TH_DataManager_loadDatabase.call(this);
    $.loadConfig();
  };

  var TH_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
  DataManager.isDatabaseLoaded = function () {
    var res = TH_DataManager_isDatabaseLoaded.call(this);
    if (res) {
      res = $.configLoaded;
    }
    return res;
  };

  var TH_WindowBase_initialize = Window_Base.prototype.initialize;
  Window_Base.prototype.initialize = function (x, y, width, height) {
    TH_WindowBase_initialize.call(this, x, y, width, height);
    var data = $.getData(SceneManager._scene.constructor.name + "-" + this.constructor.name);
    if (!data) {
      data = $.getData(this.constructor.name);
    }
    if (data) {
      this.opacity = data.opacity;
      this._bgSprite = new Sprite();
      // this._bgSprite.move(0, 0, this.width, this.height);
      this._bgSprite.bitmap = ImageManager.loadSystem(data.imageName);
      this.addChildAt(this._bgSprite, 0);
    }
  };

})(TH.WindowBackgroundDesigner);