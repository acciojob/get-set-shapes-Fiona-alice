//complete this code
class Rectangle {
	constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (value <= 0) {
      throw new Error("Width must be a positive number");
    }
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (value <= 0) {
      throw new Error("Height must be a positive number");
    }
    this._height = value;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Animal {
	constructor(side) {
    super(side, side);
  }

  get side() {
    return this.width;
  }

  set side(value) {
    this.width = value;
    this.height = value;
  }

  getPerimeter() {
    return 4 * this.width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
