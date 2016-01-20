//Top level component in Angular is the module
angular.module('angMod', [])
angular.module('angMod').controller('angoller', ['$scope', 
	function($scope) {

		$scope.Part1 = function () {
			console.log('Part1')
		}
	
	}])