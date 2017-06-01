function ContactController() {
  var vm = this

  vm.name = 'Steve Jobs'
  vm.email = 'steve@apple.com'
  vm.phone = '012.345.6789'

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
