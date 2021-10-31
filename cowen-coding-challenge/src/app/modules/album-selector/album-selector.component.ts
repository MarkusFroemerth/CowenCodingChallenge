import {Component, OnInit} from '@angular/core';
import { Album } from 'src/app/shared/models/album.model';

@Component({
    selector: 'app-album-selector',
    templateUrl: './album-selector.component.html',
    styleUrls: ['./album-selector.component.scss']
})
export class AlbumSelectorComponent implements OnInit {
    public userId: number = 1; // TODO remove dummy

    public albums: Album[] = [];

    constructor() {}

    ngOnInit(): void {
        this.fetchAlbums(this.userId);
    }

    public fetchAlbums(userId: number) {
        fetch('http://jsonplaceholder.typicode.com/user/' + userId + '/albums')
            .then(response => response.json())
            .then(json => this.albums = json);
    }
}
