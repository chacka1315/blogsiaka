import Home from './components/Home';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Article from './components/Article';
import Archive from './components/Archive';
import App from './App';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'articles/:slug', element: <Article /> },
      { path: 'archive', element: <Archive /> },
    ],
  },
];

export default routes;
