import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private formBuilder: FormBuilder = new FormBuilder();
  
}
