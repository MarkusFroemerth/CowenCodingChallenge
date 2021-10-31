import {Component, OnChanges, OnInit} from '@angular/core';
import { Album } from 'src/app/shared/models/album.model';
import { Photo } from 'src/app/shared/models/photo.model';

@Component({
    selector: 'app-album-content',
    templateUrl: './album-content.component.html',
    styleUrls: ['./album-content.component.scss']
})
export class AlbumContentComponent implements OnInit {
    constructor() {}

    public album: Album = new Album(); // TODO remove dummy
    public photosList: Photo[] = [];

    ngOnInit(): void {
        // TODO remove dummy
        this.fetchFotos(1)
    }

    public getThumbnailUrls() {
        return this.photosList.map((p: Photo) => p.thumbnailUrl);
    }

    public fetchFotos(albumId: number) {
        fetch('http://jsonplaceholder.typicode.com/albums/' + albumId + '/photos')
            .then(response => response.json())
            .then(json => this.photosList = json);
    }
}
