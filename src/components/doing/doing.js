// import template from './doing.html';
// import styles from './doing.scss';

// export default {
//   template,
//   bindings: {
//     contexts: '<',
//     tasks: '<',
//     projects: '<'
//   },
//   controller

// };

// controller.$inject = ['contextsService', 'tasksService'];

// function controller(contextsService, tasksService) {

//   this.styles = styles;
  
//   this.$onInit = () => {
//     this.allContexts = this.contexts;
//     console.log('allcont', this.allContexts);
//   };

//   // contextsService.getAllContexts()
//   //   .then(contexts => {
//   //     this.contexts = contexts;
//   //   });

//   this.refreshTasks = () => {
//     tasksService.getTasksByContext(this.contextSelect._id)
//       .then((tasks) => {
//         this.tasks = tasks;
//       });
//   };


//   // this.refresh = () => {
//   //   tasksService.getAllTasks()
//   //     .then(tasks => {
//   //       this.tasks = tasks;
//   //     });
//   // };

  

//   this.add = context => {
//     console.log('frontend context', context);
//     contextsService.addContext(context)
//       .then(context => {
//         this.contexts.push(context);

//       });
//   };

//   // this.toContext = () => {
//   //   tasksService.getTasksByContext(this.selected)
//   //   .then(tasks => this.tasks = tasks);

//   // };
// };

import template from './doing.html';
import styles from './doing.scss';

export default {
  template,
  bindings: {
    contexts: '<',
    tasks: '<'
  },
  controller

};

controller.$inject = ['contextsService', 'tasksService'];

function controller(contextsService, tasksService) {

  this.styles = styles;
  
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

  this.toContext = () => {
    tasksService.getTasksByContext(this.selected)
    .then(tasks => this.tasks = tasks);

  };
};