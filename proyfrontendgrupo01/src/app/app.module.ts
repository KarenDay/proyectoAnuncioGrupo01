import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolComponent } from './components/rol/rol.component';
import { AreaComponent } from './components/area/area.component';

@NgModule({
  declarations: [
    AppComponent,
    RolComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
