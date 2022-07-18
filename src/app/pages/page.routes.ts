import homeRoutes from './home/home.routes';
import Page from './Page';
import { PageRoute } from '../core/modules/custom-router-dom/router.interface';
import writeRoutes from './write/write.routes';
import articleRoutes from './articles/article.routes';

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
