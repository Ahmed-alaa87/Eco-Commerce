import { CheckoutComponent } from './../../pages/checkout/checkout.component';
import { Component, OnInit } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , CommonModule ,RouterLink, ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  login: any;

  constructor(private _service:ProductsService , private _route:Router){}

  ngOnInit(): void {
    this._service.islogin.subscribe((res:boolean)=>{
      this.login=res
      console.log(this.login)
     })
  }
   
  
  logout() {
    this._service.islogin.next(false);
    this._route.navigate(['/login']);
  }

  // Checkout(){
  //   this._route.navigate(['/checkout']);

  // }
  

 
}
