const { Triangle, Circle, Square, Shape } = require('../lib/shapes.js');

describe('Triangle', () => {
    it("should render a blue triangle", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
})

describe('Circle', () => {
    it("should render a yellow circle", () => {
        const shape = new Circle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<circle r="50" cx="150" cy="150" fill="yellow"/>');
    });
})

describe('Square', () => {
    it("should render a black square", () => {
        const shape = new Square();
        shape.setColor("black");
        expect(shape.render()).toEqual('<rect width="100" height="100" x="100" y="100" rx="0" ry="0" fill="black"/>');
    });
})