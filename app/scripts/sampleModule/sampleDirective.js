'use strict';
import sampleModule from './module.js';

sampleModule.directive('sampleDirective', function () {
  return {
    restrict: 'E',
    template: 'Sample directive'
  };
});
