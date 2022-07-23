import { PageRoute } from '../../core/modules/custom-router-dom/router.interface';
import Write from './partials/Write';
import Edit from './partials/Edit';
import Articles from './Articles';

const postRoutes: PageRoute[] = [
  {
    path: '/posts/:id',
    element: Articles
  },
  {
    path: 'posts/write',
    element: Write,
    isProtected: true
  },
  {
    path: 'posts/:id/edit',
    element: Edit
  }
];

export default postRoutes;
