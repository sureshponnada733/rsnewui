import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainnavbarComponent } from './mainnavbar.component';




@NgModule({
  declarations: [
    MainnavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MainnavbarComponent],
})
export class MainnavbarModule { }
