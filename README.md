latestPowerUsage
================

Sample app for Meteor and AngularJS

[震災関連情報:電力使用状況API - Yahoo!デベロッパーネットワーク](http://developer.yahoo.co.jp/webapi/shinsai/setsuden/v1/latestpowerusage.html "震災関連情報:電力使用状況API - Yahoo!デベロッパーネットワーク")を利用してMeteorとAngularJSの比較用アプリを作ってみました。

## Requirements

* [Meteor](http://meteor.com/ "Meteor")
* [電力使用状況API](http://developer.yahoo.co.jp/webapi/shinsai/setsuden/v1/latestpowerusage.html "電力使用状況API")のキー

## HowTo Try

`myapp.js`と`public/ag_powerUsage.js`内のAPIキー{hogehoge}を取得したAPIキーに置き換えてください。

	$ cd ~/Desktop/
	$ git clone git@github.com:snize/latestPowerUsage.git
	$ cd latestPowerUsage
	$ meteor
	[[[[[ ~/Desktop/latestPowerUsage ]]]]]

	=> Meteor server running on: http://localhost:3000/
	
[http://localhost:3000/](http://localhost:3000/ "電力使用状況")にアクセス可能になりました。