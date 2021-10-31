import { Geo } from "./geo-model";

export class Address {
    declare public street: string;
    declare public suite: string;
    declare public city: string;
    declare public zipcode: string;
    declare public geo: Geo;
}
