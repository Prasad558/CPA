
app.controller('CompanyCntrl', function ($scope, $http, $localStorage, DashboardService) {


    // Option a patient
    $scope.Company = function (val) {
        //alert(val);
        $localStorage.Option = val;
    };

    // Option for Analysis
    $scope.GoTo_Analysis = function (val) {
        //alert(val);
        $localStorage.Option_Analysis = val;
        // window.location.href ='../Admin/ExamineAnalysis'
    };




    $scope.imgLoader_pdf = false;
    //Print pdf data
    $scope.PdfForm = function () {
        console.log($scope.ModelData)
        $scope.imgLoader_pdf = true;
        // print DMR164 Form
        DashboardService.TestPdf($scope.ModelData).then(function (res) {

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


    //Test4
    //

    // Add Bank Details to an array
    $scope.BankDetailsArray = [];
    $scope.BankModel = {};
    $scope.AddMoreBankDetails = function (bankModel) {


        $scope.BankDetailsArray.push({
            Bank: bankModel.Bank,
            Branch: bankModel.Branch,
            AccountNumber: bankModel.AccountNumber,
        });

        delete $scope.BankModel;
    };

    // Remove Bank Details from an array
    $scope.DeleteBank = function (index) {

        $scope.BankDetailsArray.splice(index, 1);
    };

    $scope.PdfForm4 = function () {
        console.log($scope.ModelData)
        if ($scope.ModelData === undefined) {
            $scope.ModelData = {};
        }

        $scope.ModelData.BankDetails = [];

        $scope.imgLoader_pdf = true;
        $scope.ModelData.BankDetails = $scope.BankDetailsArray;
        console.log($scope.ModelData);
        DashboardService.TestPdf4($scope.ModelData).then(function (res) {

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

