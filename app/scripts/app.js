'use strict';

/**
 * @ngdoc overview
 * @name RadialProgressBar
 * @description
 * # Radial Progress Bar animation
 *
 * Main module of the application.
 */
angular
  .module('App', [])
  .directive('radialProgressBar', function ($timeout) {
    return {
      template: '<div class="radial-progress" data-progress="{{percentage}}">'+
                  '<div class="circle">'+
                      '<div class="mask full">'+
                          '<div class="fill"></div>'+
                      '</div>'+
                      '<div class="mask half">'+
                        '<div class="fill"></div>'+
                        '<div class="fill fix"></div>'+
                      '</div>'+
                      '<div class="shadow"></div>' +
                    '</div>'+
                      '<div class="inset">'+
                          '<div class="percentage"></div>'+
                      '</div>'+
                  '</div>',
      restrict: 'AE',
      scope: {
        // One way data-binding. Every time it changes outside, it will change here
        // and progress will be updated
        percentage: '@'
      }
    };
  });
