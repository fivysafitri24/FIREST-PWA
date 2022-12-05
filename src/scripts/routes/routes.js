import home from '../view/pages/home';
import favorite from '../view/pages/favorite';
import detail from '../view/pages/detail';

const routes = {
  '/': home,
  '/favorite': favorite,
  '/resto/:id': detail,
};

export default routes;
