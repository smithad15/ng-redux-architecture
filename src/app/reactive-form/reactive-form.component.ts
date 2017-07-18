import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { StateStore, ValidationErrors } from '../store';
import * as TemplateFormSelectors from '../template-form/template-form.selectors';
import { selectorValidator } from '../shared/control-is-valid/control-is-valid.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  nameIsValid: Observable<ValidationErrors>;
  emailIsValid: Observable<ValidationErrors>;

  constructor(private store: StateStore) { }

  ngOnInit() {
    this.nameIsValid = this.store.getState(TemplateFormSelectors.nameIsValid);
    this.emailIsValid = this.store.getState(TemplateFormSelectors.emailIsValid);

    this.form = new FormGroup({
      name: new FormControl(null, null, selectorValidator(this.nameIsValid)),
      email: new FormControl(null, null, selectorValidator(this.emailIsValid)),
    });

  }

}
