import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings.component';
import { GameComponent } from './game.component';
import { RecentlyComponent } from './recently.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    GameComponent,
    RecentlyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
