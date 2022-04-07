import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './paginas/login-page/login-page.component';
import { RegisterPageComponent } from './paginas/register-page/register-page.component';
import { FramePaginaComponent } from './paginas/frame.pagina';

const routes: Routes = [
  {
    path: '',
    component: FramePaginaComponent,
    children:[]
  },

  {path: 'principal', component:NavbarComponent },
  {path: 'leitor/estante/livro', component: RegisterPageComponent},
  {path: 'login/estante/livro', component:LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
