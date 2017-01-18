auth.$inject = [ '$rootScope', 'userService', 'loginService', '$state' ];

export default function auth($rootScope, userService, loginService, $state) {
    
  // angular-ui-router puts this event ($stateChangeStart) on $rootScope
  $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
    
    if (!(toState.data && toState.data.public) && !userService.isAuthenticated()) {
      // stop ui-router from making the state change        
      event.preventDefault();
      loginService.login().then(() => {
        $state.go(toState.name, toParams);  
      });            
    }
  });
}