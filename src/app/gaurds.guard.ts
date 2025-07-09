import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProductsService } from './service/products.service';

export const gaurdsGuard: CanActivateFn = (route, state) => {

  let service=inject(ProductsService);
  let router=inject(Router)
  let islogin;

  service.islogin.subscribe((data:boolean)=>{
     islogin=data;
     console.log(data)

  })
  if (islogin === false) {
    router.navigate(["./login"]);
    return false;
  }
  return true;
};
