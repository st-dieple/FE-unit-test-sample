import { PageRoute } from '../../core/modules/custom-router-dom/router.interface';
import Edit from '../edit/Edit';
import Write from '../write/Write';
import Articles from './Articles';

const postRoutes: PageRoute[] = [
  {
    path: '/posts/:id',
    element: Articles
  },
  {
    path: 'posts/write',
    element: Write
  },
  {
    path: 'posts/edit/:id',
    element: Edit
  }
];

export default postRoutes;
