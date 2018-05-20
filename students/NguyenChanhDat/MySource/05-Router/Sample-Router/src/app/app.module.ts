import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';

const routes: Routes =[
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'main',component:MainComponent, children:[
  {path:'role-list',component:RoleListComponent},
  {path:'role-detail',component:RoleDetailComponent}
]},
{path:'login', component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RoleListComponent,
    RoleDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
