import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  form: FormGroup = new FormGroup({
    usuario: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
  });

  get usuario() {
    return this.form.controls['usuario'].value;
  }
  get senha() {
    return this.form.controls['senha'].value;
  }

  constructor() {}

  ngOnInit(): void {}

  public login() {
    if(this.validateForm()){
      console.log(this.usuario);
    }
    else{
      alert('Preencha todos os campos corretamente');
    }
    this.clearForm();
  }

  private validateForm(){
    return this.form.valid;
  }

  private clearForm(){
    this.form.reset();
  }
}
