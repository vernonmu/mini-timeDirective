angular.module('timeApp')
.directive('showTime', function() {
  return {
    template: "<div>The current time is {{ time}}"
  , restrict: "E"
  , link: function (scope, elem, attr) {
    var currentTime = new Date();
    scope.time = currentTime.toLocaleString();
    console.log(currentTime)
  }
  }

})
