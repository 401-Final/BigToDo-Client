import template from './tasks.html';
// import styles from './tasks.scss';

export default {
  template,
  controller
  
};

controller.$inject = ['tasksService'];
function controller(tasksService) {
  this.tasks = tasksService.getAllTasks();

};