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

  projectsService.getAllProjects()
    .then(projects => {
      this.projects = projects;
    });

  this.add = project => {
    projectsService.addProject(project)
      .then(project => {
        this.projects.push(project);
      });
  };

};