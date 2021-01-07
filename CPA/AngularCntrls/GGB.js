var app = angular.module('GGBApp', ['ngRoute', 'ngStorage', 'ui.bootstrap', 'ngSanitize', 'ui.select']);




app.run(function ($rootScope) {
    $rootScope.leftMenu = '';
});



app.directive("datepicker1", function () {
    //alert('ok');
    return {
        restrict: "A",
        link: function (scope, el, attr) {
            el.datepicker({
                dateFormat: 'dd-mm-yy',
                //minDate: 0
                //maxDate: 0,
                //onSelect: function (date) {
                //    //document.getElementById("MQ_OCCU_END").setAttribute("min", date);
                //}
            });
        }
    };
});
app.directive("datepicker2", function () {
    //alert('ok');
    return {
        restrict: "A",
        link: function (scope, el, attr) {
            el.datepicker({
                dateFormat: 'dd-mm-yy',
                //minDate: 0
                //maxDate: 0
            });
        }
    };
});

app.directive("datepicker3", function () {
    //alert('ok');
    return {
        restrict: "A",
        link: function (scope, el, attr) {
            el.datepicker({
                dateFormat: 'dd-mm-yy',

            });
        }
    };
});

app.directive("datepickerDob", function () {
    //alert('ok');
    return {
        restrict: "A",
        link: function (scope, el, attr) {
            el.datepicker({
                dateFormat: 'dd-mm-yy',
                changeMonth: true,
                yearRange: '1700:c',
                changeYear: true,
                minDate: new Date(1700, 10 - 1, 25),
                maxDate: new Date(),
                //onSelect: function (date) {
                //    //document.getElementById("MQ_OCCU_END").setAttribute("min", date);
                //}
            });
        }
    };
});
app.directive("validYear", function () {
    //alert('cpass');
    return {
        require: 'ngModel',
        scope: {
            reference: '=validYear'
        },
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue <= scope.reference;
                ctrl.$setValidity('noMatch', !noMatch);
                return (noMatch) ? noMatch : !noMatch;
            });
            scope.$watch("reference", function (value) {
                ctrl.$setValidity('noMatch', value <= ctrl.$viewValue);
            });
        }
    };
});
app.directive('validNumber', function () {
    return {
        require: '?ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {

            element.on('keydown', function (event) {
                var keyCode = []
                if (attrs.allowNegative == "true") {
                    keyCode = [8, 9, 36, 35, 37, 39, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 109, 110, 173, 190, 189];
                }
                else {
                    keyCode = [8, 9, 36, 35, 37, 39, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 110, 173, 190];
                }


                if (attrs.allowDecimal == "false") {

                    var index = keyCode.indexOf(190);


                    if (index > -1) {
                        keyCode.splice(index, 1);
                    }

                }

                if ($.inArray(event.which, keyCode) == -1) event.preventDefault();
                else {
                    //console.log(2);
                    var oVal = ngModelCtrl.$modelValue || '';
                    if ($.inArray(event.which, [109, 173]) > -1 && oVal.indexOf('-') > -1) event.preventDefault();
                    else if ($.inArray(event.which, [110, 190]) > -1 && oVal.indexOf('.') > -1) event.preventDefault();
                }
            })
                .on('blur', function () {

                    if (element.val() == '' || element.val() == '-') {

                        ngModelCtrl.$setViewValue('');

                    }
                    else if (parseFloat(element.val()) == 0.0) {

                        if (attrs.allowZero && attrs.allowZero == 'true') {

                            if (attrs.decimalUpto) {
                                ngModelCtrl.$setViewValue(parseFloat(0).toFixed(attrs.decimalUpto).toString());
                            }
                            else {
                                ngModelCtrl.$setViewValue('0.00');
                            }
                        }
                        else ngModelCtrl.$setViewValue('');

                    }
                    else if (attrs.allowDecimal == "false") {

                        ngModelCtrl.$setViewValue(element.val());

                    }
                    else if (parseFloat(element.val()) < parseFloat(attrs.minVal) || parseFloat(element.val()) > parseFloat(attrs.maxVal)) {

                        ngModelCtrl.$setViewValue('');

                    }
                    else {
                        if (attrs.decimalUpto) {
                            var fixedValue = parseFloat(element.val()).toFixed(attrs.decimalUpto);
                        }
                        else {
                            var fixedValue = parseFloat(element.val()).toFixed(2);
                        }
                        ngModelCtrl.$setViewValue(fixedValue);
                    }

                    ngModelCtrl.$render();
                    scope.$apply();
                })
                .on('keyup', function () {

                    if (parseFloat(attrs.minVal) < 9 && (parseFloat(element.val()) < parseFloat(attrs.minVal) || parseFloat(element.val()) > parseFloat(attrs.maxVal))) {

                        ngModelCtrl.$setViewValue('');

                    }

                    ngModelCtrl.$render();
                    scope.$apply();
                });

            ngModelCtrl.$parsers.push(function (text) {
                var oVal = ngModelCtrl.$modelValue;
                var nVal = ngModelCtrl.$viewValue;
                //console.log(nVal);
                if (parseFloat(nVal) != nVal) {

                    if (nVal === null || nVal === undefined || nVal == '' || nVal == '-') oVal = nVal;

                    ngModelCtrl.$setViewValue(oVal);
                    ngModelCtrl.$render();
                    return oVal;
                }
                else {
                    var decimalCheck = nVal.split('.');
                    if (!angular.isUndefined(decimalCheck[1])) {
                        if (attrs.decimalUpto)
                            decimalCheck[1] = decimalCheck[1].slice(0, attrs.decimalUpto);
                        else
                            decimalCheck[1] = decimalCheck[1].slice(0, 2);
                        nVal = decimalCheck[0] + '.' + decimalCheck[1];
                    }

                    ngModelCtrl.$setViewValue(nVal);
                    ngModelCtrl.$render();
                    return nVal;
                }
            });

            ngModelCtrl.$formatters.push(function (text) {
                if (text == '0' || text == null && attrs.allowDecimal == "false") return '';
                else if (text == '0' || text == null && attrs.allowDecimal != "false" && attrs.decimalUpto == undefined) return '';
                else if (text == '0' || text == null && attrs.allowDecimal != "false" && attrs.decimalUpto != undefined) return parseFloat(0).toFixed(attrs.decimalUpto);
                else if (attrs.allowDecimal != "false" && attrs.decimalUpto != undefined) return parseFloat(text).toFixed(attrs.decimalUpto);
                else return parseFloat(text).toFixed(2);
            });
        }
    };
});
app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

app.directive('allowDecimalNumbers', function () {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs, ctrl) {
            elm.on('keydown', function (event) {
                var $input = $(this);
                var value = $input.val();
                value = value.replace(/[^0-9\.]/g, '')
                var findsDot = new RegExp(/\./g)
                var containsDot = value.match(findsDot)
                if (containsDot != null && ([46, 110, 190].indexOf(event.which) > -1)) {
                    event.preventDefault();
                    return false;
                }
                $input.val(value);
                if (event.which == 64 || event.which == 16) {
                    // numbers  
                    return false;
                } if ([8, 13, 27, 37, 38, 39, 40, 110].indexOf(event.which) > -1) {
                    // backspace, enter, escape, arrows  
                    return true;
                } else if (event.which >= 48 && event.which <= 57) {
                    // numbers  
                    return true;
                } else if (event.which >= 96 && event.which <= 105) {
                    // numpad number  
                    return true;
                } else if ([46, 110, 190].indexOf(event.which) > -1) {
                    // dot and numpad dot  
                    return true;
                } else {
                    event.preventDefault();
                    return false;
                }
            });
        }
    }
});  
