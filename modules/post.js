angular.module('app')
  .component('post',{
    bindings: {
      data:"="
    },
    template:"{{$ctrl.data}}"
  })
