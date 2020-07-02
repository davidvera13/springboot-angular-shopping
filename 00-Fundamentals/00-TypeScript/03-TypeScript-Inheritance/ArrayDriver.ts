import {Circle} from "./inheritance/Circle";
import {Shape} from "./inheritance/Shape";
import {Rectangle} from "./inheritance/Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

// declare an array of shapes
let shapes: Shape[] = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

for (let shape of shapes)
    console.log(shape.getInfo());
