import template from './add.html';
import styles from './add.scss';

export default {
  template,
  bindings: {
    _fields: '@fields',
    add: '<',
    projects: '<',
    contexts: '<'
  },
  controller
};

function controller() {

  this.styles = styles;

  this.$onInit = () => {
    this.fields = this._fields.replace(/ /g, '').split(',');
  };

  this.reset = () => {
    this.item = {};
  };

  this.submit = () => {
    // this.item.parentId = this.parentId;
    this.add(this.item);
    this.reset();
  };

}