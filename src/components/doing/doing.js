import template from './doing.html';
import styles from './doing.scss';

export default {
  template,
  bindings: {
    contexts: '<',
    tasks: '<',
    projects: '<'
  },
  controller

};

controller.$inject = ['contextsService', 'tasksService'];

function controller(contextsService, tasksService) {

  this.styles = styles;
  
  contextsService.getAllContexts()
    .then(contexts => {
      this.contexts = contexts;

    });

  this.add = context => {
    console.log('frontend context', context);
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