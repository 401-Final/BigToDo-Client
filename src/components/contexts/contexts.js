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
  
  contextsService.getAllContexts()
    .then(contexts => {
      this.contexts = contexts;
    });

  this.add = context => {
    console.log('frontend context', context);
    contextsService.addContext(context)
      .then(context => {
        this.contexts.push(context);
      });
  };
};