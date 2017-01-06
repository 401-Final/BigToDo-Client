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
    component: 'tasks',
    resolve: {
      tasks: ['tasksService', tasksService => {
        return tasksService.getAllTasks();
      }],
      contexts: ['contextsService', contextsService => {
        return contextsService.getAllContexts();
      }],
      projects: ['projectsService', projectsService => {
        return projectsService.getAllProjects();
      }]
    },
  });

  $stateProvider.state({
    name: 'projects',
    url: '/projects',
    component: 'projects',
    resolve: {
      projects: ['projectsService', projectsService => {
        return projectsService.getAllProjects();
      }]
    },
  });

  // $stateProvider.state({
  //   name: 'contexts',
  //   url: '/contexts',
  //   component: 'contexts',
  //   resolve: {
  //     contexts: ['contextsService', contextsService => {
  //       return contextsService.getAllContexts();
  //     }]
  //   },
  // });

  $stateProvider.state({
    name: 'plan',
    url: '/planning',
    component: 'planning',
    resolve: {
      projects: ['projectsService', projectsService => {
        return projectsService.getAllProjects();
      }],
      tasks: ['tasksService', tasksService => {
        return tasksService.getAllTasks();
      }]
    }
  });

  $stateProvider.state({
    name: 'do',
    url: '/doing',
    component: 'doing',
    
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $urlRouterProvider.otherwise('/');
    
}