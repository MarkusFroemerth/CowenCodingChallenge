import { Address } from "./address-model"
import { Company } from "./company-model";

export class User {
    declare public id: Number;
    declare public name: string;
    declare public username: string;
    declare public email: string;
    declare public address: Address;
    declare public phone: string;
    declare public website: string;
    declare public company: Company;
}
