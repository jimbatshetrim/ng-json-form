import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JsonFormControls, JsonFormData} from '../../misc/app.interface';
import {map, Observable} from 'rxjs';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private httpClient = inject(HttpClient)
  private fb = inject(FormBuilder);

  private getFormConfig(formPath: string): Observable<JsonFormData> {
    return this.httpClient.get<JsonFormData>(`assets/${formPath}`);
  }

  configureForm(formPath: string): Observable<FormGroup> {
    const formGroup: FormGroup = this.fb.group({});
    return this.getFormConfig(formPath).pipe(
        map(({controls}) => this.createForm(controls, formGroup)));
  }

  private createForm(controls: JsonFormControls[], formGroup: FormGroup): FormGroup {
    controls.forEach(control => {
          formGroup.addControl(
              control.name, this.fb.control(control.value, this.configureValidators(control)))
    })
    return formGroup;
  }

  private configureValidators(control: JsonFormControls): ValidatorFn[] {
    const validatorsToAdd = [];
    for (const [key, value] of Object.entries(control.validators)) {
      switch (key) {
        case 'min':
          validatorsToAdd.push(Validators.min(value));
          break;
        case 'max':
          validatorsToAdd.push(Validators.max(value));
          break;
        case 'required':
          if (value) validatorsToAdd.push(Validators.required);
          break;
        case 'requiredTrue':
          if (value) validatorsToAdd.push(Validators.requiredTrue);
          break;
        case 'email':
          if (value) validatorsToAdd.push(Validators.email);
          break;
        case 'minLength':
          validatorsToAdd.push(Validators.minLength(value));
          break;
        case 'maxLength':
          validatorsToAdd.push(Validators.maxLength(value));
          break;
        case 'pattern':
          validatorsToAdd.push(Validators.pattern(value));
          break;
        case 'nullValidator':
          if (value) validatorsToAdd.push(Validators.nullValidator);
          break;
        default:
          break;
      }
    }
    return validatorsToAdd;
  }
}
