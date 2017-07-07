(function () {
'use strict';
//var x="Hello";
angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject =['$scope'];

function LunchCheckController ($scope) {
$scope.list='';
$scope.msg='';
$scope.fontStyle = {};
$scope.boxStyle = {};

$scope.displayMsg = function () {
  if($scope.list !== '') {
  var arrayOfStrings = $scope.list.split(',');
  var count=0;
  for(var i =0; i<arrayOfStrings.length; i++){
					if(arrayOfStrings[i].trim() !=='')
						count++;
          }
          if(count > 0){
        					if(count <=3){
    $scope.msg='Enjoy!';
  }

  else if (count>3) {
    $scope.msg='Too Much!';
  }
  $scope.fontStyle = {
  						"color":"green"
  					};
            $scope.boxStyle = {
            						"border-color":"green"
            					};
          }
  else {
    enterItems();
  }
}
			else {
				enterItems();
			}
}

var enterItems = function() {
			$scope.msg = 'Please enter data first';
				$scope.fontStyle = {
					"color":"red"
				};
        $scope.boxStyle = {
					"border-color":"red"
				};
		};
}

})();
