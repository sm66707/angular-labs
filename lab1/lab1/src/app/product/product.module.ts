import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StringConvertPipe } from './string-convert.pipe';




@NgModule({
  declarations: [
    ProductComponent,StringConvertPipe
  ],
  imports: [
    CommonModule, 
    SharedModule,
    FormsModule,
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
