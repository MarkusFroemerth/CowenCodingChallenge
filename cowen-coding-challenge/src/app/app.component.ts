import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'cowen-coding-challenge';

    public albumUserId: Number = null;

    onAlbumChange(event: Event) {
        console.log(event);
    }
}
