import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetreeComponent } from './pagetree/pagetree.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';


const routes: Routes = [
    
  { path: 'user' , loadChildren: () => import('./user/user.module').then(m =>m.UserModule)},

  {
    path: '', component: HomeComponent, children:
    [
      {path: 'one', component: PageoneComponent},
      {path: 'two', component: PagetwoComponent},
      {path: 'three', component: PagetreeComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
