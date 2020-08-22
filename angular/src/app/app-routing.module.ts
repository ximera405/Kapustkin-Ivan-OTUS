import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { GameComponent } from './game.component';
import { RecentlyComponent } from './recently.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: RecentlyComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
