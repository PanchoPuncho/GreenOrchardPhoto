app.controller( "myAdminCtrl", ['$scope', '$window', '$timeout', '$http', function ($scope, $window, $timeout, $http) {
    /********** GLOBAL VARIABLES **********/

    $scope.admin = false;
    $scope.modalShow = "show";
    $scope.modalMessage = null;
    $scope.adminUser = "Admin";
    $scope.blur = "-webkit-filter:blur(10px);-moz-filter:blur(10px);-o-filter:blur(10px);-ms-filter:blur(10px);filter:blur(10px);";

    $scope.login = function ( user, pass ) {
        console.log( "Checking admin credentials..." );
        $http.get( "/php/adminExists.php?user=" + user + "&pass=" + pass ).then( function ( response ) {
            console.log( "User: " + JSON.stringify( response, undefined, 2 ) );
            if ( response.data.numAdmins === "1" ) {
                console.log( "Logged into super_secret as " + user );
                $scope.blur = "";
                $scope.disabled = "true";

                $scope.data = {
                    id      : "",
                    photo   : "",
                    cat     : ""
                };

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

                        if ( cat === "wedding" ) {
                            $scope.site.weddingActive = "active";
                        } else if ( cat === "scenery" ) {
                            $scope.site.sceneryActive = "active";
                        } else if ( cat === "auto" ) {
                            $scope.site.autoActive = "active";
                        } else if ( cat === "graphic" ) {
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
                    $scope.admin = true;
                    $scope.modalShow = "fade";
                    $scope.adminUser = user;

                    $scope.photos = [];
                    
                    $scope.data.value = {
                        id      : null,
                        name    : null,
                        cat     : null
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

                    $http.get( "/php/getPhotos.php" ).then(function (response) {
                        console.log( "Photos: " + JSON.stringify( response, undefined, 2 ) );
                        $scope.site.portfolio.allPhotos = response.data.photos;
                        $scope.site.portfolio.photos = $scope.site.portfolio.allPhotos;
                    });
                };

                $scope.addPhoto = function () {
                    $scope.calculateNewID();
                    console.log( "addPhoto: " + JSON.stringify( $scope.data, undefined, 2 ) );
                    $http.post( "/php/addPhoto.php?id=" + $scope.data.id + "&photo=" + $scope.data.photo + "&cat=" + $scope.data.cat ).then(function (response) {
                        console.log( "Photos: " + JSON.stringify( response, undefined, 2 ) );
                        $scope.site.portfolio.allPhotos = response.data.photos;
                        $scope.site.portfolio.photos = $scope.site.portfolio.allPhotos;
                    });
                };

                $scope.deletePhoto = function ( id ) {
                    console.log( "deletePhoto( " + id + " )" );
                };

                $scope.check = function() {
                    var fileButton = document.getElementById("fileToUpload");
                    $scope.data.photo = fileButton.value.replace(/^.*[\\\/]/, '');

                    if ( $scope.validate( $scope.data.photo ) && $scope.validate( $scope.data.cat ) ) {
                        $scope.disabled = false;
                    }

                    console.log( JSON.stringify( $scope.data, undefined, 2 ));
                };

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
                $scope.calculateNewID = function () {
                    console.log("Calculating new id...");

                    $scope.data.id = "";

                    if ($scope.site.portfolio.allPhotos.length < 10) {
                        $scope.data.id = '00000' + $scope.site.portfolio.allPhotos.length;
                    } else if ($scope.site.portfolio.allPhotos.length < 100) {
                        $scope.data.id = '0000' + $scope.site.portfolio.allPhotos.length;
                    } else if ($scope.site.portfolio.allPhotos.length < 1000) {
                        $scope.data.id = '000' + $scope.site.portfolio.allPhotos.length;
                    } else if ($scope.site.portfolio.allPhotos.length < 10000) {
                        $scope.data.id = '00' + $scope.site.portfolio.allPhotos.length;
                    } else if ($scope.site.portfolio.allPhotos.length < 100000) {
                        $scope.data.id = '0' + $scope.site.portfolio.allPhotos.length;
                    } else {
                        $scope.data.id = $scope.site.portfolio.allPhotos.length;
                    }
                };


                /********** DRIVER **********/



                $scope.resetPage();
            } else {
                $scope.modalMessage = "Invalid credentials!";
                $timeout( function() {
                    $window.location.href = '/index.html';
                }, 3000);
            }
        });
    };
}]);
