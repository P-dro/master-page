import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterPageNavComponent } from './master-page-nav/master-page-nav.component';
import { MasterPagePanelComponent } from './master-page-panel/master-page-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageNavComponent,
    MasterPagePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
