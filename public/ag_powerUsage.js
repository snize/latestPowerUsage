var myApp = angular.module('myTepco', []);
myApp.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.plants = [
        {"key": "hokkaido", "name": "北海道"},
        {"key": "tohoku", "name": "東北"},
        {"key": "tokyo", "name": "東京"},
        {"key": "chubu", "name": "中部"},
        {"key": "kansai", "name": "関西"},
        {"key": "kyushu", "name": "九州"}
    ];

    $scope.user = "tokyo";

    $scope.latestPowerUsage = function () {

        var url = 'http://setsuden.yahooapis.jp/v1/Setsuden/latestPowerUsage?'
            + [
            'appid=hogehoge',
            'output=json',
            'area=' + $scope.user,
            'callback=JSON_CALLBACK'
        ].join('&');


        $http.jsonp(url).success(function (data) {
            $scope.results = data.ElectricPowerUsage;
        });
    };


}])