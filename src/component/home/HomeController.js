/**
 * Created by vikasnaiyar on 10/09/16.
 */

/**
 * Created by vikasnaiyar on 10/09/16.
 */

// our controller for the form
// =============================================================================
myApp.controller('HomeController', function($scope, $http, $sce, $localStorage,fileUpload) {

    $scope.init = function () {

    }

    $scope.init();

    var vm = this;

    vm.step1Data = []

    vm.user = {}
    vm.user.mood = ''
    vm.user.whyOptionSelection = ''
    vm.user.reasonSelection = ''


    vm.fileTypes=["Resume", "Job Description"];

    $scope.selectedFileType = "Resume";

    vm.user.whyOptions = []
    //vm.user.reasonSelections = []

    // selected why
    $scope.selection = [];
    $scope.reasonPersons = []

    // Reason selection
    $scope.reasonSelections = []

    $localStorage.fileType = "Resume"

    vm.successMsg="";
    //Model
    vm.currentStep = 1;
    vm.steps = [
        {
            step: 1,
            name: "Upload Document",
            template: "src/component/home/step1.html"
        },
        {
            step: 2,
            name: "View Tags",
            template: "src/component/home/step2.html"
        },
        {
            step: 3,
            name: "Matching",
            template: "src/component/home/step3.html"
        }
    ];

    vm.user = {};

   // vm.documentTags = {};

    vm.resumeId = "59c1aae677c81a5403399ee1";
    vm.jdId = "59c1a21177c81a5403399ed5";


    //Functions
    vm.gotoStep = function(newStep) {
        if(vm.currentStep == 1) {
            //vm.user.whyOptions = []
            $scope.selection = []

            var link = ""
            if($localStorage.fileType == "Resume") {
                link = 'http://localhost:8080/files/resume/59c1aae677c81a5403399ee1'
            } else {
                link = 'http://localhost:8080/files/jd/59c1a21177c81a5403399ed5'
            }

            $http({
                method: 'GET',
                //url: '/nodes/children/'+vm.user.mood
                url:link
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                var str = JSON.stringify(response.data, undefined, 4);
                vm.documentTags = str;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        } else if (vm.currentStep == 2) {
            // Reason selection
            //$scope.reasonSelections = []
            //$scope.reasonSelections = []
            $scope.reasonPersons = []

            var link = ""
            if($localStorage.fileType == "Resume") {
                vm.selectedFileType = $localStorage.fileType;
             //   link = 'http://localhost:8080/files/resume/59c1aae677c81a5403399ee1'
            } else {
                vm.selectedFileType = $localStorage.fileType;
              //  link = 'http://localhost:8080/files/jd/59c1a21177c81a5403399ed5'
            }

           /* $http({
             method: 'GET',
            // url: '/nodes/children/'+vm.user.whyOptionSelection
                url: link
             }).then(function successCallback(response) {
             // this callback will be called asynchronously
             // when the response is available
                //vm.documentTags = response.data;
                var str = JSON.stringify(response.data, undefined, 4);
                vm.documentTags = str;
             }, function errorCallback(response) {
             // called asynchronously if an error occurs
             // or server returns response with an error status.
             });*/

        }

        vm.currentStep = newStep;
    }

    vm.getStepTemplate = function() {
        for (var i = 0; i < vm.steps.length; i++) {
            if (vm.currentStep == vm.steps[i].step) {
                return vm.steps[i].template;
            }
        }
    }

    $scope.onCategoryChange = function () {
        $localStorage.fileType= $scope.selectedFileType;
    };

    $scope.onSuccess = function(response) {
        // Do something
        console.log ("uploaded successfully");
    };


    vm.uploadFile = function(){

        var link = ""
        if($localStorage.fileType == "Resume") {
            link = 'http://localhost:8080/files/resume/59c1aae677c81a5403399ee1'
        } else {
            link = 'http://localhost:8080/files/jd/59c1a21177c81a5403399ed5'
        }

       $http.get(link)
            .then(function(response) {
                console.log ("uploaded successfully", response);
                vm.documentTags = response.data;
                vm.successMsg="Doc Uploaded successfully";
            });


       /*
        console.log ("uploaded successfully");

        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "http://localhost:8080/files/resume";
        //fileUpload.uploadFileToUrl(file, uploadUrl);

        var fd = new FormData();
        fd.append('file', file);

        $http.post(uploadUrl, fd, {
                headers: {'Content-Type': undefined}
            })
            .success(function () {
                console.log ("uploaded successfully");
            })
            .error(function () {
                console.log ("upload failed");
            });*/

    };





       /* var data = $scope.file;

        var fd = new FormData();
        fd.append('file', data);

        console.log("File data" , file);

        $http.post('http://localhost:8080/files/resume', fd, {
            headers: {'Content-Type': undefined}
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
           // $scope.moods = response.data
            console.log ("uploaded successfully");

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log ("upload failed");

        });*/


       // var fd = {'file': file};



 /*$http.post('http://localhost:8080/files/resume', fd, {
 headers: {'Content-Type': undefined}
 }).success(function(){
                console.log ("uploaded successfully");
            })
            .error(function(){
                console.log ("upload failed");
            });*/


    vm.save = function() {

       // $scope.progress= []
       // SharedDataService = $scope.progress

        if($localStorage.fileType == "Resume") {
            link = 'http://localhost:8080/files/resume/59c1aae677c81a5403399ee1/rank'
        } else {
            link = 'http://localhost:8080/files/jd/59c1a21177c81a5403399ed5/rank'
        }

        $http({
            method: 'GET',
            //url: '/content/' + vm.user.reasonSelection
            url: link
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
           // $scope.moods = response

           // $scope.progress = response.data;
           // $scope.$apply();
            //SharedDataService = response.data;
            $localStorage.data = response.data;
            location.href = '#/results';

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
/*
        SharedDataService['blogs'] = [

            {
                imageSrc: 'https://cdn-images-1.medium.com/max/800/1*rsnkdN9SNpMPOJ3bMUu0qA.jpeg',
                url: 'https://readthink.com/12-mindfulness-hacks-that-will-kill-your-stress-2bcda9376bb6#.ge3hx8ffe',
                description:'12 Mindfulness Hacks That Will Kill Your Stress',
                viewsToday: 7036,
                totalViews: 6145


            },
            {
                imageSrc: 'https://cdn-images-1.medium.com/max/600/1*NQyvR5CxWGxK-spLHHUK9w.jpeg',
                url: 'https://byrslf.co/how-30-days-of-yoga-prevents-depression-inspires-progression-80988068ef94#.93en2r2bp',
                description:'How 30 Days of Yoga Prevents Depression, Inspires Progression',
                viewsToday: 1784,
                totalViews: 8541
            }
        ]

        SharedDataService['videos'] = [
            {
                url: $sce.trustAsResourceUrl('//www.youtube.com/embed/3I7qR4NO8Ag'),
                viewsToday: 417,
                totalViews: 845
            },
            {
                url: $sce.trustAsResourceUrl('//www.youtube.com/embed/kYX87kkyubk'),
                viewsToday: 474,
                totalViews: 5104
            }
         ]

        SharedDataService['quotes'] = [

            {
                content:"In times of stress, the best thing we can do for each other is to listen with our ears and our hearts and to be assured that our questions are just as important as our answers."
                ,
                author: 'Fred "Mister" Rogers',
                viewsToday: 9057,
                totalViews: 70827
            },
            {
                content: "Getting better from depression demands a lifelong commitment. I've made that commitment for my life's sake and for the sake of those who love me.",
                author: "Susan Polis Schutz",
                viewsToday: 1293,
                totalViews: 90423
            }

        ]*/

    }


    // toggle selection for a given fruit by name
    $scope.toggleSelection = function toggleSelection(fruitName) {
        var idx = $scope.selection.indexOf(fruitName);

        // is currently selected
        if (idx > -1) {
            $scope.selection.splice(idx, 1);
        }

        // is newly selected
        else {
            $scope.selection.push(fruitName);
        }
    };


    // toggle selection for a given fruit by name
    $scope.toggleReasonSelection = function toggleSelection(fruitName) {
        var idx = $scope.reasonPersons.indexOf(fruitName);

        // is currently selected
        if (idx > -1) {
            $scope.reasonPersons.splice(idx, 1);
        }

        // is newly selected
        else {
            $scope.reasonPersons.push(fruitName);
        }
    };


});




/*if(vm.user.mood.depressed) {
 for(var item in $scope.depressed) {
 vm.user.mood.whyOptions.push($scope.depressed[item]);
 }
 }


 if(vm.user.mood.stressed) {
 for(var item in $scope.stressed) {
 vm.user.mood.whyOptions.push($scope.stressed[item]);
 }
 }


 if(vm.user.mood.other) {
 // vm.user.mood.whyOptions.push( $scope.other)
 for(var item in $scope.other) {
 vm.user.mood.whyOptions.push($scope.other[item]);
 }
 }*/
