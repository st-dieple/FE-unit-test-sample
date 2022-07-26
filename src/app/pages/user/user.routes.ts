import { PageRoute } from '../../core/modules/custom-router-dom/router.interface';
import UserUpdate from './partials/UserUpdate';
import User from './User';

const userRoutes: PageRoute[] = [
  {
    path: '/profile/:id',
    element: User
  },
  {
    path: '/profile/update',
    element: UserUpdate,
    isProtected: true
  }
];

export default userRoutes;
