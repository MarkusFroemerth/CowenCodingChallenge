import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { User } from 'src/app/shared/models/user-model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    @Input()
    public user: User = new User();

    constructor() {}

    ngOnInit(): void {}

    onShowAlbums() {
        // show Albums somehow
    }
}
