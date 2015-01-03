'use strict';

angular.module('app.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '_', function ($scope, _) {
        // examples from Ben Nadel
        // dependency-injection framework.

        // Set up friends collection for demo.
        var friends = [
            {
                id: 1,
                name: "Sarah",
                isGoodFriend: true,
                isBestFriend: false
            },
            {
                id: 2,
                name: "Tricia",
                isGoodFriend: false,
                isBestFriend: false
            },
            {
                id: 3,
                name: "Kim",
                isGoodFriend: true,
                isBestFriend: true
            },
            {
                id: 4,
                name: "Joanna",
                isGoodFriend: true,
                isBestFriend: false
            }
        ];

        // Find the good friends.
        var goodFriends = _.where( friends, "isGoodFriend" );

        // Of the good friends, find the best friends!
        var bestFriends = _.where( goodFriends, "isBestFriend" );

        // Log us some interesting stats on friendship.
        console.info( "Good friends: %s", _.naturalList( _.pluck( goodFriends, "name" )));
        $scope.goodFriends = _.naturalList( _.pluck( goodFriends, "name" ));


        console.info( "Best friends: %s", _.naturalList( _.pluck( bestFriends, "name" )));
        $scope.bestFriends = _.naturalList( _.pluck( bestFriends, "name" ));
    }]);
