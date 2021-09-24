import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '@app/shared/layout/layout.component';
import {ShowListComponent} from '@app/shows/show-list/show-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ShowListComponent
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
export class ShowsRoutingModule { }
