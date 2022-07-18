import { PageRoute } from '../../core/modules/custom-router-dom/router.interface';
import Articles from './Articles';

const postRoutes: PageRoute[] = [
  {
    path: '/posts/:id',
    element: Articles
  }
];

export default postRoutes;
