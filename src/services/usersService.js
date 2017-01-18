// why would this not be on `user-service`?

usersService.$inject = ['$http', 'apiUrl'];

export default function usersService($http, apiUrl) {
  return {
    editUser(userId, userData) {
      return $http.put(`${apiUrl}/users/${userId}`, userData)
        .then(res => res.data);
    }
  };
}