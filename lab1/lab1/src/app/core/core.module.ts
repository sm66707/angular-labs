import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Footer2Component } from './footer2/footer2.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    Footer2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,FooterComponent,Footer2Component]
})
export class CoreModule { }
