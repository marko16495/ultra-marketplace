import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {HeaderComponent} from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
