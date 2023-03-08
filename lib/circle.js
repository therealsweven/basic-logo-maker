class Circle {
  constructor(text, textColor, bgColor) {
    this.text = text;
    this.textColor = textColor;
    this.bgColor = bgColor;
  }
  render() {
    const logoString = `<svg height="200" width="300"><circle cx="150" cy="100" r="100" stroke="white" fill="${this.bgColor}" /><text x="150" y="130" text-anchor="middle" fill="${this.textColor}" font-size="80">${this.text}</text></svg>`;
    return logoString;
  }
}

module.exports = Circle;
