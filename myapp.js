if (Meteor.isClient) {
    Template.template_main.results = function () {
        return Session.get("recentUsage") || [];
    }

    Template.template_sidebar.events = {
        'change .radio': function () {
            var plant = this.key;
            Meteor.call('latestPowerUsage', plant, function (err, responseJson) {
                Session.set("recentUsage", responseJson);
            });
        }
    }

    Template.template_sidebar.plants = [
        {"key": "hokkaido", "name": "北海道"},
        {"key": "tohoku", "name": "東北"},
        {"key": "tokyo", "name": "東京"},
        {"key": "chubu", "name": "中部"},
        {"key": "kansai", "name": "関西"},
        {"key": "kyushu", "name": "九州"}
    ];

    Meteor.startup(function () {
        var plant = "tokyo";
        Meteor.call('latestPowerUsage', plant, function (err, responseJson) {
            Session.set("recentUsage", responseJson);
        });
    });
}


if (Meteor.isServer) {

    Meteor.methods({
        latestPowerUsage: function (plant) {
            var url = 'http://setsuden.yahooapis.jp/v1/Setsuden/latestPowerUsage?'
                + [
                'appid=hogehoge',
                'output=json',
                'area=' + plant
            ].join('&');

            var result = Meteor.http.get(url);
            var responseJson = JSON.parse(result.content).ElectricPowerUsage;
            return responseJson;
        }
    });
}
