import template from './planning.html';
import styles from './planning.scss';

export default {
  template,
  bindings: {
    tasks: '<',
    projects: '<'
  },
  controller
};

controller.$inject = [ 'tasksService', 'projectsService' ];

function controller(tasksService, projectsService) {

  this.styles = styles;

  this.$onInit = () => {
    this.allProjects = this.projects;
    console.log('allprojs', this.allProjects);
  };

  this.refreshTasks = () => {
    tasksService.getTasksByProject(this.projectSelect._id)
      .then((tasks) => {
        this.tasks = tasks;
      });
  };

  this.refreshProjects = () => {
    projectsService.getProjectsByParent(this.projectSelect._id)
      .then((projects) => {
        this.projects = projects;
      });
  };

  this.refreshLists = () => {
    this.refreshProjects();
    this.refreshTasks();
  };

  // this.refreshTasks();
}
