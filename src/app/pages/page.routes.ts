import homeRoutes from './home/home.routes';
import Page from './Page';
import { PageRoute } from '../core/modules/custom-router-dom/router.interface';
import articleRoutes from './articles/article.routes';
import userRoutes from './user/user.routes';

const pageRoutes: PageRoute[] = [
  {
    path: '/',
    element: Page,
    children: [
      ...homeRoutes,
<<<<<<< HEAD
      ...articleRoutes
=======
      ...articleRoutes,
      ...userRoutes
>>>>>>> 841b2aeb3b0f70459e91b534a236c0aa1653283d
    ]
  }
];

export default pageRoutes;
