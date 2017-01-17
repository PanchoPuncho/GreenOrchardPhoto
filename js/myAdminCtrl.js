app.controller( "myAdminCtrl", ['$scope', '$window', '$timeout', '$http', function ($scope, $window, $timeout, $http) {
    /********** GLOBAL VARIABLES **********/

    $scope.modalShow = "show";
    $scope.modalMessage = null;
    $scope.blur = "-webkit-filter:blur(10px);-moz-filter:blur(10px);-o-filter:blur(10px);-ms-filter:blur(10px);filter:blur(10px);";
    $scope.url = "";

    /********** FUNCTIONS **********/

    /**
     *
     **/
    $scope.login = function ( user, pass ) {
        console.log( "login( " + user + ", " + pass + " )" );

        $scope.url = "/php/adminExists.php?user=" + user + "&pass=" + pass;
        console.log( "GET: " + $scope.url );
        $http.get( $scope.url ).then( function ( response ) {
            if ( response.data.numAdmins === "1" ) {
                $scope.setCookie( "username", user, 1 );
                $scope.resetPage();
            } else {
                $scope.modalMessage = "Invalid credentials! Redirecting...";
                $timeout( function() {
                    $window.location.href = '/index.html';
                }, 3000);
            }
        });
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
    $scope.resetPage = function() {
        $scope.blur = "";
        $scope.disabled = "true";
        $scope.modalShow = "fade";

        $scope.photos = [];
        
        $scope.data = {
            photo   : "",
            cat     : ""
        };

        $scope.site = {
            allActive       : "active",
            weddingActive   : "",
            sceneryActive   : "",
            autoActive      : "",
            graphicActive   : "",
            portfolio : {
                allPhotos   : [],
                photos      : [],
            }
        };

        document.getElementById( "fileToUpload" ).value = "";

        $scope.url = "/php/getPhotos.php";
        console.log( "GET: " + $scope.url );
        $http.get( $scope.url ).then(function (response) {
            $scope.site.portfolio.allPhotos = response.data.photos;
            $scope.site.portfolio.photos = $scope.site.portfolio.allPhotos;
        });
    };

    /**
     *
     **/
    $scope.addPhoto = function ( photo, cat ) {
        console.log( "addPhoto( " + photo + ", " + cat + " )" );
        var uniqueID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
        $scope.url = "/php/addPhoto.php?id=" + uniqueID + "&photo=img/gop/uploads/" + photo + "&cat=" + cat;
        console.log( "POST: " + $scope.url );
        $http.post( $scope.url ).success( function( response, status ) {
            console.log( $scope.url + " result: " + JSON.stringify( response, undefined, 2 ) );
            $scope.resetPage();
        }).error( function( response, status ) {
            window.alert( "Error data: " + JSON.stringify( response, undefined, 2 ) );
            window.alert( "Error status: " + JSON.stringify( status, undefined, 2 ) );
        });
    };

    /**
     *
     **/
    $scope.deletePhoto = function ( id, photo ) {
        console.log( "deletePhoto( " + id + " )" );

        $scope.url = "/php/deletePhotoFromDB.php?id=" + id;
        console.log( "POST: " + $scope.url );
        $http.post( $scope.url ).then(function (response) {
            console.log( $scope.url + " result: " + JSON.stringify( response, undefined, 2 ) );
            
            $scope.url = "/php/deleteImage.php?file=" + photo;
            console.log( "POST: " + $scope.url );
            $http.post( $scope.url ).then(function (response) {
                console.log( $scope.url + " result: " + JSON.stringify( response, undefined, 2 ) );
                $scope.resetPage();
            });
        });
    };

    /**
     *
     **/
    $scope.check = function() {
        var fileButton = document.getElementById("fileToUpload");
        $scope.data.photo = fileButton.value.replace(/^.*[\\\/]/, '');

        if ( $scope.validate( $scope.data.photo ) && $scope.validate( $scope.data.cat ) ) {
            $scope.disabled = false;
        }

        console.log( JSON.stringify( $scope.data, undefined, 2 ));
    };

    /**
     *
     **/
    $scope.validate = function( arg ) {
        if ( arg === null || arg === undefined || arg === "" ) {
            return false;
        } else {
            return true;
        }
    };

    /**
     *
     **/
    $scope.setCookie = function( cname, cvalue, exdays ) {
        console.log( "setCookie( " + cname + ", " + cvalue + ", " + exdays + " )" );

        var d = new Date();
        d.setTime( d.getTime() + (exdays * 24 * 60 * 60 * 1000) );
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };

    /**
     *
     **/
    $scope.getCookie = function( cname ) {
        console.log( "getCookie()" );

        var name = cname + "=";
        var ca = document.cookie.split( ';' );
        for( var i = 0; i < ca.length; i++ ) {
            var c = ca[i];
            while ( c.charAt(0) == ' ' ) {
                c = c.substring(1);
            }
            if ( c.indexOf(name) == 0 ) {
                return c.substring( name.length, c.length );
            }
        }
        return "";
    };

    /**
     *
     **/
    $scope.checkCookie = function() {
        console.log( "checkCookie()" );

        var user = $scope.getCookie( "username" );
        if ( user != "" ) {
            $scope.resetPage();
        } else {
            console.log( "...waiting for login..." );
        }
    };

    /********** DRIVER **********/

    $scope.checkCookie();
}]);
