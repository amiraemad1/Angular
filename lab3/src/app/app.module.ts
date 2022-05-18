import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { CoreModule } from './core/core.module';
import { PowerToxPipe } from './power-tox.pipe';
import { StringConvertPipe } from './string-convert.pipe';
import { ArraySplicePipe } from './array-splice.pipe';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {RatingModule} from 'primeng/rating';
import {CalendarModule} from 'primeng/calendar';
import {ChipsModule} from 'primeng/chips';
import {GMapModule} from 'primeng/gmap';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';




@NgModule({
  declarations: [
    AppComponent,StudentComponent, DepartmentComponent, 
    PowerToxPipe, StringConvertPipe, ArraySplicePipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CoreModule,
    SharedModule,
    ProductModule,
    BrowserAnimationsModule,
    PasswordModule,
    RatingModule,
    CalendarModule,
    ChipsModule,
    GMapModule,
    FileUploadModule,
    HttpClientModule,
    MatSliderModule


  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
