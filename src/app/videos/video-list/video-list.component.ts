import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { VideosService } from '@core/services/videos/videos.service';
import { SubSink } from 'subsink';
import { Video } from '@core/model/video';
import { Observable } from 'rxjs';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  gridColumns = 5;
  pageIndex = 1;
  pageSize = 10;
  itemCount = 1000;
  dataSource = new MatTableDataSource<Video>();
  private subSink = new SubSink();

  constructor(
      public videosService: VideosService,
      private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
  }

  private getVideos() {
    console.log('get videos' + ' ' + this.pageIndex + ' ' + this.pageSize);
    this.subSink.add(this.videosService.getVideos(this.pageIndex, this.pageSize).subscribe((res) => {
      console.log(res);
      this.dataSource.data = res.list;
      this.itemCount = res.count;
    }));
    this.paginator.pageIndex = this.pageIndex;
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  ngAfterViewInit(): void {
    console.log('after view init');
    //this.dataSource.paginator = this.paginator;
  }

  /**
   * Handler for pagination change event
   * @param event Page change event
   */
  public onPaginateChange(event: PageEvent) {
    console.log('paginate change');
    console.log(event.pageIndex);
    console.log(event.pageSize);
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    // this.itemCount = 2222;
    this.getVideos();
  }

}
