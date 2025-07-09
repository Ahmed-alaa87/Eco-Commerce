import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { gaurdsGuard } from './gaurds.guard';

export const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   {path:'home',component:HomeComponent,title:'home', canActivate:[gaurdsGuard]},
   {path:'shop',component:ShopComponent,title:'shop' , canActivate:[gaurdsGuard]},
   {path:'contact',component:ContactComponent,title:'contact' , canActivate:[gaurdsGuard]},
   {path:'blog',component:BlogComponent,title:'blog' , canActivate:[gaurdsGuard]},
   {path:'about',component:AboutComponent,title:'about' , canActivate:[gaurdsGuard]},
   {path:'register',component:RegisterComponent,title:'register'},
   {path:'login',component:LoginComponent,title:'login'},
   { path: 'checkout', component: CheckoutComponent , canActivate:[gaurdsGuard] }
];
