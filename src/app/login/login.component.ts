import { register } from 'node:module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../service/products.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formregister: { email: string; password: string } = { email: '', password: '' };
  
  constructor(private _product: ProductsService, private _route: Router) {}

  get(){
    this.formregister = this._product.getinformation();
  
    console.log(this.formregister);
  
    const startmail = this.formregister.email;
    const startpass = this.formregister.password;
  
    const enteremail = this.loginform.value.email;
    const enterpassword = this.loginform.value.password;
  
    if (startmail === enteremail && startpass === enterpassword) {
      this._route.navigate(['./home']);
      this._product.islogin.next(true)

    } else {

      alert('Please enter correct value');
    }
  }
  
  
  
  
  loginform = new FormGroup({
    email : new FormControl("" , [Validators.required]) ,
   password : new FormControl("" , [Validators.required]) 

  })


  submit(form: FormGroup) {
    if (form.valid) {
      this.get(); 
    }
  }

    
    // this._route.navigate(["./home"])

  
}
