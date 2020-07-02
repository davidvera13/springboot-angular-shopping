import {Circle} from "./abstract/Circle";
import {Shape} from "./abstract/Shape";
import {Rectangle} from "./abstract/Rectangle";

// we can't create an instance of an abstract class
// let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

// declare an array of shapes
let shapes: Shape[] = [];
shapes.push(myCircle);
shapes.push(myRectangle);

for (let shape of shapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}

