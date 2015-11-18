export default class Test {
  constructor (message) {
    this.message = message;
  }

  alert () {
    window.alert(this.message);
  }
}
