app.controller('SuitabilityCntrl', function ($scope, $filter, $http, $localStorage, DashboardService) {
    $scope.ModelData = {};
    $scope.sameAsAboveAddess = function (SameAsAboveAddess) {

        if (SameAsAboveAddess === "Yes") {

            $scope.ModelData.Postal_Address1 = $scope.ModelData.physical_Address1;
            $scope.ModelData.Postal_Address2 = $scope.ModelData.physical_Address2;
            $scope.ModelData.Postal_StreetName = $scope.ModelData.physical_StreetName;
            $scope.ModelData.Postal_City = $scope.ModelData.physical_City;
            $scope.ModelData.Postal_PostalCode = $scope.ModelData.physical_PostalCode;
            $scope.ModelData.Postal_Province = $scope.ModelData.physical_Province;
            $scope.ModelData.Postal_Country = $scope.ModelData.physical_Country;

        }
        else {

            $scope.ModelData.Postal_Address1 = "";
            $scope.ModelData.Postal_Address2 = "";
            $scope.ModelData.Postal_StreetName = "";
            $scope.ModelData.Postal_City = "";
            $scope.ModelData.Postal_PostalCode = "";
            $scope.ModelData.Postal_Province = "";
            $scope.ModelData.Postal_Country = "";

        }
    };
    $scope.imgLoader_pdf = false;
    //Print pdf data
    $scope.SuitabilityPdfForm = function () {
        console.log($scope.ModelData)
        $scope.imgLoader_pdf = true;
        // print DMR164 Form
        DashboardService.SuitabilityCertificatePDFService($scope.ModelData).then(function (res) {

            console.log(res);
            var href = "../Attachments/" + res.data;
            $scope.DecidionRecordFileName = res.data;
            var printwWindow = window.open(href);
            $scope.imgLoader_pdf = false;
            setTimeout(function () {
                $scope.deleteTlPdf($scope.DecidionRecordFileName);
            }, 100);
        }).catch(function (response) {
            //bummer
        });

    };

    $scope.deleteTlPdf = function (letterName) {
        $http.get('../Reports/deletePdfLetter?name=' + letterName).success(function (data) {
            console.log(data);
            //alert(data);
        });
    }

});