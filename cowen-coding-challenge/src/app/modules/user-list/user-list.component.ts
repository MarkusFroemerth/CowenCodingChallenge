import {Component, OnInit, Output} from '@angular/core';
import {User} from 'src/app/shared/models/user-model';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    constructor() {}

    public users: User[] = [];

    ngOnInit(): void {
        this.fetchUsers();
    }

    // TODO: use service class
    fetchUsers() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.users = json);
    }
}
