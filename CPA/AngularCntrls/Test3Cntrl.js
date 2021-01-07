app.controller('Test3Cntrl', function ($scope, $filter, $http, $localStorage) {


    $scope.addIconCollapse = function () {
        $(".collapse").on('show.bs.collapse', function () {
            $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
        }).on('hide.bs.collapse', function () {
            $(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
        });
    };

    $scope.activaTab = function (tab) {
        $('.nav-tabs a[href="#' + tab + '"]').tab('show');
        $(window).scrollTop(0);
    };
    // First Next
    $scope.TabNext = function (val1, val2) {

        switch (val1) {

            case 'AplicantDetails':
                $scope.activaTab(val2);
                break;

            case 'SpouseDetails':
                $scope.activaTab(val2);
                break;
            case 'Arrests':
                $scope.activaTab(val2);
                break;
            case 'CivilLawsuits':
                $scope.activaTab(val2);
                break;

            case 'Residences':
                $scope.activaTab(val2);
                break;
            case 'EmploymentHistory':
                $scope.activaTab(val2);
                break;
            case 'Abnormalities':
                $scope.activaTab(val2);
                break;

        }

    };
    $scope.TabPrevious = function (val) {
        $scope.activaTab(val);
    };

    $scope.ModelData = {};
    $scope.sameAsAboveAddess = function (SameAsAboveAddess) {

        if (SameAsAboveAddess === "Yes") {

            $scope.ModelData.BusinessAddress1 = $scope.ModelData.Address1;
            $scope.ModelData.BusinessAddress2 = $scope.ModelData.Address2;
            $scope.ModelData.BusinessCity = $scope.ModelData.City;
            $scope.ModelData.BusinessPostalCode = $scope.ModelData.PostalCode;
            $scope.ModelData.BusinessProvince = $scope.ModelData.Province;
            $scope.ModelData.BusinessCountry = $scope.ModelData.Country;

        }
        else {

            $scope.ModelData.BusinessAddress1 = "";
            $scope.ModelData.BusinessAddress2 = "";
            $scope.ModelData.BusinessCity = "";
            $scope.ModelData.BusinessPostalCode = "";
            $scope.ModelData.BusinessProvince = "";
            $scope.ModelData.BusinessCountry = "";

        }
    };

    // Add More Spouse Details to an array
    $scope.SpouseModel = {};
    $scope.SpouseDetailsArray = [];
    $scope.AddMoreSpouseDetails = function (SpouseModel) {

        var Address = "";
        if (SpouseModel.SpouseAddress1) {
            Address = Address + SpouseModel.SpouseAddress1;
        }
        if (SpouseModel.SpouseAddress2) {
            Address = Address + ', ' + SpouseModel.SpouseAddress2;
        }
        if (SpouseModel.SpouseCity) {
            Address = Address + ', ' + SpouseModel.SpouseCity;
        }
        if (SpouseModel.SpousePostalCode) {
            Address = Address + ', ' + SpouseModel.SpousePostalCode;
        }
        if (SpouseModel.SpouseProvince) {
            Address = Address + ', ' + SpouseModel.SpouseProvince;
        }
        if (SpouseModel.SpouseCountry) {
            Address = Address + ', ' + SpouseModel.SpouseCountry;
        }

        $scope.SpouseDetailsArray.push({
            SpouseMarriageDate: SpouseModel.SpouseMarriageDate,
            SpouseMarriageCity: SpouseModel.SpouseMarriageCity,
            SpouseFullname: SpouseModel.SpouseFullname,
            SpouseMaidenName: SpouseModel.SpouseMaidenName,
            SpouseDob: SpouseModel.SpouseDob,
            SpouseBirthPlace: SpouseModel.SpouseBirthPlace,
            SpouseOccupation: SpouseModel.SpouseOccupation,
            EmployerName: SpouseModel.EmployerName,
            SpouseAddress: Address
        });
        $("#modalSpouse").modal('hide');
        delete $scope.SpouseModel;
    };

    // Remove Spouse Details from an array
    $scope.DeleteSpouse = function (index) {

        $scope.SpouseDetailsArray.splice(index, 1);
    };

    // Add More Children Details to an array
    $scope.ChildrenDetailsArray = [];
    $scope.ChildrenModel = {};
    $scope.AddMoreChildrenDetails = function (ChildrenModel) {


        $scope.ChildrenDetailsArray.push({
            ChildrenFullName: ChildrenModel.ChildrenFullName,
            ChildrenRelationship: ChildrenModel.ChildrenRelationship,
            ChildrenDob: ChildrenModel.ChildrenDob,
            ChildrenOccupation: ChildrenModel.ChildrenOccupation
        });

        delete $scope.ChildrenModel;
    };

    // Remove Children Details from an array
    $scope.DeleteChildren = function (index) {

        $scope.ChildrenDetailsArray.splice(index, 1);
    };


    // Add More Passport Details to an array
    $scope.PassportDetailsArray = [];
    $scope.PassportModelData = {};
    $scope.AddMorePassportDetails = function (passportModel) {


        $scope.PassportDetailsArray.push({
            PassportNumber: passportModel.PassportNumber,
            PassportCountry: passportModel.PassportCountry,
            PassportIssuePlace: passportModel.PassportIssuePlace,
            PassportIssueDate: passportModel.PassportIssueDate,
            PassportDateExpiry: passportModel.PassportDateExpiry
        });

        delete $scope.PassportModelData;
    };

    // Remove Passport Details from an array
    $scope.DeletePassport = function (index) {

        $scope.PassportDetailsArray.splice(index, 1);
    };



    // Add More Passport Details to an array
    $scope.ArrestsDetailsArray = [];
    $scope.ArrestsModelData = {};
    $scope.AddMoreArrestsDetails = function (arrestsModel) {


        $scope.ArrestsDetailsArray.push({
            NatureOffence: arrestsModel.NatureOffence,
            ArrestsState: arrestsModel.ArrestsState,
            ArrestsCountry: arrestsModel.ArrestsCountry,
            City_Town: arrestsModel.City_Town,
            DateOffence: arrestsModel.DateOffence,
            ResultCourtCase: arrestsModel.ResultCourtCase
        });
        $("#modalVerified").modal('hide');
        delete $scope.ArrestsModelData;
    };

    // Remove Passport Details from an array
    $scope.DeleteArrests = function (index) {

        $scope.ArrestsDetailsArray.splice(index, 1);
    };


    // Radio button function for  Convicted Offence
    $scope.RadioBtnconvictedoffence = function (rVal) {
        //alert(rVal)
    }


    // Add More spouse family convicted offence Details to an array
    $scope.Spouse_FamilyConvictedOffenceDetailsArray = [];
    $scope.SpouseFamilyModelData = {};
    $scope.AddMorespouse_family_convicted_offenceDetails = function (spouseFamilyModelData) {


        $scope.Spouse_FamilyConvictedOffenceDetailsArray.push({
            Name: spouseFamilyModelData.Name,
            Relationship: spouseFamilyModelData.Relationship,
            Charge: spouseFamilyModelData.Charge,
            City_Town: spouseFamilyModelData.City_Town,
            State: spouseFamilyModelData.State,
            Country: spouseFamilyModelData.Country,
            DateOffence: spouseFamilyModelData.DateOffence,
            ResultCourtCase: spouseFamilyModelData.ResultCourtCase
        });

        delete $scope.SpouseFamilyModelData;
    };

    // Remove Passport Details from an array
    $scope.DeleteSpouse_FamilyConvictedOffence = function (index) {

        $scope.Spouse_FamilyConvictedOffenceDetailsArray.splice(index, 1);
    };

    // Add More  Residences Details  to an array
    $scope.ResidencesDetailsArray = [];
    $scope.ResidencesModelData = {};
    $scope.AddMoreResidencesDetails = function (residencesModelData) {


        $scope.ResidencesDetailsArray.push({
            ResidencesFromDate: residencesModelData.ResidencesFromDate,
            ResidencesToDate: residencesModelData.ResidencesToDate,
            ResidencesStreet: residencesModelData.ResidencesStreet,
            ResidencesStreetNumber: residencesModelData.ResidencesStreetNumber,
            ResidencesSuburb: residencesModelData.ResidencesSuburb,
            ResidencesCity_Town: residencesModelData.ResidencesCity_Town,
            ResidencesState: residencesModelData.ResidencesState,
            ResidencesCountry: residencesModelData.ResidencesCountry
        });
        $("#modalFind").modal('hide');
        delete $scope.ResidencesModelData;
    };

    // Remove Passport Details from an array
    $scope.DeleteResidences = function (index) {

        $scope.ResidencesDetailsArray.splice(index, 1);
    };


    // Add More Employment Details to an array
    $scope.EmploymentModelData = {};
    $scope.EmploymentDetailsArray = [];
    $scope.AddMoreEmploymentDetails = function (EmploymentModelData) {

        var Address = "";
        if (EmploymentModelData.EmploymentAddress1) {
            Address = Address + EmploymentModelData.EmploymentAddress1;
        }
        if (EmploymentModelData.EmploymentAddress2) {
            Address = Address + ', ' + EmploymentModelData.EmploymentAddress2;
        }
        if (EmploymentModelData.EmploymentCity_Town) {
            Address = Address + ', ' + EmploymentModelData.EmploymentCity_Town;
        }
        if (EmploymentModelData.EmploymentPostalCode) {
            Address = Address + ', ' + EmploymentModelData.EmploymentPostalCode;
        }
        if (EmploymentModelData.EmploymentState) {
            Address = Address + ', ' + EmploymentModelData.EmploymentState;
        }
        if (EmploymentModelData.EmploymentCountry) {
            Address = Address + ', ' + EmploymentModelData.EmploymentCountry;
        }

        $scope.EmploymentDetailsArray.push({
            EmploymentFromDate: EmploymentModelData.EmploymentFromDate,
            EmploymentToDate: EmploymentModelData.EmploymentToDate,
            Name: EmploymentModelData.Name,
            EmploymentPostalAddress: Address,
            EmploymentReasonLeaving: EmploymentModelData.EmploymentReasonLeaving,
            EmploymentJobTitle: EmploymentModelData.EmploymentJobTitle,
            EmploymentDescriptionDuties: EmploymentModelData.EmploymentDescriptionDuties,
            EmploymentContactPerson: EmploymentModelData.EmploymentContactPerson
        });
        $("#modalEmployement").modal('hide');
        delete $scope.EmploymentModelData;
    };

    // Remove Employment Details from an array
    $scope.DeleteEmployment = function (index) {

        $scope.EmploymentDetailsArray.splice(index, 1);
    };

    // Add More Employment Dismissed Details to an array
    $scope.EmploymentDismissedModelData = {};
    $scope.EmploymentDismissedDetailsArray = [];
    $scope.AddMoreEmploymentDismissedDetails = function (EmploymentDismissedModelData) {

        var Address = "";
        if (EmploymentDismissedModelData.EmploymentDismissedAddress1) {
            Address = Address + EmploymentDismissedModelData.EmploymentDismissedAddress1;
        }
        if (EmploymentDismissedModelData.EmploymentDismissedAddress2) {
            Address = Address + ', ' + EmploymentDismissedModelData.EmploymentDismissedAddress2;
        }
        if (EmploymentDismissedModelData.EmploymentDismissedCity_Town) {
            Address = Address + ', ' + EmploymentDismissedModelData.EmploymentDismissedCity_Town;
        }
        if (EmploymentDismissedModelData.EmploymentDismissedPostalCode) {
            Address = Address + ', ' + EmploymentDismissedModelData.EmploymentDismissedPostalCode;
        }
        if (EmploymentDismissedModelData.EmploymentDismissedState) {
            Address = Address + ', ' + EmploymentDismissedModelData.EmploymentDismissedState;
        }
        if (EmploymentDismissedModelData.EmploymentDismissedCountry) {
            Address = Address + ', ' + EmploymentDismissedModelData.EmploymentDismissedCountry;
        }

        $scope.EmploymentDismissedDetailsArray.push({
            EmploymentDismissedDate: EmploymentDismissedModelData.EmploymentDismissedDate,
            DismissedName: EmploymentDismissedModelData.DismissedName,
            EmploymentDismissedPostalAddress: Address,
            EmploymentDismissedContactPerson: EmploymentDismissedModelData.EmploymentDismissedContactPerson,
            EmploymentDismissedReason: EmploymentDismissedModelData.EmploymentDismissedReason
        });
        $("#modalEmployement1").modal('hide');
        delete $scope.EmploymentDismissedModelData;
    };

    // Remove Spouse Details from an array
    $scope.DeleteEmploymentDismissed = function (index) {

        $scope.EmploymentDismissedDetailsArray.splice(index, 1);
    };


    // Add More Personal Details to an array
    $scope.PersonalModelData = {};
    $scope.PersonalDetailsArray = [];
    $scope.AddMorePersonalDetails = function (PersonalModelData) {

        var Address = "";
        if (PersonalModelData.PersonalAddress1) {
            Address = Address + PersonalModelData.PersonalAddress1;
        }
        if (PersonalModelData.PersonalAddress2) {
            Address = Address + ', ' + PersonalModelData.PersonalAddress2;
        }
        if (PersonalModelData.PersonalCity_Town) {
            Address = Address + ', ' + PersonalModelData.PersonalCity_Town;
        }
        if (PersonalModelData.PersonalPostalCode) {
            Address = Address + ', ' + PersonalModelData.PersonalPostalCode;
        }
        if (PersonalModelData.PersonalState) {
            Address = Address + ', ' + PersonalModelData.PersonalState;
        }
        if (PersonalModelData.PersonalCountry) {
            Address = Address + ', ' + PersonalModelData.PersonalCountry;
        }

        $scope.PersonalDetailsArray.push({
            PersonalSurname: PersonalModelData.PersonalSurname,
            PersonalFirstName: PersonalModelData.PersonalFirstName,
            PersonalPostalAddress: Address,
            PersonalOccupation: PersonalModelData.PersonalOccupation,
            PersonalTelephone: PersonalModelData.PersonalTelephone,
            PersonalYearsknown: PersonalModelData.PersonalYearsknown
        });

        delete $scope.PersonalModelData;
    };

    // Remove Spouse Details from an array
    $scope.DeletePersonal = function (index) {

        $scope.PersonalDetailsArray.splice(index, 1);
    };

    // Add More Professional Details to an array
    $scope.ProfessionalModelData = {};
    $scope.ProfessionalDetailsArray = [];
    $scope.AddMoreProfessionalDetails = function (ProfessionalModelData) {

        $scope.ProfessionalDetailsArray.push({
            ProfessionalBody: ProfessionalModelData.ProfessionalBody,
            ProfessionalPeriodFrom: ProfessionalModelData.ProfessionalPeriodFrom,
            ProfessionalPeriodTo: ProfessionalModelData.ProfessionalPeriodTo
        });

        delete $scope.ProfessionalModelData;
    };

    // Remove Spouse Details from an array
    $scope.DeleteProfessional = function (index) {

        $scope.ProfessionalDetailsArray.splice(index, 1);
    };

    // Add More Credit Details to an array
    $scope.CreditModelData = {};
    $scope.CreditDetailsArray = [];
    $scope.AddMoreCreditDetails = function (CreditModelData) {

        $scope.CreditDetailsArray.push({
            CreditCreditor: CreditModelData.CreditCreditor,
            CreditAmountOwingR: CreditModelData.CreditAmountOwingR,
            CreditAmountDefaultR: CreditModelData.CreditAmountDefaultR,
            CreditDaysOverDue: CreditModelData.CreditDaysOverDue
        });

        delete $scope.CreditModelData;
    };

    // Remove Spouse Details from an array
    $scope.DeleteCredit = function (index) {

        $scope.CreditDetailsArray.splice(index, 1);
    };


    // File Upload Functionality
    $scope.totalFilesStored = [];
    var totalFiles = [];


    //Save Tab6
    $scope.Is_Save_Documents = true;
    $scope.Is_Delete_Documents = "No Id";


    $scope.ViewDocument = function (filename) {
        var href = "../Attachments/Documents/" + filename;
        window.open(href);
    }


        /*!
    * Imageuploadify - jQuery plugin
    * Allow to change input file to a box allowing drag'n drop and preview images before
    * updloading them.
    */
        // Semi-colon to protect against concatened scripts, etc...
        // Ensure that $ is referencing to jQuery.
        // window and document to slightly quicken the process.
        // To be sure that undefined is truly undefined (For ES3)
        ; (function ($, window, document, undefined) {

            // Prevent issues about browser opening file by dropping it.
            window.addEventListener("dragover", function (e) {
                e = e || event;
                e.preventDefault();
            }, false);
            window.addEventListener("drop", function (e) {
                e = e || event;
                e.preventDefault();
            }, false);

            const compareMimeType = (mimeTypes, fileType, formatFile) => {

                // If accept is defined as *.
                if (mimeTypes.length < 2 && mimeTypes[0] === "*") {
                    return true;
                }

                // Checking all types written in accept.
                for (let index = 1; index < mimeTypes.length; index += 3) {

                    // image/*, audio/*, video/*
                    if (mimeTypes[index + 1] === "*" &&
                        fileType.search(new RegExp(mimeTypes[index])) != -1) {
                        return true;
                    }
                    // application/vnd.ms-excel, application/vnd.ms-powerpoint
                    else if (mimeTypes[index + 1] && mimeTypes[index + 1] != "*" &&
                        fileType.search(new RegExp("\\*" + mimeTypes[index + 1] + "\\*")) != -1) {
                        return true;
                    }
                    // application/pdf, image/jpg
                    else if (mimeTypes[index + 1] && mimeTypes[index + 1] != "*" &&
                        fileType.search(new RegExp(mimeTypes[index + 1])) != -1) {
                        return true;
                    }
                    // .jpg, .pdf .png
                    else if (mimeTypes[index + 1] === "" &&
                        (fileType.search(new RegExp(mimeTypes[index])) != -1 || formatFile.search(new RegExp(mimeTypes[index])) != -1)) {
                        return true;
                    }
                }
                return false;
            }

            // Define the plugin imageuploadify.
            $.fn.imageuploadify = function (opts) {

                // Override default option with user's if exist.
                const settings = $.extend({}, $.fn.imageuploadify.defaults, opts);

                // Initialize every element.
                this.each(function () {

                    // Save the current element to self to avoid conflict.
                    const self = this;

                    // Apply on input file having "multiple" attribute only.
                    if (!$(self).attr("multiple")) {
                        return;
                    }
                    // Save accept files
                    let accept = $(self).attr("accept") ? $(self).attr("accept").replace(/\s/g, "").split(",") : null;
                    let result = [];

                    // Loop the array of accept files to split all part of mimetype or format.
                    accept.forEach((item) => {
                        let regexp;
                        // Select the regexp according to the result (mimetype or format)
                        if (item.search(/\//) != -1) {
                            regexp = new RegExp("([A-Za-z-.]*)\/([A-Za-z-*.]*)", "g");
                        }
                        else {
                            regexp = new RegExp("\.([A-Za-z-]*)()", "g");
                        }
                        // Exec the regexp and then
                        const r = regexp.exec(item);
                        result = result.concat(r);
                    });

                    // Array containing all files add by dialog box or drag'n drop.
                    totalFiles = [];
                    // Count the number of time a "dragenter" enter the box.
                    let counter = 0;

                    // Define the dragbox layout.
                    let dragbox = $(`
      <div class="imageuploadify well">
        <div class="imageuploadify-overlay">
        <i class="fa fa-picture-o"></i>
        </div>
        <div class="imageuploadify-images-list text-center">
          <i class="fa fa-cloud-upload"></i>
          <span class='imageuploadify-message'>Drag & Drop Your File(s) Here To Upload</span>
          <button type="button" class="btn btn-default">or select file to upload</button>
        </div>
      </div>
      `);

                    // Save all elements of the dragbox.
                    let overlay = dragbox.find(".imageuploadify-overlay");
                    let uploadIcon = dragbox.find(".imageuploadify-overlay i");

                    let imagesList = dragbox.find(".imageuploadify-images-list");
                    let addIcon = dragbox.find(".imageuploadify-images-list i");
                    let addMsg = dragbox.find(".imageuploadify-images-list span");
                    let button = dragbox.find(".imageuploadify-images-list button");


                    /** FUNCTIONS  **/


                    // Function to read and store files.
                    const retrieveFiles = (files) => {
                        for (let index = 0; index < files.length; ++index) {
                            if (!accept || compareMimeType(result, files[index].type, /(?:\.([^.]+))?$/.exec(files[index].name)[1])) {
                                // Unique number to save the image.
                                const id = Math.random().toString(36).substr(2, 9);

                                readingFile(id, files[index]);
                                totalFiles.push({
                                    id: id,
                                    file: files[index]
                                });
                            }
                        }
                        $scope.totalFilesStored = totalFiles;
                        //console.log($scope.totalFilesStored)
                        //$('#Uploadedfiles').prop('files', files)
                    }

                    // Function to read a file.
                    const readingFile = (id, file) => {
                        const fReader = new FileReader();

                        // Compute the number of box that could fit in the dragbox and the
                        // margin according to it.
                        const width = dragbox.width();
                        const boxesNb = Math.floor(width / 100);
                        const marginSize = Math.floor((width - (boxesNb * 100)) / (boxesNb + 1));

                        // Create the preview file container box.
                        let container = $(`<div class='imageuploadify-container'>
          <button type='button' class='btn btn-danger glyphicon glyphicon-remove'></button>
          <div class='imageuploadify-details'>
            <span>${file.name}</span>
            <span>${file.type}</span>
            <span>${file.size}</span>
          </div>
        </div>`);

                        let details = container.find(".imageuploadify-details");
                        let deleteBtn = container.find("button");

                        // Preview file container box CSS
                        container.css("margin-left", marginSize + "px");

                        // Manage display/hidding details about preview files.
                        details.hover(function () {
                            $(this).css("opacity", "1");
                        })
                            .mouseleave(function () {
                                $(this).css("opacity", "0");
                            });

                        // If the given file in the parameter is an image.
                        if (file.type && file.type.search(/image/) != -1) {
                            // Associated function to a ending load
                            fReader.onloadend = function (e) {
                                // Create the image tag for preview.
                                let image = $("<img>");
                                // Paste the image source to display the image preview.
                                image.attr("src", e.target.result);

                                // Append the image to its container and then the container to the
                                // list of files.
                                container.append(image);
                                imagesList.append(container);

                                // Apply left margin to first container of each row and right to last.
                                imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+4)").css("margin-left", marginSize + "px");
                                imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+3)").css("margin-right", marginSize + "px");
                            };

                        }
                        else if (file.type) {
                            // alert(file.type)
                            // Create the generic icon for unknown type file.
                            let type = "<i class='fa fa-file'></i>";

                            // If the file is an audio file, replace the icon by an audio file icon.
                            if (file.type.search(/audio/) != -1) {
                                type = "<i class='fa fa-file-audio-o'></i>";
                            }
                            // If the file is an video file, replace the icon by an video file icon.
                            else if (file.type.search(/video/) != -1) {
                                type = "<i class='fa fa-file-video-o'></i>";
                            }
                            else if (file.type.search(/pdf/) != -1) {

                                type = "../UploadJS/pdf.png";
                            }
                            else if (file.type.search(/sheet/) != -1) {
                                type = "../UploadJS/xl.png";
                            }
                            else if (file.type.search(/docu/) != -1) {
                                type = "../UploadJS/Docx.png";
                            }
                            else if (file.type.search(/text/) != -1) {
                                type = "../UploadJS/txt.jpg";
                            }

                            //else {
                            //    //alert(file.type)
                            //    type = "<i class='glyphicon glyphicon-file'></i>";
                            //}
                            // Associated function to a ending load
                            fReader.onloadend = function (e) {
                                //alert(type)
                                // Create the span tag for the file type.
                                //let span = $(type);

                                //// Span CSS.
                                //    span.css("margin", "0");


                                // Create the image tag for preview.
                                let image = $("<img>");
                                // Paste the image source to display the image preview.
                                image.attr("src", type);

                                // Append the span to its container and then the container to the
                                // list of files.
                                container.append(image);
                                imagesList.append(container);

                                // Apply left margin to first container of each row and right to last.
                                imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+4)").css("margin-left", marginSize + "px");
                                imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+3)").css("margin-right", marginSize + "px");
                            };
                        }

                        // Delete the file from the list.
                        deleteBtn.on("click", function () {
                            $(this.parentElement).remove();
                            for (let index = 0; totalFiles.length > index; ++index) {
                                if (totalFiles[index].id === id) {
                                    totalFiles.splice(index, 1);
                                    break;
                                }
                            }
                        });

                        // Use the FileReader to read the content of a File.
                        fReader.readAsDataURL(file);
                    };

                    const disableMouseEvents = () => {
                        // Display the overlay and change the dragbox border color.
                        overlay.css("display", "flex");
                        dragbox.css("border-color", "#7f1933");

                        // Disable pointer events to avoid miscapture dragexit children's events.
                        button.css("pointer-events", "none");
                        addMsg.css("pointer-events", "none");
                        addIcon.css("pointer-events", "none");
                        imagesList.css("pointer-events", "none");
                    }

                    const enableMouseEvents = () => {
                        // Hide the overlay and put back the dragbox border color.
                        overlay.css("display", "none");
                        dragbox.css("border-color", "rgb(210, 210, 210)");

                        // Enable back pointer events to capture click, hover...
                        button.css("pointer-events", "initial");
                        addMsg.css("pointer-events", "initial");
                        addIcon.css("pointer-events", "initial");
                        imagesList.css("pointer-events", "initial");
                    }

                    /** EVENTS  */


                    // Change the color background of the button according to the mouse.
                    button.mouseenter(function onMouseEnter(event) {
                        button.css("background", "#7f1933").css("color", "white");
                    }).mouseleave(function onMouseLeave() {
                        button.css("background", "white").css("color", "#7f1933");
                    });


                    // When click on the button, simulate click on the original input.
                    button.on("click", function onClick(event) {
                        event.stopPropagation();
                        event.preventDefault();
                        $(self).click();
                    });

                    // Manage events to display an overlay when dragover files.
                    dragbox.on("dragenter", function onDragenter(event) {
                        event.stopPropagation();
                        event.preventDefault();

                        // Increment the counter.
                        counter++;
                        disableMouseEvents();
                    });

                    // Manage events to hide the overlay when dragout files.
                    dragbox.on("dragleave", function onDragLeave(event) {
                        event.stopPropagation();
                        event.preventDefault();

                        // Decrease the counter.
                        counter--;

                        // If the counter is equal to 0 (means that the files are entirely out
                        // of the dragbox).
                        if (counter === 0) {
                            enableMouseEvents();
                        }
                    });

                    // Manage events when dropping files.
                    dragbox.on("drop", function onDrop(event) {
                        //alert()
                        event.stopPropagation();
                        event.preventDefault();

                        enableMouseEvents();
                        // Retrieve the dragged files.
                        const files = event.originalEvent.dataTransfer.files;

                        //console.log(files)
                        // Read all files (to add them to the preview and push them to the files
                        // list to submit).
                        retrieveFiles(files);
                    });

                    // Binding resize event to the window.
                    $(window).bind("resize", function (e) {
                        window.resizeEvt;
                        $(window).resize(function () {
                            // Delete the timeout as long as the window is still resizing.
                            clearTimeout(window.resizeEvt);
                            // Compute and change the margin according to the size of the window after
                            // 0.5 seconds after resizing.
                            window.resizeEvt = setTimeout(function () {
                                // Compute the number of box that could fit in the dragbox and the
                                // margin according to it.
                                const width = dragbox.width();
                                const boxesNb = Math.floor(width / 100);
                                const marginSize = Math.floor((width - (boxesNb * 100)) / (boxesNb + 1));

                                // Reset all margins of containers boxes.
                                let containers = imagesList.find(".imageuploadify-container");
                                for (let index = 0; index < containers.length; ++index) {
                                    $(containers[index]).css("margin-right", "0px");
                                    $(containers[index]).css("margin-left", marginSize + "px");
                                }

                                // Apply left margin to first container of each row and right to last.
                                imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+4)").css("margin-left", marginSize + "px");
                                imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+3)").css("margin-right", marginSize + "px");
                            }, 500);
                        });
                    })

                    // Detect when adding files through the dialog box to preview those files
                    // and add them to the array.
                    $(self).on("change", function onChange() {
                        const files = this.files;
                        retrieveFiles(files);
                    });

                    // When submitting the form.
                    $(self).closest("form").on("submit", function (event) {
                        // Stop the original submit.
                        event.stopPropagation();
                        event.preventDefault(event);
                        // Retrieve all form inputs.
                        const inputs = this.querySelectorAll("input, textarea, select, button");
                        // Create a form.
                        const formData = new FormData();

                        // Add all data to the form (selected options, checked inputs, etc...).
                        for (let index = 0; index < inputs.length; ++index) {
                            if (inputs[index].tagName === "SELECT" && inputs[index].hasAttribute("multiple")) {
                                const options = inputs[index].options;
                                for (let i = 0; options.length > i; ++i) {
                                    if (options[i].selected) {
                                        formData.append(inputs[index].getAttribute("name"), options[i].value);
                                    }
                                }
                            }
                            else if (!inputs[index].getAttribute("type") || ((inputs[index].getAttribute("type").toLowerCase()) !== "checkbox" && (inputs[index].getAttribute("type").toLowerCase()) !== "radio") || inputs[index].checked) {
                                formData.append(inputs[index].name, inputs[index].value);
                            }
                            else if ($(inputs[index]).getAttribute("type") != "file") {
                                formData.append(inputs[index].name, inputs[index].value);
                            }
                        }

                        // Add all files get from the dialog box or drag'n drop,
                        for (var i = 0; i < totalFiles.length; i++) {
                            formData.append(self.name, totalFiles[i].file);
                        }

                        // Create an request and post all data.
                        var xhr = new XMLHttpRequest();

                        // When the request has been successfully submitted, redirect to the
                        // location of the form.
                        xhr.onreadystatechange = function (e) {
                            if (xhr.status == 200 && xhr.readyState === XMLHttpRequest.DONE) {
                                window.location.replace(xhr.responseURL);
                            }
                        }

                        xhr.open("POST", $(this).attr("action"), true);
                        xhr.send(formData);

                        return false;
                    });


                    // Hide the original input.
                    $(self).hide();
                    // Insert the dragbox after the original hidden input.
                    dragbox.insertAfter(this);
                });
                // Return "this" to ensure that chaining methods can be called.
                return this;
            };


            // Default configuraiton of the plugin.
            $.fn.imageuploadify.defaults = {
            };

        }(jQuery, window, document));


    $scope.isIdNumberValid = true;





    $scope.IDNumberChanged = function (idNumber) {
        idNumber = $scope.CreateNewUserData.IDNumber;
        $scope.CreateNewUserData.DateOfBirth = null;
        $scope.CreateNewUserData.Race = null;
        $scope.CreateNewUserData.Gender = null;
        $scope.isIdNumberValid = true;
        console.log(idNumber)
        if (idNumber.length === 13) {

            var dob = '';
            dob = dob.concat('19', idNumber.substring(0, 2), '-', idNumber.substring(2, 4), '-', idNumber.substring(4, 6));

            console.log();

            if ((isNaN(new Date(dob).getTime()))) {
                $scope.isIdNumberValid = false;
            } else if (idNumber.charAt(10) !== '0' && idNumber.charAt(10) !== '1') {
                $scope.isIdNumberValid = false;
            } else {
                $scope.isIdNumberValid = true;
                $scope.CreateNewUserData.DateOfBirth = dob;
                $scope.CreateNewUserData.Race = idNumber.charAt(10) === '0' ? 'SA Citizen' : 'Non SA Citizen';
                $scope.CreateNewUserData.Gender = parseInt(idNumber.charAt(6)) < 5 ? 'Female' : 'Male';
            }

        } else {
            $scope.isIdNumberValid = false;
            $scope.CreateNewUserData.DateOfBirth = null;
            $scope.CreateNewUserData.Race = null;
            $scope.CreateNewUserData.Gender = null;
        }
    }
});