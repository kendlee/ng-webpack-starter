import AppModule from './app';

describe('App', () => {
  let $rootScope, $compile;

  beforeEach(window.module(AppModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $compile = $injector.get('$compile');
  }));
  describe('View', () => {
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<app></app>')(scope);
      scope.$apply();
    });

    it('has test on template', () => {
      expect(template.find('h1').html()).toBe('test');
    });
  });
});
