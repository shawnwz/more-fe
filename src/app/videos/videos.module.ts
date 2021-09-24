import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { SharedModule} from '../shared/shared.module';
import { VideosRoutingModule} from './videos-routing/videos-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [VideoListComponent],
    imports: [
        CommonModule, SharedModule, VideosRoutingModule, MatSliderModule, MatPaginatorModule
    ]
})
export class VideosModule { }
