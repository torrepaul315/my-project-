var posts
(function (){
  'use strict'
  angular.module('app')
    .component('listIt', {
    controller: function ($scope) {
      const vm = this


      vm.$onInit = function () {
        console.log('something works?')
        vm.posts = [{
          title:"your mom",
          author:"go bleep yahself",
          body:"weeeeeeeee firetrucks outside with sirens",
          url:"this is a dummy string"
        }
        ];
      }
      $scope.IsVisible = false;
            $scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }
      vm.createNewPost = function(){
        vm.newPostForm.$setPristine();
        console.log(vm.newPost);
        console.log(vm.posts);
        vm.posts.push(vm.newPost);

        delete vm.newPost
      }

      vm.increment = function() {

         console.log(vm.counter)
         vm.counter++;
      }
      vm.decrement = function() {
        console.log(vm.counter)
        if (vm.counter > 0) {
          vm.counter--;
        }
        
      }


      },
    templateUrl:
    '../htmlTemplates/list.html'

  })
})
()
