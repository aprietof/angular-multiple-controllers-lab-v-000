function ContactController() {
  var vm = this;

  vm.name = "Steve Jobs";
  vm.email = "steve@apple.com";
  vm.phone = "2129808765"


  this.changeName = function () {
    vm.name = "Tim Cook"
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
