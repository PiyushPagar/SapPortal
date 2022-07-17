import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [{path:"Sign-in",component:LoginComponent},
                        {path:"Register",component:RegisterComponent},
                        {path:"Login",component:StudentComponent},
                        {path:"home",component:HomeComponent},
                        {path:"",redirectTo:"",pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
