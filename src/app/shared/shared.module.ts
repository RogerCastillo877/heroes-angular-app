import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';


@NgModule({
  declarations: [
    Error404PageComponent,
  ],
  imports: [
    SharedRoutingModule
  ],
  exports: [
    Error404PageComponent
  ]
})
export class SharedModule { }
