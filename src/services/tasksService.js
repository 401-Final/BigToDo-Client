tasksService.$inject = ['$http', 'apiUrl'];

export default function tasksService($http, apiUrl) {
  return {
    getAllTasks() {
      return $http.get(`${apiUrl}/tasks`)
        .then(res => res.data);
    },
    getTasksByProject(projectId) {
      return $http.get(`${apiUrl}/tasks?projectId=${projectId}`)
        .then(res => res.data);
    },
    getTasksByContext(contextId) {      
      return $http.get(`${apiUrl}/tasks?contextId=${contextId}`)
        .then(res => {
          return res.data;
        });
    },
    getTaskById(taskId) {
      return $http.get(`${apiUrl}/tasks/${taskId}`)
        .then(res => res.data);
    },
    addTask(taskData) {
      return $http.post(`${apiUrl}/tasks`, taskData)
        .then(res => res.data);
    },
    editTask(taskId, taskData) {
      return $http.put(`${apiUrl}/tasks/${taskId}`, taskData)
        .then(res => res.data);
    },
    deleteTask(taskId) {
      return $http.delete(`${apiUrl}/tasks/${taskId}`)
        .then(res => res.data);
    }
  };
}