export default class Util {
  static enterInput(webElement, input) {
    webElement.clear();
    webElement.type(input);
  }
}
