app.controller("myCtrl", function ($scope, $http) {
    /********** GLOBAL VARIABLES **********/

    /*$scope.data = {
        value: {
            
        },
        options: {
            
        }
    };*/

    $scope.site = {
        allActive : "active",
        weddingActive : "",
        sceneryActive : "",
        autoActive : "",
        graphicActive : "",
        portfolio : {
            allPhotos : [
                { id : "000000", photo : "img/gop/wedding/1.jpg", cat : "wedding" },
                { id : "000001", photo : "img/gop/scenery/1.jpg", cat : "scenery" },
                { id : "000002", photo : "img/gop/automobile/1.jpg", cat : "auto" },
                { id : "000015", photo : "img/gop/graphic/1.jpg", cat : "graphic" },
                { id : "000003", photo : "img/gop/wedding/2.jpg", cat : "wedding" },
                { id : "000004", photo : "img/gop/scenery/2.jpg", cat : "scenery" },
                { id : "000005", photo : "img/gop/automobile/2.jpg", cat : "auto" },
                { id : "000016", photo : "img/gop/graphic/2.jpeg", cat : "graphic" },
                { id : "000006", photo : "img/gop/wedding/3.jpg", cat : "wedding" },
                { id : "000007", photo : "img/gop/scenery/3.jpg", cat : "scenery" },
                { id : "000008", photo : "img/gop/automobile/3.jpg", cat : "auto" },
                { id : "000017", photo : "img/gop/graphic/3.jpg", cat : "graphic" },
                { id : "000009", photo : "img/gop/wedding/4.jpg", cat : "wedding" },
                { id : "000010", photo : "img/gop/scenery/4.jpg", cat : "scenery" },
                { id : "000011", photo : "img/gop/automobile/4.jpg", cat : "auto" },
                { id : "000018", photo : "img/gop/graphic/4.jpg", cat : "graphic" },
                { id : "000012", photo : "img/gop/wedding/5.jpg", cat : "wedding" },
                { id : "000013", photo : "img/gop/automobile/5.jpg", cat : "auto" },
                { id : "000019", photo : "img/gop/graphic/5.jpg", cat : "graphic" },
                { id : "000014", photo : "img/gop/automobile/6.jpg", cat : "auto" },
                { id : "000020", photo : "img/gop/graphic/6.jpg", cat : "graphic" }
            ],
            photos : []
        }
    };
    $scope.site.portfolio.photos = $scope.site.portfolio.allPhotos;

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

    $scope.test = "Hi, Julie";


    /********** DRIVER **********/

});
