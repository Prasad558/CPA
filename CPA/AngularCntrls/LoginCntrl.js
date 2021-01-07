app.controller('LoginCntrl', function ($scope, $http, $window, $localStorage) {
    $window.localStorage.clear();
    $localStorage.$reset();
    $scope.isFormValid = false;
    $scope.Login = true;

    $scope.imgLoader_Save = false;
    $scope.eyeslashicon = true;
    $scope.eyeicon = false;
    $scope.inputType = "password";


    $scope.$watch('userLogin.$valid', function (newValue) {
        $scope.isFormValid = newValue;
        //alert(newValue)
    });



    $scope.LoginUserInfo = function () {
        window.location.href = '../Dashboard';
        //if ($scope.isFormValid) {
        //    $scope.imgLoader_Save = true;
        //    $scope.showMsgs = false;

        //    LoginData = {

        //        username: $scope.EmailAddress,
        //        pwd: $scope.Password
        //    };
        //    console.log(LoginData);

            //$http({
            //    method: 'post',
            //    url: '../Admin/Login',
            //    data: LoginData
            //}).then(function (result) {

            //    $scope.imgLoader_Save = false;

            //    if (result.data.Success) {
            //        window.location.href = "../Admin/Dashboard";
            //    }
            //    else if (result.data.ActivationIssue) {
            //        // alert(result.data.ExistingEmail);
            //        $scope.LoginErrorMsg = result.data.ActivationIssue;
            //    }
            //    else if (result.data.Invalid) {
            //        // alert(result.data.ExistingEmail);
            //        $scope.LoginErrorMsg = result.data.Invalid;
            //    }
            //    else if (result.data.pwdissue) {
            //        $scope.imgLoader_Save = false;
            //        alertify.alert('MESSAGE', result.data.pwdissue, function () {
            //            window.location.href = '../Home/ChangePassword';
            //        });
            //    }
            //    else if (result.data.Error === "The underlying provider failed on Open.") {
            //        alertify.alert('MESSAGE', 'DATABASE CONNECTION FAILED');
            //    }
            //    else {
            //        alertify.alert('MESSAGE', result.data.Error);
            //    }

            //});
        //    window.location.href = '../Home/DashBoard';


        //}
        //else {
        //    // alert($scope.isFormValid);

        //    $scope.showMsgs = true;

        //    //alert($scope.showMsgs)
        //}
        //alert('click');
        //$scope.showMsgs = true;
        //$scope.submitted = true;

    };


    $scope.$watch('forgotPwdfrm.$valid', function (newValue) {
        $scope.isFormValid1 = newValue;
        // alert(newValue)
    });

    $scope.getPassword = function (fpwd) {

        if ($scope.isFormValid1) {
            $scope.progressshow = true;
            $scope.showMsgs = false;
            $http.get("../Team/getPassword?email=" + fpwd.Email).then(function (result) {
                $scope.progressshow = false;
                if (result.data === "Success") {

                    alertify.alert('MESSSAGE', 'SENDS ACTUAL PASSWORD TO EMAIL', function () {
                        window.location.href = "../Team/Login";
                    });

                }
                else if (result.data === "Unsuccess") {
                    alertify.alert('INVALID EMAIL DETAILS');

                }
            });
        }
        else {
            $scope.showMsgs = true;
        }
    }

    $scope.showPassword = function () {
        $scope.eyeslashicon = false;
        $scope.eyeicon = true;
        $scope.inputType = "text";
    };
    $scope.hidePassword = function () {
        $scope.eyeslashicon = true;
        $scope.eyeicon = false;
        $scope.inputType = "password";
    };

    $scope.RegisterClick = function () {
        window.location.href = "../Home/Registration";
    };

});