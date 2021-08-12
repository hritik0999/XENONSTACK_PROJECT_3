import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FormComponent } from './form/form.component';

const routes: Routes = 
[

  {

    path : 'first',
    component : FirstComponent

  },
  {

    path : 'second',
    component : SecondComponent 
 
  },
  {

    path : 'form',
    component : FormComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
