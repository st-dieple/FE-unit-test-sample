import { ENDPOINT } from '../../../config';
import { ApiService } from './api.service';

export class UserService {
  http = new ApiService();

  // eslint-disable-next-line
  constructor () {}

  handleUserFollow(data: any) {
    return this.http.post([ENDPOINT.friends.follow], data);
  };

  handleChangePassword(data: any) {
    return this.http.put([`${ENDPOINT.users.index}/change-password`], data);
  };  

  updateProfileUser(data: any) {
    return this.http.put([`${ENDPOINT.users.index}/me`], data)
  };
};
