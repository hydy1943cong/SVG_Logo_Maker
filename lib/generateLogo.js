const {Triangle, Circle, Square, Shape} = require('./shapes.js');

function generateLogo(answers) {
  const {text, text_color, shape, shape_color} = answers;
  let myShape;
  if(answers.shape === 'circle') {
    myShape = new Circle(shape_color);
  } else if (answers.shape ==='square') {
    myShape = new Square(shape_color);
  } else if (answers.shape ==='triangle') {
    myShape = new Triangle(shape_color);
  }
  console.log(myShape);
  console.log(myShape.render());
  const logoContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${myShape.render()}
    <text x="150" y="150" dy="10" text-anchor="middle" fill="${answers.text_color}" font-size="30px">${text}</text>
  </svg>
`;

  return logoContent;
  
}

module.exports = generateLogo;
