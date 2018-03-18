var aplication = angular.module("myApp", []);
aplication.controller("myCtrl", function($scope){
	$scope.produtos = ["Leite", "Café", "Feijão", "Açucar"];
	$scope.actionNovoProduto = function(){
		$scope.produtos.push($scope.novoProduto);
	};
})