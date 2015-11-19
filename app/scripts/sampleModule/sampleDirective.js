'use strict';
import sampleModule from './module.js';

sampleModule.directive('sampleDirective', function () {
  return {
    restrict: 'E',
    template: '<md-button class="md-raised md-primary">Primary</md-button>'
  };
});
