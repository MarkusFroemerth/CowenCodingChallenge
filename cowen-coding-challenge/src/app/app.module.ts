import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { UserListComponent } from './modules/user-list/user-list.component';
import { UserComponent } from './modules/user/user.component';
import { SharedModule } from './shared/shared.module';
import { AlbumComponent } from './modules/album/album.component';
import { AlbumSelectorComponent } from './modules/album-selector/album-selector.component';
import { AlbumContentComponent } from './modules/album-content/album-content.component';

@NgModule({
    declarations: [AppComponent, UserComponent, UserListComponent, AlbumComponent, AlbumSelectorComponent, AlbumContentComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
