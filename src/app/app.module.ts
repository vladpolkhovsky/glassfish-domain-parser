import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DomainInputAreaComponent} from './domain-input-area/domain-input-area.component';
import {BaseAttrComponent} from './attr/base-attr/base-attr.component';
import {BaseNodeComponent} from './node/base-node/base-node.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { CreateNodeDialogComponent } from './dialog/create-node-dialog/create-node-dialog.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DomainInputAreaComponent,
    BaseAttrComponent,
    BaseNodeComponent,
    CreateNodeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
