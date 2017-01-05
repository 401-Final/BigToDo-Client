import template from './contexts.html';
// import styles from './contexts.scss';

export default {
  template,
  bindings: {
    contexts: '<',
  },
  controller
};

controller.$inject = ['contextsService'];
function controller(contextsService) {

};