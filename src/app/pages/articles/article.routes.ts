import { PageRoute } from '../../core/modules/custom-router-dom/router.interface';
import New from './partials/New';
import Edit from './partials/Edit';
import Articles from './Articles';

const postRoutes: PageRoute[] = [
  {
    path: '/posts/:id',
    element: Articles
  },
  {
    path: 'posts/new',
    element: New,
    isProtected: true
  },
  {
    path: 'posts/:id/edit',
    element: Edit
  }
];

export default postRoutes;
