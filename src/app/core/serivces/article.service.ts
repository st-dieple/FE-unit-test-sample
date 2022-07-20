import axios from 'axios';
import { ApiService } from './api.service';
import { ENDPOINT } from './../../../config/endpoint';

export class ArticleService {
  http = new ApiService();  

  constructor () {}

  createArticle(data: any) {
    return this.http.post([ENDPOINT.posts.index], data);
  }
};
