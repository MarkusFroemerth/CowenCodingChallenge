import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Album} from 'src/app/shared/models/album.model';
import {Photo} from 'src/app/shared/models/photo.model';

@Component({
    selector: 'app-album-content',
    templateUrl: './album-content.component.html',
    styleUrls: ['./album-content.component.scss']
})
export class AlbumContentComponent implements OnInit, OnChanges {
    @Input()
    public album: Album;

    public photosList: Photo[] = [];

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.album.currentValue) {
            this.fetchFotos(changes.album.currentValue.id);
        }
    }

    public fetchFotos(albumId: number) {
        fetch('http://jsonplaceholder.typicode.com/albums/' + albumId + '/photos')
            .then(response => response.json())
            .then(json => (this.photosList = json));
    }

    public showPhoto(url: string) {
        // TODO: use some in-app way to show the picture. like a modal window
        window.open(url);
    }
}
