export class Customer {
    id: number;
    name: string;
    email: string;
    telephone: string;
    street: string;
    city: string;
    state: string;
    zip: string;

    constructor(values: Object = {}) {
            Object.assign(this, values);
    }
}
