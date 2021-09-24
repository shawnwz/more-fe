import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowListComponent } from './show-list/show-list.component';
import {SharedModule} from '@app/shared/shared.module';
import {MatSliderModule} from '@angular/material/slider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ShowsRoutingModule} from '@app/shows/shows-routing/shows-routing.module';



@NgModule({
  declarations: [ShowListComponent],
  imports: [
    CommonModule, SharedModule, ShowsRoutingModule, MatSliderModule, MatPaginatorModule
  ]
})
export class ShowsModule { }
