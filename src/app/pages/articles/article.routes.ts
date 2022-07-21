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
    path: 'posts/write',
    element: Edit
  },
  {
    path: 'posts/edit/:id',
    element: New
  }
];

export default postRoutes;
