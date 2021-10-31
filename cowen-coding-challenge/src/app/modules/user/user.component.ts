import { JsonPipe } from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Album } from 'src/app/shared/models/album.model';
import { User } from 'src/app/shared/models/user-model';
import { AlbumComponent } from '../album/album.component';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    @Input()
    public user: User = new User();

    private ngbModalOptions: NgbModalOptions;

    constructor(private modalService: NgbModal) {
        this.ngbModalOptions = {
            size: 'lg'
        }
    }

    ngOnInit(): void {}

    onShowAlbums() {
        let dialogRef = this.modalService.open(AlbumComponent, this.ngbModalOptions);
        dialogRef.componentInstance.userId = this.user.id;
    }

    onCreateAlbum() {
        // TODO let user choose name
        let newAlbumName = 'FooBarAlbum';

        let newAlbum = new Album(this.user.id, newAlbumName);
        fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'POST',
            body: JSON.stringify(newAlbum),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(json => {
            console.log(json);
            alert('Album successfully created');
        }).catch(error => {
            console.log(error);
            alert('Album erstellen fehlgeschlagen');
        });
    }
}
