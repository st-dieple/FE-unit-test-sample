import { ApiService } from './api.service';
import { ENDPOINT } from './../../../config/endpoint';

interface IBookmarkProps {
  postId: string;
}

export class BookmarkService {
  http = new ApiService();

  // eslint-disable-next-line
  constructor() {}

  addBookmark(data: IBookmarkProps) {
    return this.http.post([ENDPOINT.bookmarks.index], data);
  }
}
