import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Album } from 'src/app/shared/models/album.model';

@Component({
    selector: 'app-album-selector',
    templateUrl: './album-selector.component.html',
    styleUrls: ['./album-selector.component.scss']
})
export class AlbumSelectorComponent implements OnInit {

    @Input()
    public userId: number;

    public albums: Album[] = [];
    public selectedAlbum: Album;

    @Output()
    public albumChanged: EventEmitter<Album> = new EventEmitter<Album>();

    constructor() {}

    ngOnInit(): void {
        this.fetchAlbums(this.userId);
    }

    public fetchAlbums(userId: number) {
        fetch('http://jsonplaceholder.typicode.com/user/' + userId + '/albums')
            .then(response => response.json())
            .then(json => this.albums = json);
    }

    public onAlbumChanged(event: any) {
        let albumId = event.target.value;
        let album = this.albums.find((a: Album) => a.id == albumId);
        this.albumChanged.emit(album);
    }
}
