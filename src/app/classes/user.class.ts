export interface User {
    uid?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    firstname?: string;
    lastname?: string;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        zip?: string;
    };
}
