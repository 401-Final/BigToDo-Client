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

};