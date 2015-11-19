'use strict';
import angular from 'angular';
import Test from 'es6Module/test';
import sampleModule from 'sampleModule/index';

console.log(sampleModule);
angular.module('sampleModule',[]);

angular.bootstrap(document, ['sampleModule']);

new Test('import & es6 works!').alert();
