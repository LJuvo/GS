import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex/flex.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [FlexComponent],
  imports: [CommonModule],
  exports: [FlexComponent],
})
export class GsModule {}
