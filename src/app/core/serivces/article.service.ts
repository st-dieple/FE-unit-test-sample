import { ApiService } from './api.service';
import { ENDPOINT } from './../../../config/endpoint';

export class ArticleService {
  http = new ApiService();

  // eslint-disable-next-line
  constructor() {}

  getPublicPosts(data: any) {
    return this.http.get([
      `${ENDPOINT.posts.public}?${
        data.tags ? `tags=${data.tags}` : null
      }&page=${data.page}&size=${data.size}`,
    ]);
  }

  getPosts(data: any) {
    return this.http.get([
      `${ENDPOINT.posts.index}?${data.tags ? `tags=${data.tags}` : null}&page=${
        data.page
      }&size=${data.size}`,
    ]);
  }

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
