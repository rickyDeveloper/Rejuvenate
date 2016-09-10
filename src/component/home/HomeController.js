/**
 * Created by vikasnaiyar on 10/09/16.
 */

/**
 * Created by vikasnaiyar on 10/09/16.
 */

// our controller for the form
// =============================================================================
myApp.controller('HomeController', function($scope, $http, $sce, SharedDataService) {
/*
    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };*/


    var vm = this;

    vm.step1Data = []

    vm.user = {}
    vm.user.mood = {}

    vm.user.mood.depressed = ''
    vm.user.mood.stressed = ''
    vm.user.mood.other = ''

    $scope.stressed = ['Angry', 'Sad'],
    $scope.depressed = ['Relation Ship', 'No Encouragement', 'No Reason'],
    $scope.other = ['No aspiration', 'Low on confidence']

    vm.user.mood.whyOptions = []

    // selected why
    $scope.selection = [];
    $scope.reasonPersons = []

    // Reason selection
    $scope.reasonSelections = []

    //Model
    vm.currentStep = 1;
    vm.steps = [
        {
            step: 1,
            name: "Your Mood",
            template: "src/component/home/step1.html"
        },
        {
            step: 2,
            name: "Why?",
            template: "src/component/home/step2.html"
        },
        {
            step: 3,
            name: "Reason",
            template: "src/component/home/step3.html"
        }
    ];
    vm.user = {};

    //Functions
    vm.gotoStep = function(newStep) {
        if(vm.currentStep == 1) {
            vm.user.mood.whyOptions = []
            $scope.selection = []
            if(vm.user.mood.depressed) {
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
            }

        } else if (vm.currentStep == 2) {
            // Reason selection
            $scope.reasonSelections = []
            $scope.reasonPersons = []

            for(var item in $scope.selection) {
                if($scope.selection[item] == 'Relation Ship') {
                    $scope.reasonSelections.push('Spouse');
                    $scope.reasonSelections.push('Sibling');
                    $scope.reasonSelections.push('Manager/Colleague');
                } else if ($scope.selection[item] == 'Angry'){
                    $scope.reasonSelections.push('Offical');
                    $scope.reasonSelections.push('Wife');
                    $scope.reasonSelections.push('Family');
                }
            }
        }


        vm.currentStep = newStep;
    }

    vm.getStepTemplate = function(){
        for (var i = 0; i < vm.steps.length; i++) {
            if (vm.currentStep == vm.steps[i].step) {
                return vm.steps[i].template;
            }
        }
    }

    vm.save = function() {

        /*$http.get("http://www.google.com")
            .then(function(response) {
                //First function handles success
                $scope.content = response.data;
            }, function(response) {
                //Second function handles error
                $scope.content = "Something went wrong";
            });*/

        SharedDataService['blogs'] = [
            {
                imageSrc: 'https://cdn-images-1.medium.com/max/800/1*rsnkdN9SNpMPOJ3bMUu0qA.jpeg',
                url: 'https://readthink.com/12-mindfulness-hacks-that-will-kill-your-stress-2bcda9376bb6#.ge3hx8ffe',
                description:'12 Mindfulness Hacks That Will Kill Your Stress'
            },
            {
                imageSrc: 'https://cdn-images-1.medium.com/max/800/1*rsnkdN9SNpMPOJ3bMUu0qA.jpeg',
                url: 'https://readthink.com/12-mindfulness-hacks-that-will-kill-your-stress-2bcda9376bb6#.ge3hx8ffe',
                description:'12 Mindfulness Hacks That Will Kill Your Stress'
            }
        ]

        SharedDataService['videos'] = [
            {
                url: $sce.trustAsResourceUrl('//www.youtube.com/embed/3I7qR4NO8Ag')
            },
            {
                url: $sce.trustAsResourceUrl('//www.youtube.com/embed/kYX87kkyubk')
            }
         ]

        SharedDataService['quotes'] = [

            {
                content:"In times of stress, the best thing we can do for each other is to listen with our ears and our hearts and to be assured that our questions are just as important as our answers."
                ,
                author: 'Fred "Mister" Rogers'

            },
            {
                content: "Getting better from depression demands a lifelong commitment. I've made that commitment for my life's sake and for the sake of those who love me.",
                author: "Susan Polis Schutz"

            }

        ]

        location.href = '#/results';

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
