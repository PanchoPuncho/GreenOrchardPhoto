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
        portfolio : {
            
        },
        form : {
            photoshoot : {
                subtitle    : "",
                event       : "",
                hours       : "",
                numPhotos   : "",
                price       : 0.00
            },
            wedding : {
                subtitle    : "",
                numHours    : "4",
                numShooters : "1",
                numHard     : "0",
                numSoft     : "0",
                numLarge    : "0",
                numSmall    : "0",
                engSess     : "no",
                matSess     : "no",
                price       : 0.00
            }
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
    $scope.loadPackage = function( package ) {
        if ( package === "singles" ) {
            $scope.site.form.photoshoot.subtitle    = "- Singles Package! Save 5%";
            $scope.site.form.photoshoot.event       = "single";
            $scope.site.form.photoshoot.hours       = "1";
            $scope.site.form.photoshoot.numPhotos   = "25";
            $scope.updatePhotoshootPrice();
        } else if ( package === "couples" ) {
            $scope.site.form.photoshoot.subtitle    = "- Couples Package! Save 8%";
            $scope.site.form.photoshoot.event       = "couple";
            $scope.site.form.photoshoot.hours       = "1";
            $scope.site.form.photoshoot.numPhotos   = "30";
            $scope.updatePhotoshootPrice();
        } else if ( package === "family" ) {
            $scope.site.form.photoshoot.subtitle    = "- Family Package! Save 9%";
            $scope.site.form.photoshoot.event       = "group";
            $scope.site.form.photoshoot.hours       = "1";
            $scope.site.form.photoshoot.numPhotos   = "35";
            $scope.updatePhotoshootPrice();
        } else if ( package === "bronze" ) {
            $scope.site.form.wedding.subtitle    = "- Bronze Package! Save 15%";
            $scope.site.form.wedding.numHours    = "6";
            $scope.site.form.wedding.numShooters = "1";
            $scope.site.form.wedding.numHard     = "0";
            $scope.site.form.wedding.numSoft     = "0";
            $scope.site.form.wedding.numLarge    = "0";
            $scope.site.form.wedding.numSmall    = "0";
            $scope.site.form.wedding.engSess     = "yes";
            $scope.site.form.wedding.matSess     = "no";
            $scope.updateWeddingPrice();
        } else if ( package === "silver" ) {
            $scope.site.form.wedding.subtitle    = "- Silver Package! Save 11%";
            $scope.site.form.wedding.numHours    = "8";
            $scope.site.form.wedding.numShooters = "2";
            $scope.site.form.wedding.numHard     = "1";
            $scope.site.form.wedding.numSoft     = "0";
            $scope.site.form.wedding.numLarge    = "0";
            $scope.site.form.wedding.numSmall    = "1";
            $scope.site.form.wedding.engSess     = "yes";
            $scope.site.form.wedding.matSess     = "no";
            $scope.updateWeddingPrice();
        } else if ( package === "gold" ) {
            $scope.site.form.wedding.subtitle    = "- Gold Package! Save 10%";
            $scope.site.form.wedding.numHours    = "10";
            $scope.site.form.wedding.numShooters = "2";
            $scope.site.form.wedding.numHard     = "1";
            $scope.site.form.wedding.numSoft     = "2";
            $scope.site.form.wedding.numLarge    = "1";
            $scope.site.form.wedding.numSmall    = "3";
            $scope.site.form.wedding.engSess     = "yes";
            $scope.site.form.wedding.matSess     = "yes";
            $scope.updateWeddingPrice();
        } else {
            window.alert( "ERROR: loadPackage() failed! Contact the developer." );
        }
    };

    /********** WEDDING **********/

    /**
     *
     **/
    $scope.bronze = function() {
        if ( $scope.site.form.wedding.numHours === "6" && $scope.site.form.wedding.numShooters === "1" && $scope.site.form.wedding.numHard === "0" && $scope.site.form.wedding.numSoft === "0" && $scope.site.form.wedding.numLarge === "0" && $scope.site.form.wedding.numSmall === "0" && $scope.site.form.wedding.engSess === "yes" && $scope.site.form.wedding.matSess === "no" ) {
            $scope.site.form.wedding.subtitle = "- Bronze Package! Save 15%";
            return true;
        } else {
            return false;
        }
    };

    /**
     *
     **/
    $scope.silver = function() {
        if ( $scope.site.form.wedding.numHours === "8" && $scope.site.form.wedding.numShooters === "2" && $scope.site.form.wedding.numHard === "1" && $scope.site.form.wedding.numSoft === "0" && $scope.site.form.wedding.numLarge === "0" && $scope.site.form.wedding.numSmall === "1" && $scope.site.form.wedding.engSess === "yes" && $scope.site.form.wedding.matSess === "no" ) {
            $scope.site.form.wedding.subtitle = "- Silver Package! Save 11%";
            return true;
        } else {
            return false;
        }
    };

    /**
     *
     **/
    $scope.gold = function() {
        if ( $scope.site.form.wedding.numHours === "10" && $scope.site.form.wedding.numShooters === "2" && $scope.site.form.wedding.numHard === "1" && $scope.site.form.wedding.numSoft === "2" && $scope.site.form.wedding.numLarge === "1" && $scope.site.form.wedding.numSmall === "3" && $scope.site.form.wedding.engSess === "yes" && $scope.site.form.wedding.matSess === "yes" ) {
            $scope.site.form.wedding.subtitle = "- Gold Package! Save 10%";
            return true;
        } else {
            return false;
        }
    };

    /**
     *
     **/
    $scope.updateWeddingPrice = function() {
        console.log( "updateWeddingPrice()" );

        if ( $scope.bronze() ) {
            $scope.site.form.wedding.price = 1000;
        } else if ( $scope.silver() ) {
            $scope.site.form.wedding.price = 1800;
        } else if ( $scope.gold() ) {
            $scope.site.form.wedding.price = 2500;
        } else {
            $scope.site.form.wedding.subtitle = "";
            var eng = $scope.calcEngagementPrice();
            var mat = $scope.calcMaternityPrice();
            var hours = $scope.calcWeddingHoursPrice();
            var pgs = $scope.calcWeddingPhotographerPrice();
            var hard = $scope.site.form.wedding.numHard;
            var soft = $scope.site.form.wedding.numSoft;
            var large = $scope.site.form.wedding.numLarge;
            var small = $scope.site.form.wedding.numSmall;
            $scope.site.form.wedding.price = ( hours + pgs + eng + mat + (parseInt(hard) * 210) + (parseInt(soft) * 80) + (parseInt(large) * 60) + (parseInt(small) * 35) );
        }
    };

    $scope.calcEngagementPrice = function() {
        console.log( "calcEngagementPrice( " + $scope.site.form.wedding.engSess + " )" );

        switch ( $scope.site.form.wedding.engSess ) {
            case "no":
                return 0;
            case "yes":
                return 175;
            default:
                window.alert( "ERROR: calcEngagementPrice() failed! Contact the developer." );
        }
    };

    $scope.calcMaternityPrice = function() {
        console.log( "calcMaternityPrice( " + $scope.site.form.wedding.matSess + " )" );

        switch ( $scope.site.form.wedding.matSess ) {
            case "no":
                return 0;
            case "yes":
                return 175;
            default:
                window.alert( "ERROR: calcMaternityPrice() failed! Contact the developer." );
        }
    };

    $scope.calcWeddingHoursPrice = function() {
        console.log( "calcWeddingHoursPrice( " + $scope.site.form.wedding.numHours + " )" );

        switch ( $scope.site.form.wedding.numHours ) {
            case "4":
                return 400;
            case "5":
                return 500;
            case "6":
                return 600;
            case "7":
                return 750;
            case "8":
                return 900;
            case "9":
                return 1050;
            case "10":
                return 1200;
            case "11":
                return 1350;
            case "12":
                return 1500;
            case "13":
                return 1650;
            case "14":
                return 1800;
            default:
                window.alert( "ERROR: calcWeddingHoursPrice() failed! Contact the developer."  );
        }
    };

    $scope.calcWeddingPhotographerPrice = function() {
        console.log( "calcWeddingPhotographerPrice( " + $scope.site.form.wedding.numShooters + " )" );

        switch ( $scope.site.form.wedding.numShooters ) {
            case "1":
                return 400;
            case "2":
                return 700;
            default:
                window.alert( "ERROR: calcWeddingPhotographerPrice() failed! Contact the developer." );
        }
    };

    /********** PHOTOSHOOT **********/

    /**
     *
     **/
    $scope.singles = function() {
        if ( $scope.site.form.photoshoot.event === "single" && $scope.site.form.photoshoot.hours === "1" && $scope.site.form.photoshoot.numPhotos === "25" ) {
            $scope.site.form.photoshoot.subtitle = "- Singles Package! Save 5%";
            return true;
        } else {
            return false;
        }
    };

    /**
     *
     **/
    $scope.couples = function() {
        if ( $scope.site.form.photoshoot.event === "couple" && $scope.site.form.photoshoot.hours === "1" && $scope.site.form.photoshoot.numPhotos === "30" ) {
            $scope.site.form.photoshoot.subtitle = "- Couples Package! Save 8%";
            return true;
        } else {
            return false;
        }
    };

    /**
     *
     **/
    $scope.family = function() {
        if ( $scope.site.form.photoshoot.event === "group" && $scope.site.form.photoshoot.hours === "1" && $scope.site.form.photoshoot.numPhotos === "35" ) {
            $scope.site.form.photoshoot.subtitle = "- Family Package! Save 9%";
            return true;
        } else {
            return false;
        }
    };

    /**
     *
     **/
    $scope.updatePhotoshootPrice = function() {
        console.log( "updatePhotoshootPrice()" );

        if ( $scope.singles() ) {
            $scope.site.form.photoshoot.price = 125;
        } else if ( $scope.couples() ) {
            $scope.site.form.photoshoot.price = 175;
        } else if ( $scope.family() ) {
            $scope.site.form.photoshoot.price = 250;
        } else {
            $scope.site.form.photoshoot.subtitle = "";
            var event = $scope.calcPhotoshootEventPrice();
            var hours = $scope.calcPhotoshootHoursPrice();
            if ( $scope.site.form.photoshoot.event === "special" || $scope.site.form.photoshoot.event === "npo" ) {
                $scope.site.form.photoshoot.price = ( event + hours );
            } else {
                var photos = $scope.calcPhotoshootPhotosPrice();
                $scope.site.form.photoshoot.price = ( event + hours + photos );
            }
        }
    };

    $scope.calcPhotoshootEventPrice = function() {
        console.log( "calcPhotoshootEventPrice( " + $scope.site.form.photoshoot.event + " )" );

        switch ( $scope.site.form.photoshoot.event ) {
            case "single":
                return 75;
            case "couple":
                return 130;
            case "group":
                return 210;
            case "head":
                return 30;
            case "auto":
                return 25;
            case "special":
                return 250;
            case "npo":
                return 15;
            default:
                window.alert( "ERROR: calcPhotoshootEventPrice() failed! Contact the developer." );
        }
    };

    $scope.calcPhotoshootHoursPrice = function() {
        console.log( "calcPhotoshootHoursPrice( " + $scope.site.form.photoshoot.hours + " )" );

        switch ( $scope.site.form.photoshoot.hours ) {
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

    $scope.calcPhotoshootPhotosPrice = function() {
        console.log( "calcPhotoshootPhotosPrice( " + $scope.site.form.photoshoot.numPhotos + " )" );

        switch ( $scope.site.form.photoshoot.numPhotos ) {
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
