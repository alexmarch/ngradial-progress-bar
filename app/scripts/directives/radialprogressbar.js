'use strict';

/**
 * @ngdoc directive
 * @name ngradialProgressBarApp.directive:radialProgressBar
 * @description
 * # radialProgressBar
 */
angular.module('ngradialProgressBarApp')
  .directive('radialProgressBar', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.template = '<div class="radial-progress" data-progress="0">'+
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
                          '</div>';
        var $progress = angular.element(scope.template);
        console.log($progress);
      }
    };
  }).run();
