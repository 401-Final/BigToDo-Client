tasksService.$inject = ['$http', 'apiUrl'];

// I think I would have shortened the method names on your services.
// You already know its the "task" service
export default function tasksService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/tasks`)
        .then(res => res.data);
    },
    byProject(projectId) {
      return $http.get(`${apiUrl}/tasks?projectId=${projectId}`)
        .then(res => res.data);
    },
    byContext(contextId) {      
      return $http.get(`${apiUrl}/tasks?contextId=${contextId}`)
        .then(res => res.data);
    },
    byId(taskId) {
      return $http.get(`${apiUrl}/tasks/${taskId}`)
        .then(res => res.data);
    },
    add(taskData) {
      return $http.post(`${apiUrl}/tasks`, taskData)
        .then(res => res.data);
    },
    // "edit" typically describes actively changing, "update" means go update the db
    update(taskId, taskData) {
      return $http.put(`${apiUrl}/tasks/${taskId}`, taskData)
        .then(res => res.data);
    },
    delete(taskId) {
      return $http.delete(`${apiUrl}/tasks/${taskId}`)
        .then(res => res.data);
    }
  };
}