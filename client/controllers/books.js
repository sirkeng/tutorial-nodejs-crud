var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');

	$scope.getBooks = function(){
		$http.get('/api/books').then(function(response){
			$scope.books = response.data;

			// console.log($scope.books);
		});
	}

	$scope.getBook = function(){
		var id = $routeParams.id;
		// console.log(id);
		$http.get('/api/books/'+id).then(function(response){
			$scope.book = response.data;
		});
	}

	$scope.addBook = function(){
		console.log($scope.book);
		$http.post('/api/books/', $scope.book).then(function(response){
			window.location.href = '#!/books';
		});
	}
}]);