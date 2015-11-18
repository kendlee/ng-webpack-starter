'use strict';
import angular from 'angular';
import Test from 'es6Module/test';

angular.bootstrap(document, []);

new Test('import & es6 works!').alert();
