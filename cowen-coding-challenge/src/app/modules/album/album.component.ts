import {Component, Input, OnInit} from '@angular/core';
import { Album } from 'src/app/shared/models/album.model';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
    constructor() {}

    public currentAlbum: Album;

    @Input()
    public userId: number;

    ngOnInit(): void {}

    onAlbumChanged(event: any) {
        this.currentAlbum = event;
    }
}
