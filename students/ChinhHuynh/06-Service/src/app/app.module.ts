import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { Route } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { UtilityService } from './services/utility.service';
import { ApiService } from './services/api.service';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent, children:[
    {path: 'role-list', component: RoleListComponent},
    {path: 'role-detail', component: RoleDetailComponent}
  ]},
  {path: 'login', component: LoginComponent},
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
    RouterModule.forRoot(routes)
  ],
  providers: [UtilityService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
