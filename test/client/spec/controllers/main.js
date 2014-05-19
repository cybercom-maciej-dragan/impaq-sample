'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('impaqSampleApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.whenPOST('/api/contacts', {fname:'Adam', sname:'Kowalski'})
      .respond({fname:'Kowalski', sname:'Adam'});
    $httpBackend.whenPOST('/api/contacts', {fname:'Maciej', sname:'Nowak'})
      .respond({fname:'Nowak', sname:'Maciej'});
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    scope.contacts = prepareTestContacts();
  }));




  it('should not send request when no contact is selected', function () {
    scope.submit();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should send one request when one contact is selected', function () {
    scope.contacts[0].sendIt = true;
    scope.submit();
    $httpBackend.flush(1);
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should send two requests when two contact is selected', function () {
    scope.contacts[0].sendIt = true;
    scope.contacts[1].sendIt = true;
    scope.submit();
    $httpBackend.flush(2);
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should reverse contacts first/lastname', function() {
    var originalContacts = angular.copy(scope.contacts);
    scope.contacts[0].sendIt = true;
    scope.contacts[1].sendIt = true;   
    scope.submit();
    $httpBackend.flush(); 
    expect(scope.contacts[0].data.fname).toEqual(originalContacts[0].data.sname);
    expect(scope.contacts[0].data.sname).toEqual(originalContacts[0].data.fname);
    expect(scope.contacts[1].data.fname).toEqual(originalContacts[1].data.sname);
    expect(scope.contacts[1].data.sname).toEqual(originalContacts[1].data.fname);
  });




  function prepareTestContacts() {
    return [
            {
                sendIt: false,
                data: {
                    fname: 'Adam',
                    sname: 'Kowalski'
                }
            },
            {
                sendIt: false,
                data: {
                    fname: 'Maciej',
                    sname: 'Nowak'
                }
            }];
  }
});
