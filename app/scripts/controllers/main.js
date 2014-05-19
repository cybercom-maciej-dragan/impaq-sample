'use strict';

angular.module('impaqSampleApp')
        .controller('MainCtrl', function($scope, $http) {
            $scope.contacts = [
                {
                    sendIt: false,
                    data: {
                        fname: 'Onufry',
                        sname: 'Zagloba'
                    }
                },
                {
                    sendIt: false,
                    data: {
                        fname: 'Maciej',
                        sname: 'Kowalski'
                    }
                },
                {
                    sendIt: false,
                    data: {
                        fname: 'Adam',
                        sname: 'Nowak'
                    }
                },
                {
                    sendIt: false,
                    data: {
                        fname: 'Andrzej',
                        sname: 'Andrzejewski'
                    }
                },
                {
                    sendIt: false,
                    data: {
                        fname: 'Robert',
                        sname: 'Kubica'
                    }
                }
            ];

            $scope.submit = function() {
                $scope.contacts.forEach(function(contact) {
                    if (contact.sendIt) {
                        $http.post('/api/contacts', contact.data).success(function(responseData) {
                            contact.data = responseData;
                        });
                    }
                })
            };
        });
