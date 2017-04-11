// you'll be building a lot of components!

(function (){
  'use strict'
  angular.module('app', [])
    .component('newPost', {
    controller:
      function($scope) {
        const vm = this
      vm.newPost = function(){
        console.log('linked up!')
      }
      vm.$onInit = function(){
        vm.auntJemima = new Date()
      }
      $scope.IsVisible = false;
            $scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }


      },
      templateUrl:   '../htmlTemplates/new.html'

      
    })
})();

// <div class="container">
//   <div class="row">
//     <div class='col-lg-4' ng-show="IsVisible">TESTING!</div>
//   </div>
// </div>
