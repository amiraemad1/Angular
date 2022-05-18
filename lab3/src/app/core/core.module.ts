import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreHeaderComponent } from './core-header/core-header.component';
import { CoreSidebarComponent } from './core-sidebar/core-sidebar.component';
import { CoreFooterComponent } from './core-footer/core-footer.component';



@NgModule({
  declarations: [
    CoreHeaderComponent,
    CoreSidebarComponent,
    CoreFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoreFooterComponent,CoreHeaderComponent,CoreSidebarComponent
  ]

})
export class CoreModule { }
