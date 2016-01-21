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
		$scope.onClick1 = true;
		$scope.onClick2 = true;
		$scope.confirmBox = function (event, id) {
			if (id == 'link1') {
				$scope.onClick1 = confirm("Do you wish to proceed?");
				if ($scope.onClick1 == false) {
					console.log(event.preventDefault());
				}
			}
			else {
				$scope.onClick2 = confirm("Do you wish to proceed?");
				if ($scope.onClick2 == false) {
					console.log(event.preventDefault());
				}
			}
		}
		
		$scope.showDiv = false;
		$scope.showMe = function () {
			$scope.showDiv = !$scope.showDiv;
		}
	}])