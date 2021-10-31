export class Album {
    declare public id: number;
    declare public userId: Number;
    declare public title: string;

    constructor(userId: Number, title: string) {
        this.userId = userId;
        this.title = title;
    }
}
