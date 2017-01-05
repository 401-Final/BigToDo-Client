import template from './add.html';

export default {
  template,
  bindings: {
    _fields: '@fields',
    add: '<'
  },
  controller
};

function controller() {

  this.$onInit = () => {
    this.fields = this._fields.replace(/ /g, '').split(',');
  };

  this.reset = () => {
    this.item = {};
  };

  this.submit = () => {
    this.add(this.item);
    this.reset();
  };

}