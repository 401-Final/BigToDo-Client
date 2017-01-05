routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'

  });

  $stateProvider.state({
    name: 'tasks',
    url: '/tasks',
    
    component: 'tasks'

  });

  // $stateProvder.state({
  //   name: 'projects',
  //   url: '/projects',

  // });


  $urlRouterProvider.otherwise('/');
}