function StaffController() {
  this.name = "Bill Gates";
  this.email = "bill@microsoft.com";
  this.phone = "123456789";
}

angular
  .module('app')
  .controller('StaffController', StaffController)
