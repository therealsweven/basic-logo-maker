//text, text-color, shape, color

//set up square class
class Square {
  constructor(text, textColor, bgColor) {
    this.text = text;
    this.textColor = textColor;
    this.bgColor = bgColor;
  }
  render() {
    const logoString = `<svg width="300" height="200"><rect x="10" y="10" fill="${this.bgColor}" width="300" height="200"/><text x="150" y="130" text-anchor="middle" fill="${this.textColor}" font-size="80">${this.text}</text></svg>`;
    return logoString;
  }
}

module.exports = Square;
