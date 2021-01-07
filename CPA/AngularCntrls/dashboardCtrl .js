app.controller('DashboardCntrl', function ($scope, $filter, $http, $localStorage, $rootScope) {


   
    $rootScope.leftMenu = 'startup';
    $scope.addIconCollapse = function () {
        $(".collapse").on('show.bs.collapse', function () {
            $(this).parent().find(".glyphicon").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top");
        }).on('hide.bs.collapse', function () {
            $(this).parent().find(".glyphicon").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom");
        });
    };
    $scope.addIconCollapseSearch = function () {
        $(".collapse").on('show.bs.collapse', function () {
            $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
        }).on('hide.bs.collapse', function () {
            $(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
        });
    };

    $scope.addIconCollapseServiceRequest = function () {
        $(".collapse").on('show.bs.collapse', function () {
            $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
        }).on('hide.bs.collapse', function () {
            $(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
        });
    };
   //alert()
    $scope.LicenceMsg1 = 'APPLICATION FOR A SPECIAL LICENCE';
    $scope.LicenceMsg2 = 'LEGAL OPINION';
    $scope.LicenceMsg3 = 'APPLICATION FOR CONSENT TO HOLD A FINANCIAL INTEREST IN A LICENSEE';
    $scope.LicenceMsg4 = 'APPLICATION FOR A TAB AGENCY AND TAB BRANCH';
    $scope.LicenceMsg5 = 'APPLICATION FOR REGISTRATION AS BOOKMAKER’S MANAGER';
    $scope.LicenceMsg6 = 'APPLICATION FOR CERTIFICATE OF SUITABILITY';
    $scope.LicenceMsg7 = 'APPLICATION FOR AN AMENDMENT OF BOOKMAKER’S LICENCE';

    $scope.DescriptionMesg1 = 'Application for special license for event from 1 Nov 2019 to 7 Nov 2019';
    $scope.DescriptionMesg2 = 'Please provide me with assistance regarding activities at neighbor`s house';

    
    $scope.tableType = 'New';
    if ($localStorage.tableType) {
        //alert($localStorage.tableType)
        $scope.tableType = $localStorage.tableType;
        //window.location.reload(false);
    }
});