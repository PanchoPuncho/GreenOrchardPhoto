app.controller("myCtrl", ['$scope', '$window', '$http', function ($scope, $window, $http) {
    /********** GLOBAL VARIABLES **********/


    $scope.data = {
        user : {
            id      : "",
            name    : "",
            email   : ""
        },
        options : {
            
        }
    };

    $scope.site = {
        activePhoto     : "",
        allActive       : "active",
        autoActive      : "",
        graphicActive   : "",
        sceneryActive   : "",
        weddingActive   : "",
        portfolio       : {
            
        },
        packageForm     : {
            subtitle    : "",
            numPeople   : "",
            hours       : "",
            numPhotos   : "",
            price       : 0.00
        }
    };

    /**
     *
     **/
    $scope.filterPortfolioPhotos = function( cat ) {
        console.log( "filterPortfolioPhotos( " + cat + " )" );
        $scope.site.allActive = "";
        $scope.site.weddingActive = "";
        $scope.site.sceneryActive = "";
        $scope.site.autoActive = "";
        $scope.site.graphicActive = "";

        if ( cat === "all" ) {
            $scope.site.allActive = "active";
            $scope.site.portfolio.photos = $scope.site.portfolio.allPhotos;
        } else {

            if ( cat === "WEDD" ) {
                $scope.site.weddingActive = "active";
            } else if ( cat === "SCEN" ) {
                $scope.site.sceneryActive = "active";
            } else if ( cat === "AUTO" ) {
                $scope.site.autoActive = "active";
            } else if ( cat === "GRPH" ) {
                $scope.site.graphicActive = "active";
            }
            var newList = [];
            angular.forEach( $scope.site.portfolio.allPhotos, function( x ) {
                if ( x.cat === cat ) {
                    newList.push( x );
                }
            });
            $scope.site.portfolio.photos = newList;
        }
    };

    /**
     *
     **/
    $scope.updatePhoto = function( photo ) {
        $scope.site.activePhoto = photo;
    };

    /**
     *
     **/
    $scope.singles = function() {
        if ( $scope.site.packageForm.numPeople === "1" && $scope.site.packageForm.hours === "1" && $scope.site.packageForm.numPhotos === "25" ) {
            $scope.site.packageForm.subtitle = "- Singles Package! Save 5%";
            return true;
        } else {
            return false;
        }
    };

    /**
     *
     **/
    $scope.couples = function() {
        if ( $scope.site.packageForm.numPeople === "2" && $scope.site.packageForm.hours === "1" && $scope.site.packageForm.numPhotos === "30" ) {
            $scope.site.packageForm.subtitle = "- Couples Package! Save 8%";
            return true;
        } else {
            return false;
        }
    };

    /**
     *
     **/
    $scope.family = function() {
        if ( $scope.site.packageForm.numPeople === "3" && $scope.site.packageForm.hours === "1" && $scope.site.packageForm.numPhotos === "35" ) {
            $scope.site.packageForm.subtitle = "- Family Package! Save 9%";
            return true;
        } else {
            return false;
        }
    };

    /**
     *
     **/
    $scope.loadPackage = function( package ) {
        if ( package === "singles" ) {
            $scope.site.packageForm.subtitle = "- Singles Package! Save 5%";
            $scope.site.packageForm.numPeople = "1";
            $scope.site.packageForm.hours = "1";
            $scope.site.packageForm.numPhotos = "25";
            $scope.site.packageForm.price = "125";
        } else if ( package === "couples" ) {
            $scope.site.packageForm.subtitle = "- Couples Package! Save 5%";
            $scope.site.packageForm.numPeople = "2";
            $scope.site.packageForm.hours = "1";
            $scope.site.packageForm.numPhotos = "30";
            $scope.site.packageForm.price = "175";
        } else if ( package === "family" ) {
            $scope.site.packageForm.subtitle = "- Family Package! Save 5%";
            $scope.site.packageForm.numPeople = "3";
            $scope.site.packageForm.hours = "1";
            $scope.site.packageForm.numPhotos = "35";
            $scope.site.packageForm.price = "250";
        } else {
            window.alert( "Error: Contact Developer" );
        }
    };

    /**
     *
     **/
    $scope.updatePrice = function() {
        console.log( "updatePrice()" );

        if ( $scope.singles() ) {
            $scope.site.packageForm.price = 125;
        } else if ( $scope.couples() ) {
            $scope.site.packageForm.price = 175;
        } else if ( $scope.family() ) {
            $scope.site.packageForm.price = 250;
        } else {
            $scope.site.packageForm.subtitle = "";
            var people = $scope.calcPeoplePrice();
            var hours = $scope.calcHoursPrice();
            var photos = $scope.calcPhotosPrice();
            $scope.site.packageForm.price = ( people + hours + photos );
        }
    };

    $scope.calcPeoplePrice = function() {
        console.log( "calcPeoplePrice( " + $scope.site.packageForm.numPeople + " )" );

        switch ( $scope.site.packageForm.numPeople ) {
            case "1":
                return 75;
            case "2":
                return 130;
            default:
                return 200;
        }
    };

    $scope.calcHoursPrice = function() {
        console.log( "calcHoursPrice( " + $scope.site.packageForm.hours + " )" );

        switch ( $scope.site.packageForm.hours ) {
            case "0.5":
                return 25;
            case "1":
                return 50;
            case "1.5":
                return 75;
            case "2":
                return 110;
            case "2.5":
                return 155;
            default:
                return 200;
        }
    };

    $scope.calcPhotosPrice = function() {
        console.log( "calcPhotosPrice( " + $scope.site.packageForm.numPhotos + " )" );

        switch ( $scope.site.packageForm.numPhotos ) {
            case "15":
                return 0;
            case "20":
                return 5;
            case "25":
                return 7;
            case "30":
                return 10;
            case "35":
                return 15;
            case "40":
                return 20;
            case "45":
                return 25;
            case "50":
                return 30;
            case "55":
                return 35;
            case "60":
                return 40;
            case "65":
                return 45;
            case "70":
                return 50;
            case "75":
                return 55;
            case "80":
                return 60;
            case "85":
                return 65;
            case "90":
                return 70;
            case "95":
                return 75;
            default:
                return 80;
        }
    };


    /********** DRIVER **********/

    $scope.url = "/php/getPhotos.php";
    console.log( "GET: " + $scope.url );
    $http.get( $scope.url ).then(function (response) {
        $scope.site.portfolio.allPhotos = response.data.photos;
        $scope.site.portfolio.photos = $scope.site.portfolio.allPhotos;
    });
}]);
