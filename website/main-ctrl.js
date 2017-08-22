angular.module('mainApp', [], function() {
});

angular.module('mainApp').controller('mainCtrl', function mainCtrl($scope, $timeout) {

	$scope.model = {
		mainTitle: [
			'Shuttle',
			'2',
			'Mars'
		],
		views: [
			{title: 'Home', id: 'home'},
			{title: 'Book', id: 'book'},
			{title: 'Prepare', id: 'prepare'},
			{title: 'Gallery', id: 'gallery'},
			{title: 'About', id: 'about'}
		],
		activeViewId: ''
	};

	for (var i = 0; i < $scope.model.views.length; i++) {
		$scope.model.views[i].index = i;
	}

	$scope.model.activeViewId = $scope.model.views[0].id;

	$scope.onViewClick = function onViewClick(sender) {
		$scope.model.activeViewId = sender.view.id;
		var selectedElm = angular.element('.main__header__nav > ul > li:nth-of-type(' + (sender.view.index + 1) + ')');
		var markerElm = angular.element('.main__header__nav__marker');
		if (selectedElm && markerElm) {
			markerElm.css({
				'left': selectedElm.offset().left - selectedElm.parent().offset().left,
				'width': selectedElm[0].offsetWidth
			});
		}
	};

	$timeout(function() {
		$scope.onViewClick({view: $scope.model.views[0]})
	}, 1000);

});