import {Circle} from "./inheritance/Circle";
import {Shape} from "./inheritance/Shape";
import {Rectangle} from "./inheritance/Rectangle";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());

