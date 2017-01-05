import template from './projects.html';
// import styles from './projects.scss';

export default {
  template,
  bindings: {
    projects: '<',
  },
  controller
};

controller.$inject = ['projectsService'];
function controller(projectsService) {

};