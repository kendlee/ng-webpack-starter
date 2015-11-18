'use strict';

class Test {
  constructor (message) {
    this.message = message;
  }

  alert () {
    window.alert(this.message);
  }
}

new Test('it works!').alert();
