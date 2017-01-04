tasksService.$inject = ['$http', 'apiUrl'];

export default function tasksService($http, apiUrl) {
  return {
    getAllTasks() {
      return $http.get(`${apiUrl}/tasks`)
        .then(res => res.data);
    },
    getTasksByProject(projectId) {
      return $http.get(`${apiUrl}/tasks?project=${projectId}`)
        .then(res => res.data);
    },
    getTasksByContext(contextId) {
      return $http.get(`${apiUrl}/tasks?context=${contextId}`)
        .then(res => res.data);
    },
    getOneTask(taskId) {
      return $http.get(`${apiUrl}/tasks/${taskId}`)
        .then(res => res.data);
    },
    addTask(task) {
      return $http.post(`${apiUrl}/tasks`, task)
        .then(res => res.data);
    },
    editTask(taskId, task) {
      return $http.put(`${apiUrl}/tasks/${taskId}`, task)
        .then(res => res.data);
    },
    deleteTask(taskId) {
      return $http.delete(`${apiUrl}/tasks/${taskId}`)
        .then(res => res.data);
    }
  };
}