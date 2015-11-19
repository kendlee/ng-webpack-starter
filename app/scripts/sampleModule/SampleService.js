'use strict';
import sampleModule from './module.js';

sampleModule.factory('SampleService', function () {
  function add (a, b) {
    return a + b;
  }

  return {
    add
  };
});
