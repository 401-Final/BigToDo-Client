import template from './app.html';

export default {
  template,
  controller
};

controller.$inject = ['userService', '$state'];

function controller(userService, $state) {
  this.logout = () => {
    userService.logout();
    $state.go('welcome');
  };

  this.isAuthenticated = () => userService.isAuthenticated();
}