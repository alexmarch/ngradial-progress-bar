'use strict';

describe('Directive: radialProgressBar', function () {

  // load the directive's module
  beforeEach(module('ngradialProgressBarApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<radial-progress-bar></radial-progress-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the radialProgressBar directive');
  }));
});
