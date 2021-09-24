import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { VideoListComponent} from '../video-list/video-list.component';
import { LayoutComponent} from '../../shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: VideoListComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class VideosRoutingModule { }
