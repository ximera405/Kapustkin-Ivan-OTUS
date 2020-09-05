import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [
    `
      .nav {
        clear: both;
      }
      a {
        float: left;
      }
      .active a {
        color: red;
      }
    `,
  ],
  template: `<div class="page-header">
    <h1 class="toolbar__title">
      Добро пожаловать в приложение для запоминания иностранных слов
      <ul class="nav">
        <li
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <a routerLink="">Главная</a>
        </li>
        <li routerLinkActive="active">
          <a routerLink="/game">Игра</a>
        </li>
        <li routerLinkActive="active">
          <a routerLink="/settings">Настройки</a>
        </li>
      </ul>
      <router-outlet></router-outlet>
    </h1>
  </div>`,
})
export class AppComponent {}
