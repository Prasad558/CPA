app.controller('HomeCntrl', function ($scope, $filter, $http, $localStorage, $rootScope) {
    


    $scope.dashboardTable = function (type) {
        $localStorage.tableType = type;
        //alert($localStorage.tableType)
       
    }
    $scope.NewServiceRequest = "New Service Request";
    //$scope.ServiceRequestMethod = function (val) {
    //    $scope.ServiceRequest = val;
    //}
   
   
});