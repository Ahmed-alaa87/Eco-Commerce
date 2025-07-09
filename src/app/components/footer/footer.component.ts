import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  login:any;
constructor(private service:ProductsService){

  this.service.islogin.subscribe((res:boolean)=>{
this.login=res
  })
}
}
