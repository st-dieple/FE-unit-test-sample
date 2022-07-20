import { PageRoute } from '../../core/modules/custom-router-dom/router.interface';
import UserArticle from './UserArticles';

const userRoutes: PageRoute[] = [
  {
    path: '/users/:id/posts',
    element: UserArticle
  }
];

export default userRoutes;
