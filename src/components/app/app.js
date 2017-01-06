import template from './app.html';

export default {
  template,
  controller
};

controller.$inject = ['userService', 'loginService','$state'];

function controller(userService, loginService, $state) {
  this.logout = () => {
    $state.go('welcome')
    .then(() => userService.logout());

  };
  
  this.login = () => {
    loginService.login();
    // $state.go('login');

  };

  this.isAuthenticated = () => userService.isAuthenticated();
}