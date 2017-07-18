import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ValidationErrors, StateStore } from '../store';
import * as TemplateFormSelectors from './template-form.selectors';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  nameIsValid: Observable<ValidationErrors>;
  emailIsValid: Observable<ValidationErrors>;

  constructor(private store: StateStore) { }

  ngOnInit() {
    this.nameIsValid = this.store.getState(TemplateFormSelectors.nameIsValid);
    this.emailIsValid = this.store.getState(TemplateFormSelectors.emailIsValid);
  }

}
