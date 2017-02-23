tokenService.$inject = ['$window'];

const TOKEN_NAME = 'BTDtoken';

export default function tokenService($window) {
  return {
    get() {
      return $window.localStorage.getItem(TOKEN_NAME);
    },
    remove() {
      $window.localStorage.removeItem(TOKEN_NAME);
    },
    set(token) {
      $window.localStorage.setItem(TOKEN_NAME, token);
    }
  };
}