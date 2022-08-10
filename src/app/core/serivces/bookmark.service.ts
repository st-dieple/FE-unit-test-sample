import { ApiService } from './api.service';
import { ENDPOINT } from './../../../config/endpoint';

export class BookmarkService {
  http = new ApiService();  

  // eslint-disable-next-line
  constructor () {}

  addBookmark(data: any) {
    return this.http.post([ENDPOINT.bookmarks.index], data);
  }  
};
