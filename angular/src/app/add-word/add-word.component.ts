import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Translation } from '../services/interfaces';
import { TranslatorService } from '../services/translator.service';
import { ViewService } from '../services/view.service';
import { VocabularyService } from '../services/vocabulary.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss'],
})
export class AddWordComponent implements OnInit, OnDestroy {
  constructor(
    private translatorService: TranslatorService,
    private vocabularyService: VocabularyService,
    private viewService: ViewService
  ) {}

  sub: Subscription;
  wordSource = '';
  wordTarget = '';

  translate$: Observable<string>;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  translate(): void {
    this.sub = this.vocabularyService.translateWord(this.wordSource).subscribe(
      (data) => (this.wordTarget = data),
      (error) =>
        this.viewService.notifyError('An error occurred during the translating')
    );
  }

  addIntoVocabulary(): void {
    const newTranslation: Translation = {
      sourceText: this.wordSource,
      targetText: this.wordTarget,
    };
    this.sub = this.vocabularyService.addTranslation(newTranslation).subscribe(
      (resp) => this.viewService.notifyFromVocabulary(resp),
      (error) => this.viewService.notifyError(error)
    );
  }

  close(): void {
    this.wordTarget = '';
    this.wordSource = '';
  }
}
