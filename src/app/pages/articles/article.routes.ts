import { PageRoute } from '../../core/modules/custom-router-dom/router.interface';
import SectionArticle from './partials/SectionArticle';

const articleRoutes: PageRoute[] = [
  {
    path: '/articles/:id',
    element: SectionArticle
  }
];

export default articleRoutes;
