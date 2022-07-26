import { PageRoute } from '../../core/modules/custom-router-dom/router.interface';
import Home from '../home/Home';
import Articles from './Articles';
import Edit from './partials/Edit';
import New from './partials/New';

const postRoutes: PageRoute[] = [
  {
    path: '/posts',
    element: Home
  },
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
