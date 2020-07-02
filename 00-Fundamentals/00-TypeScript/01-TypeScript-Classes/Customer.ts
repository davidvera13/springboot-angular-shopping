// tsc -target "es5" Customer.ts && node Customer.js
// tsc -- init => generate a config file

class Customer {
    private _firstName: string;
    private _lastName: String

    constructor(firstName: string, lastName: String) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): String {
        return this._lastName;
    }

    set lastName(value: String) {
        this._lastName = value;
    }
}

let customer = new Customer("John", "Coltrane");
console.log("Hello " + customer.firstName + " " + customer.lastName);
console.log(`Hello ${customer.firstName} ${customer.lastName}`);
customer.firstName = "John";
customer.lastName = "Wayne"

console.log(`Hello ${customer.firstName} ${customer.lastName}`);
