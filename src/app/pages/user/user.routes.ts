import { PageRoute } from '../../core/modules/custom-router-dom/router.interface';
import User from './User';

const userRoutes: PageRoute[] = [
  {
    path: '/profile/:id',
    element: User
  },
];

export default userRoutes;
