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
  
  this.$onInit = () => {
    // Why not just use this.contexts???
    this.allContexts = this.contexts;
  };

  this.refreshTasks = () => {
    tasksService.getTasksByContext(this.context._id)
      .then((tasks) => {
        this.tasks = tasks;
      });
  };

  this.add = context => {
    contextsService.addContext(context)
      .then(context => {
        this.contexts.push(context);

      });
  };

};
