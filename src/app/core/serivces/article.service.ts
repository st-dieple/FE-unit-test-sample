import { ApiService } from './api.service';
import { ENDPOINT } from './../../../config/endpoint';

export class ArticleService {
  http = new ApiService();  

  // eslint-disable-next-line
  constructor () {}
  
  createArticle(data: any) {
    return this.http.post([ENDPOINT.posts.index], data);
  }

  updateArticle(id: string, data: any) {
    return this.http.put([`${ENDPOINT.posts.index}/${id}`], data);
  }
};
