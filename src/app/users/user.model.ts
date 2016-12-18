export class Address {
    constructor (
        public street?: string,
        public suite?: string,
        public city?: string,
        public zipcode?: string
    ) {}
}

export class User {
    constructor (
        public name: string,
        public email: string,
        public username: string,
        public address = new Address(),
    ) {}
}