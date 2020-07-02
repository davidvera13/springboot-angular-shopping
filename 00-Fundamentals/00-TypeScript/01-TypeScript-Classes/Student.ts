// tsc -target "es5" Customer.ts && node Customer.js
// tsc -- init => generate a config file

class Student {
    constructor(private _firstName: string, private _lastName: String) {
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

let student = new Student("Jane", "Calamity");
console.log("Hello " + student.firstName + " " + student.lastName);
console.log(`Hello ${student.firstName} ${student.lastName}`);
student.firstName = "Jane";
student.lastName = "Fonda"

console.log(`Hello ${student.firstName} ${student.lastName}`);
