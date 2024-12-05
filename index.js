class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]/g, "");
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(" ");
    return words.map((word, i) => {
      const wordInLowCase = word.toLowerCase();
      if (i !== 0 && exceptions.includes(wordInLowCase)) {
        return wordInLowCase;
      } else {
        return this.capitalize(word);
      }
    }).join(" ");
  }
}