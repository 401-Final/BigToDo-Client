import template from './tasklist.html';
import styles from './tasklist.scss';

export default {
  template,
  bindings: {
    tasks: '<'
  },
  controller
};

function controller() {

  this.styles = styles;

}