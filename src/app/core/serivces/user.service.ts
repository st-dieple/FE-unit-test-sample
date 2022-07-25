import { ENDPOINT } from '../../../config';
import { ApiService } from './api.service';

export class UserService {
  http = new ApiService();

  // eslint-disable-next-line
  constructor () {}

  handleUserFollow(data: any) {
    return this.http.post([ENDPOINT.friends.follow], data)
  }

};
