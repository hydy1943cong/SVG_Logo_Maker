class Shape {
    constructor(color){
        this.shapeColor = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill= "${this.shapeColor}"/>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle r="50" cx="150" cy="150" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect width="100" height="100" x="100" y="100" rx="0" ry="0" fill="${this.shapeColor}"/>`;
    }
}

module.exports = {Shape, Triangle, Circle, Square};