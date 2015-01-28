var app = angular.module("weatherApp", ["ngRoute"]);

// var test = console.log("fique tranquilo rapaiz");

app.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "home/home.html",
			controller: "homeCtrl"

		})
		.when("/weather/:name", { //:name here is a parameter
			templateUrl: 'weather/weather.html',
			controller: 'weatherCtrl',
			resolve: {
				weather: function(weatherService){
					return weatherService.getWeather();
				}
			}
		})
		.otherwise("/");
});