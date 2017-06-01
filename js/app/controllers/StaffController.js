function StaffController() {
  this.name = 'Charles Samuels'
  this.email = 'chasms@chas.ms'
  this.phone = '917.913.0066'
}

angular
  .module('app')
  .controller('StaffController', StaffController)
