//Top level component in Angular is the module
angular.module('angMod', [])
angular.module('angMod').controller('angoller', ['$scope', 
	function($scope) {
		$scope.Part1 = function () {
			console.log('Part1');
			$scope.buttonMessage = 'This is the Message in the button';
		}
		$scope.Part41 = function () {
			console.log('Part1.4');
			$scope.listMessage = 'This is the Message in the list';
		}
		$scope.exclamation = function (which) {
			console.log('exclamation')
			if (which == 'h2') {
				$scope.h2exclamationPoint = '!'
			}
			else {
				$scope.exclamationPoint = '!'
			}
		}
		$scope.confirmBox = function (event) {
			var onclick = confirm("Do you wish to proceed?");
				if (onclick == false) {
					console.log(event.preventDefault())
				}
		}
	}])