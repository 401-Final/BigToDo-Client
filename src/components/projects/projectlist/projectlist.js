import template from './projectlist.html';
import styles from './projectlist.scss';

export default {
  template,
  bindings: {
    projects: '<'
  },
  controller
};

function controller() {

  this.styles = styles;
  
}