import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JsonFormData} from '../../misc/app.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private httpClient = inject(HttpClient)

  configureForm(formPath: string): Observable<JsonFormData> {
    return this.httpClient.get<JsonFormData>(`assets/${formPath}`);
  }
}
