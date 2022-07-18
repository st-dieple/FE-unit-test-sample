import homeRoutes from './home/home.routes';
import Page from './Page';
import { PageRoute } from '../core/modules/custom-router-dom/router.interface';
import articleRoutes from './articles/article.routes';
import writeRoutes from './write/write.routes';

const pageRoutes: PageRoute[] = [
  {
    path: '/',
    element: Page,
    children: [
      ...homeRoutes,
      ...articleRoutes,
      ...writeRoutes
    ]
  }
];

export default pageRoutes;
