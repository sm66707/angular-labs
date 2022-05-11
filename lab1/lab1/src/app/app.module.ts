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

@NgModule({
  declarations: [
    AppComponent,StudentComponent, DepartmentComponent, HeaderComponent, FooterComponent, SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
