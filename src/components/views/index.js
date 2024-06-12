import ErrorView from './error';
import HomeView from './home';
import NotFoundView from './not-found';

const Views = {
  Error: ErrorView,
  Home: HomeView,
  NotFound: NotFoundView
};

export default Views;
export { Views, ErrorView, HomeView, NotFoundView };
