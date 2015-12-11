define(['tests/factories/guestFactory', 'app/model/guest',
    'app/repository/guestRepository', 'libraries/angularMocks'],
    function (GuestFactory, Guest, GuestRepository, AngularMocks) {
        'use strict';

        describe('GuestRepository', function() {
            var guest, guestRepository, $http, $httpBackend;

            beforeEach(AngularMocks.inject(function($injector) {
                $http = $injector.get('$http');
                $httpBackend = $injector.get('$httpBackend');

                guestRepository = new GuestRepository($http);
                guest = GuestFactory.createGuest(1);

                $httpBackend.when('GET', '/api/events/1/guests/1').respond(guest);
                $httpBackend.when('GET', '/api/events/1/guests/null').respond(404, 'Guest not found.');

            }));

            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            describe('get()', function() {
                describe('by object id', function() {
                    it('returns the object', function() {
                        guestRepository.get(1, guest.id, function(newGuest) {
                            expect(guest.id).toEqual(newGuest.id);
                        }, function(){});
                        $httpBackend.flush();
                    });
                });

                describe('by inexistent object id', function() {
                    it('returns null', function() {
                        guestRepository.get(1, null, function() {
                        }, function(error) {
                            expect(error).toEqual('Guest not found.');
                        });
                        $httpBackend.flush();
                    });
                });


            });

            describe('add()', function() {
                it('insert element', function() {
                    var status1 = guestRepository.add(1, guest);
                    expect(status1).toBe(true);
                });
            });

        });






    });
