export interface Settings {
    uid: string;
    email: string;
    firstname: string;
    lastname: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    }
}