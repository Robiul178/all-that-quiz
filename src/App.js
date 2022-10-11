
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './componannts/Blog/Blog';
import Css from './componannts/Css/Css';
import Git from './componannts/Git/Git';
import JavaScript from './componannts/JavaScript/JavaScript';
import Main from './componannts/Main/Main';
import Reacct from './componannts/React/Reacct';
import Statistic from './componannts/Statistic/Statistic';
import Topic from './componannts/Topic/Topic';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('homePageData.json'),
          element: <Topic></Topic>
        },
        {
          path: '/statistic',
          loader: () => fetch('homePageData.json'),
          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '/react',
      loader: () => fetch('react.json'),
      element: <Reacct></Reacct>
    },
    {
      path: '/javascript',
      loader: () => fetch('javascript.json'),
      element: <JavaScript></JavaScript>
    },
    {
      path: '/css',
      loader: () => fetch('css.json'),
      element: <Css></Css>
    },
    {
      path: '/git',
      loader: () => fetch('git.json'),
      element: <Git></Git>
    },
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div >
  );
}

export default App;
