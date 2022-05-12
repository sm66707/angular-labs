import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Student/student.component';
import { DepartmentComponent } from './department/department.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { PowerTooxPipe } from './power-toox.pipe';
import { StringConvertPipe } from './string-convert.pipe';
import { ArraySplicePipe } from './array-splice.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CalendarModule } from "primeng/calendar";
import {ChipsModule} from 'primeng/chips';
import {GMapModule} from 'primeng/gmap';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import {PasswordModule} from 'primeng/password';
import { ProductModule } from './product/product.module';
@NgModule({
  declarations: [
    AppComponent,StudentComponent, DepartmentComponent, HeaderComponent, FooterComponent, SidebarComponent, PowerTooxPipe, StringConvertPipe, ArraySplicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    CalendarModule,
    ChipsModule,
    GMapModule,
    FileUploadModule,
    HttpClientModule,
    MatSliderModule,
    PasswordModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
