import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainInputAreaComponent } from './domain-input-area/domain-input-area.component';
import { BaseAttrComponent } from './attr/base-attr/base-attr.component';
import { BaseNodeComponent } from './node/base-node/base-node.component';

@NgModule({
  declarations: [
    AppComponent,
    DomainInputAreaComponent,
    BaseAttrComponent,
    BaseNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
