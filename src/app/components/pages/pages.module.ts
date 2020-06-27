import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { ExpComponent } from './exp/exp.component';
import { TaskComponent } from './task/task.component';
import { PlanComponent } from './plan/plan.component';
import { GsModule } from '../gs.module';

@NgModule({
  declarations: [
    StartComponent,
    HomeComponent,
    ExpComponent,
    TaskComponent,
    PlanComponent,
  ],
  imports: [CommonModule, GsModule],
  exports: [
    StartComponent,
    HomeComponent,
    ExpComponent,
    TaskComponent,
    PlanComponent,
  ],
})
export class PagesModule {}
