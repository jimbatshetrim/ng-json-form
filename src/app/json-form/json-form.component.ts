import {Component, inject, OnInit} from '@angular/core';
import {JsonFormData} from 'src/misc/app.interface';
import {FormService} from '../services/form.service';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnInit {
  formService = inject(FormService);
  form!: JsonFormData;

  ngOnInit(): void {
    this.formService.configureForm('my-form.json')
        .subscribe(
            (form) => {
              this.form = form
              console.log(form)
            });
  }
}
