angular.module('progressbar').directive('progressbardirective', function() {
  return {
    restrict: 'E',
    scope: {
      mystate:'=barstate'
    },
    templateUrl: 'tmpls/progressbartmpl.html'
  };
});