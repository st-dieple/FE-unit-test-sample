import pageRoutes from './pages/page.routes';
import { PageRoute } from './core/modules/custom-router-dom/router.interface';

const appRoutes: PageRoute[] = [
  ...pageRoutes
];

export default appRoutes;
