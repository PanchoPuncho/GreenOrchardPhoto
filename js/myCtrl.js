app.controller("myCtrl", ['$scope', '$window', '$http', function ($scope, $window, $http) {
    /********** GLOBAL VARIABLES **********/


    $scope.data = {
        user : {
            id      : "",
            name    : "",
            email   : "",
            picture : ""
        },
        options : {
            
        }
    };

    $scope.site = {
        allActive : "active",
        weddingActive : "",
        sceneryActive : "",
        autoActive : "",
        graphicActive : "",
        portfolio : {
            
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


    /********** DRIVER **********/

    $scope.url = "/php/getPhotos.php";
    console.log( "GET: " + $scope.url );
    $http.get( $scope.url ).then(function (response) {
        console.log( JSON.stringify( response, undefined, 2));
        $scope.site.portfolio.allPhotos = response.data.photos;
        $scope.site.portfolio.photos = $scope.site.portfolio.allPhotos;
    });
}]);
