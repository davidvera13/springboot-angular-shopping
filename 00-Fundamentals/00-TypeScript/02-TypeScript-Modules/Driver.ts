import { Customer } from "./Customer";

let customer = new Customer("John", "Coltrane");
console.log("Hello " + customer.firstName + " " + customer.lastName);
console.log(`Hello ${customer.firstName} ${customer.lastName}`);
customer.firstName = "John";
customer.lastName = "Wayne"

console.log(`Hello ${customer.firstName} ${customer.lastName}`);
