app.service('DashboardService', function ($http) {

    // get dashboard information by  Service
    this.Get_Dashboard_Info = function () {
        var res = $http.post('../Admin/Get_DashboardInfo');
        return res;
    };


    // print Test Pdf Form
    this.TestPdf = function (ModelData) {

        var res = $http.post('../Reports/TestPdf', ModelData);
        return res;
    };

    // print Test Pdf 4 Form
    this.TestPdf4 = function (ModelData) {

        var res = $http.post('../Reports/TestPdf4', ModelData);
        return res;
    };

    this.FinancialLicencePDFService = function (ModelData) {
        //alert()
        var res = $http.post('../Reports/FinancialLicencePDF', ModelData);
        return res;
    };
    this.AmendmentLicencePDFService = function (ModelData) {
        //alert()
        var res = $http.post('../Reports/AmendmentLicencePDF', ModelData);
        return res;
    };
    this.SuitabilityCertificatePDFService = function (ModelData) {
        var res = $http.post('../Reports/SuitabilityCertificatePDF', ModelData);
        return res;
    };

});