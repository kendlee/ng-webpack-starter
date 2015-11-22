'use strict';
describe('DeviceParameterServiceTest', function () {
  beforeEach(module('SampleModule'));
  var SampleServiceTest;

  beforeEach(inject(function (_SampleService_) {
    SampleServiceTest = _SampleService_;
  }));

  it('should add correctly', function () {
    expect(SampleServiceTest.add(1, 2)).toBe(3);
  });
});
