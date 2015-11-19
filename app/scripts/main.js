'use strict';
import angular from 'angular';
import Test from 'es6Module/test';
import SampleModule from 'sampleModule/index';

angular.bootstrap(document, [SampleModule]);

new Test('import & es6 works!').alert();
