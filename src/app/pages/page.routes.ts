import Page from './Page';
import { PageRoute } from '../core/modules/custom-router-dom/router.interface';
import userRoutes from './user/user.routes';
import postRoutes from './posts/posts.routes';

const pageRoutes: PageRoute[] = [
  {
    path: '/',
    element: Page,
    children: [
      {
        path: '',
        redirect: 'posts',
      },
      ...postRoutes,
      ...userRoutes
    ],
  },
];

export default pageRoutes;
