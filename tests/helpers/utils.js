/* global beforeAll */

import SmartEasing from './../../src/smart-easing.js';
import defaults from './../data/defaults-motion-properties.js';

beforeAll(function () {
  this.SmartEasing = SmartEasing;
  this.data = { defaults };
});