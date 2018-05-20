import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { LoginComponent } from './login/login.component';
import { UtilityService } from './services/utility.service';
import { ApiService } from './services/api.service';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, children: [
      { path: 'role-list', component: RoleListComponent },
      { path: 'role-detail', component: RoleDetailComponent },
    ]
  },
  { path: 'login', component: LoginComponent }
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
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UtilityService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
