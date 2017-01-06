contextsService.$inject = ['$http', 'apiUrl'];

export default function contextsService($http, apiUrl) {
  return {
    getAllContexts() {
      return $http.get(`${apiUrl}/contexts`)
        .then(res => res.data);
    },
    getContextById(contextId) {
      return $http.get(`${apiUrl}/contexts/${contextId}`)
        .then(res => res.data);
    },
    addContext(contextData) {
      return $http.post(`${apiUrl}/contexts`, contextData)
        .then(res => res.data);
    },
    editContext(contextId, contextData) {
      return $http.put(`${apiUrl}/contexts/${contextId}`, contextData)
        .then(res => res.data);
    },
    deleteContext(contextId) {
      return $http.delete(`${apiUrl}/contexts/${contextId}`)
        .then(res => res.data);
    }
  };
}