contextsService.$inject = ['$http', 'apiUrl'];

export default function contextsService($http, apiUrl) {
  return {
    getAllContexts() {
      return $http.get(`${apiUrl}/contexts`)
        .then(res => res.data);
    },
    getOneContext(contextId) {
      return $http.get(`${apiUrl}/contexts/${contextId}`)
        .then(res => res.data);
    },
    addContext(context) {
      return $http.post(`${apiUrl}/contexts`, context)
        .then(res => res.data);
    },
    editContext(contextId, context) {
      return $http.put(`${apiUrl}/contexts/${contextId}`, context)
        .then(res => res.data);
    },
    deleteContext(contextId) {
      return $http.delete(`${apiUrl}/contexts/${contextId}`)
        .then(res => res.data);
    }
  };
}