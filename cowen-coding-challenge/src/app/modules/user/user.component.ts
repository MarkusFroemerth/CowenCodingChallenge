import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
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

    onShowAlbums(userId: Number) {
        let dialogRef = this.modalService.open(AlbumComponent, this.ngbModalOptions);
        dialogRef.componentInstance.userId = userId;
    }
}
