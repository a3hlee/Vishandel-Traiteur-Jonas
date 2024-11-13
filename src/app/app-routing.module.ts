import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AssortmentComponent } from './assortment/assortment.component';
import { HorecaComponent } from './horeca/horeca.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/startpagina', pathMatch: 'full' },
  { path: 'startpagina', component: HomeComponent },
  { path: '', redirectTo: '/assortiment', pathMatch: 'full' },
  { path: 'assortiment', component: AssortmentComponent },
  { path: '', redirectTo: '/horeca', pathMatch: 'full' },
  { path: 'horeca', component: HorecaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
