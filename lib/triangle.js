//text, text-color, shape, color

//set up triangle class
class Triangle {
  constructor(text, textColor, bgColor) {
    this.text = text;
    this.textColor = textColor;
    this.bgColor = bgColor;
  }
  render() {
    const logoString = `<svg height="200" width="300"><polygon points="0 200, 150 0, 300 200" fill="${this.bgColor}" stroke="white"/><text x="150" y="170" text-anchor="middle" fill="${this.textColor}" font-size="80">${this.text}</text></svg>`;
    return logoString;
  }
}

module.exports = Triangle;
