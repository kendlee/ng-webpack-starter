'use strict';
import 'babel-polyfill';
import 'angular-material/angular-material.css';
// import '../styles/main.css';
import angular from 'angular';
import ngMaterial from 'angular-material';
import Test from 'es6Module/test';
import SampleModule from 'sampleModule/index';

angular.bootstrap(document, [ngMaterial, SampleModule]);

new Test('import & es6 works!').alert();
