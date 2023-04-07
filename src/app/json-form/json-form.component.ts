import {Component, inject, OnInit} from '@angular/core';
import {FormService} from '../services/form.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnInit {
  formService = inject(FormService);
  form!: FormGroup;

  ngOnInit(): void {
    this.formService.configureForm('my-form.json')
        .subscribe(
            (form) => {
              this.form = form
              console.log(form)
            });
  }
}
