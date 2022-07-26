import { PageRoute } from '../../core/modules/custom-router-dom/router.interface';
import Home from './childrens/Home';
import Posts from './Posts';
import Edit from './childrens/Edit';
import New from './childrens/New';
import PostDetail from './childrens/PostDetail';

const postRoutes: PageRoute[] = [
  {
    path: '/posts',
    element: Posts,
    children: [
      {
        path: '',
        element: Home,
      },
      {
        path: ':id',
        element: PostDetail,
      },
      {
        path: 'me',
        element: PostDetail,
      },
      {
        path: 'new',
        element: New,
        isProtected: true,
      },
      {
        path: ':id/edit',
        element: Edit,
        isProtected: true,
      },
    ],
  },
];

export default postRoutes;
