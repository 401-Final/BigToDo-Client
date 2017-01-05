import template from './tasks.html';
// import styles from './tasks.scss';

export default {
  template,
  bindings: {
    tasks: '<',
  },
  controller
};

controller.$inject = ['tasksService'];
function controller(tasksService) {

  this.$onInit = () => {
    
  }

  this.add = task => {
    console.log('frontend task', task);
    tasksService.addTask(task)
      .then(task => {
        this.tasks.push(task);
      });
  };
};