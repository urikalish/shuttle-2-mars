angular.module('mainApp', [], function() {
});

angular.module('mainApp').controller('mainCtrl', function mainCtrl($scope) {

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

  $scope.model.activeViewId = $scope.model.views[0].id;

  $scope.onViewClick = function onViewClick(id) {
    $scope.model.activeViewId = id;
  }

});