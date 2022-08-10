import { ApiService } from './api.service';
import { ENDPOINT } from '../../../config/endpoint';

export class PostService {
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

  getPostsRecommend(data: any) {
    return this.http.get([
      `${ENDPOINT.posts.recommend}?page=${data.page}&size=${data.size}`,
    ]);
  }

  getPostsReycleBin() {
    return this.http.get([`${ENDPOINT.posts.recyclebin}`]);
  }

  getPostsById(data: any) {
    return this.http.get([`${ENDPOINT.posts.index}/${data.id}`]);
  }

  likePostsDetail(id: number) {
    return this.http.put([`${ENDPOINT.posts.index}/${id}/likes`]);
  }

  getCommentPostsDetail(id: string) {
    return this.http.get([`${ENDPOINT.posts.index}/${id}/comments`]);
  }

  postCommentPostsDetail(id: string, data: any) {
    return this.http.post([`${ENDPOINT.posts.index}/${id}/comments`], data);
  }

  createArticle(data: any) {
    return this.http.post([ENDPOINT.posts.index], data);
  }

  updateArticle(id: string, data: any) {
    return this.http.put([`${ENDPOINT.posts.index}/${id}`], data);
  }

  deletePostService(id: string) {
    return this.http.delete([`${ENDPOINT.posts.index}/${id}`]);
  }
}
