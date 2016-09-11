/**
 * Created by vikasnaiyar on 11/09/16.
 */

// =============================================================================
myApp.controller('ResultsController', function($scope,  $sce, $localStorage, SharedDataService) {


    $scope.init = function () {
       // $scope.data = SharedDataService
        $scope.data = $localStorage.data


        temp = {}
        temp['blogs'] = [

            {
                imageSrc: 'https://cdn-images-1.medium.com/max/800/1*rsnkdN9SNpMPOJ3bMUu0qA.jpeg',
                url: $localStorage.data['stories'][0].url,
                description:$localStorage.data['stories'][0].title,
                viewsToday: $localStorage.data['stories'][0].viewsToday,
                totalViews: $localStorage.data['stories'][0].totalViews
            }
        ]

        temp['videos'] = [
            {
                url: $sce.trustAsResourceUrl($localStorage.data['videos'][0].url),
                viewsToday: $localStorage.data['videos'][0].viewsToday,
                totalViews: $localStorage.data['videos'][0].totalViews
            }
        ]

        temp['quotes'] = [

            {
                /*content:"In times of stress, the best thing we can do for each other is to listen with our ears and our hearts and to be assured that our questions are just as important as our answers."
                ,
                author: 'Fred "Mister" Rogers',
                viewsToday: 9057,
                totalViews: 70827*/

                content:$localStorage.data['quotes'][0].content,
                viewsToday: $localStorage.data['quotes'][0].viewsToday,
                totalViews: $localStorage.data['quotes'][0].totalViews,
                author: $localStorage.data['quotes'][0].author,

            }

        ]

        $scope.data = temp;


    }


    //alert($scope.data['videos'][0]['url']);
});
