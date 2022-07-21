import { ApiService } from './api.service';
import { ENDPOINT } from './../../../config/endpoint';

export class ArticleService {
  http = new ApiService();

  constructor() {}

  createArticle(data: any) {
    return this.http.post([ENDPOINT.posts.index], data);
  }

  updateArticle(id: string, data: any) {
    return this.http.put([`${ENDPOINT.posts.index}/${id}`], data);
  }

  deleteArticle(id: string) {
    return this.http.delete([`${ENDPOINT.posts.index}/${id}`]);
  }
}
