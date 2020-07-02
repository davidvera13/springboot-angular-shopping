// tsc -target "es5" Customer.ts && node Customer.js
// tsc -- init => generate a config file
export class Customer {
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
