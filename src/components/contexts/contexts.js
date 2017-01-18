import template from './contexts.html';
// import styles from './contexts.scss';

export default {
  template,
  bindings: {
    contexts: '<',
    tasks: '<'

  },
  controller

};

controller.$inject = ['contextsService', 'tasksService'];

function controller(contextsService, tasksService) {
  
  contextsService.getAllContexts()
    .then(contexts => {
      this.contexts = contexts;

    });

  this.add = context => {
    contextsService.addContext(context)
      .then(context => {
        this.contexts.push(context);
      });
  };

  this.toContext = () => {
    tasksService.getTasksByContext(this.selected)
    .then(tasks => this.tasks = tasks);

  };
};