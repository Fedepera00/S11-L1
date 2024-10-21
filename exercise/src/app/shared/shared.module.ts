import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [NavbarComponent, AuthComponent],
  imports: [CommonModule],
})
export class SharedModule {}
