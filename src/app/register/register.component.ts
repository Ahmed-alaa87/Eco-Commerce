import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { kMaxLength } from 'node:buffer';
import { register } from 'node:module';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule , CommonModule ,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
register:any=[]
constructor(private _route:Router){

}

registerform = new FormGroup({
  
  firstName: new FormControl('' , [Validators.minLength(3), Validators.maxLength(8), Validators.required ]),
  lastName:  new FormControl('' , [Validators.minLength(3), Validators.maxLength(8), Validators.required ]),
  email:     new FormControl('' , [ Validators.required ]),
  password:  new FormControl('' , [ Validators.minLength(8),Validators.maxLength(15),Validators.required ] ),


})
submit(data:any){
  console.log(this.registerform.value)
  if (data.valid) {
    this.getdata(); 
    this._route.navigate(['/login']); 
  }

}


getdata(){
  if (this.registerform.valid) {
    this.register =localStorage.getItem('data'!);
    this.register=this.registerform.value
    localStorage.setItem('data',JSON.stringify(this.register))
    this._route.navigate(["./login"])

    }else{
      alert('please entre')
    }
    
}

}
