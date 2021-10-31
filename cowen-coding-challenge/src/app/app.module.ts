import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { UserListComponent } from './modules/user-list/user-list.component';
import { UserComponent } from './modules/user/user.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, UserComponent, UserListComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
