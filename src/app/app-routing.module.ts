import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPiecesComponent } from './components/add-pieces/add-pieces.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ShowDataComponent } from './components/show-data/show-data.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"show-data",component:ShowDataComponent},
  {path:"add-pieces",component:AddPiecesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
