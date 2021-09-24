import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { VideoList } from '@core/model/video';
import { map } from 'rxjs/operators';

const videosEndpoint = environment.videoService.url;

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private httpClient: HttpClient ) { }

  public getVideos(pageIndex: number, pageSize: number): Observable<VideoList> {
    console.log(pageIndex);
    const url = videosEndpoint + '/?page=' + pageIndex + '&size=' + pageSize;
    return this.httpClient
        .get(url, {observe: 'response'})
        .pipe(map((res: any) => ({list: res.body, count: res.headers.get('x-pagination-total-entries')})));
  }
}
