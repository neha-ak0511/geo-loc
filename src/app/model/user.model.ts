export class User {
    id: string;
    name?: string;
    type?: string;
    age?: string;
    address?: Address
    constructor(id: string) {
        this.id = id;
    }
}

class Address {
    city?: string;
    pin?: any;
    fullAddress?: string;
}