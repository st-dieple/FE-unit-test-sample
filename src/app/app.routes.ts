import pageRoutes from './pages/page.routes';
import authRoutes from './auth/auth.routes';
import { PageRoute } from './core/modules/custom-router-dom/router.interface';

const appRoutes: PageRoute[] = [
  ...pageRoutes,
  ...authRoutes
];

export default appRoutes;
