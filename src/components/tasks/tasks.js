import template from './tasks.html';
import styles from './tasks.scss';

export default {
  template,
  bindings: {
    tasks: '<',
    projects: '<',
    contexts: '<'
  },
  controller
};

controller.$inject = ['tasksService'];
function controller(tasksService) {



  this.refresh = () => {
    tasksService.getAllTasks()
      .then(tasks => {
        this.tasks = tasks;
        console.log('tasks', this.tasks);
      });
  };

  this.refresh();

  this.add = task => {
    tasksService.addTask(task)
      .then(task => {
        this.tasks.push(task);
        this.refresh();
      });
  };
};