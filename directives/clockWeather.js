var app = angular.module("weatherApp");

app.directive('clockWeather', function($interval){  //creates clockWeather directive
	return {
		template: "<div>{{hours}}:{{minutes}}:{{seconds}}</div>",
		restrict: "E", //restrict only elements
		link: function(scope, elem, attrs) { //link method
			var date = new Date();
			scope.hours = date.getHours();
			scope.minutes = date.getMinutes();
			scope.seconds = date.getSeconds();
			$interval(function(){               
				var date = new Date();
				scope.hours = date.getHours();
				scope.minutes = date.getMinutes();
				scope.seconds = date.getSeconds();
			}, 1000)
		}
	}
});
