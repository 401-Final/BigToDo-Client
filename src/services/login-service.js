loginService.$inject = ['ngDialog'];

export default function loginService(ngDialog) {
  return {
    login() {
      return new Promise((resolve, reject) => {
        const dialog = ngDialog.open({ 
          // ngDialog missed the boat on template vs templateUrl
          template: '<user-auth success="success"></user-auth>',
          // plain: true === template; plain: false (default) === templateUrl 
          plain: true,
          controller: ['$scope', function($scope){
            $scope.success = function(){
              dialog.close();
              resolve();
            };
          }]
        });
                 
      });
    }
  };
}