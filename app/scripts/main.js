'use strict';
import angular from 'angular';
import Test from 'es6Module/test';
import sampleModule from 'sampleModule/index';

angular.bootstrap(document, [sampleModule]);

new Test('import & es6 works!').alert();
