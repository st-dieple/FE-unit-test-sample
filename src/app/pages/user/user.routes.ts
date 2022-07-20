import { PageRoute } from '../../core/modules/custom-router-dom/router.interface';
import User from './User';
import UserArticle from './User';

const userRoutes: PageRoute[] = [
  {
    path: '/users/:id',
    element: User
  }
];

export default userRoutes;
