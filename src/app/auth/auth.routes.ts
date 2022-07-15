import { PageRoute } from '../core/modules/custom-router-dom/router.interface';
import Auth from './Auth';
import Login from './childrens/Login';
import Register from './childrens/Register';

const authRoutes: PageRoute[] = [
  {
    path: '/auth',
    element: Auth,
    children: [
      { 
        path: 'login', 
        element: Login 
      },
      {       
        path: 'register', 
        element: Register 
      },
    ],
  },
];

export default authRoutes;
