import { PageRoute } from '../../core/modules/custom-router-dom/router.interface';
import UpdatePassword from './partials/UpdatePassword';
import User from './User';

const userRoutes: PageRoute[] = [
  {
    path: '/profile/:id',
    element: User
  },
  {
    path: '/profile/change-password',
    element: UpdatePassword
  },
];

export default userRoutes;
