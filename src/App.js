
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './componannts/Blog/Blog';
import Main from './componannts/Main/Main';
import Quiz from './componannts/Quiz/Quiz';
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
          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '/quiz',
      loader: () => fetch('question.json'),
      element: <Quiz></Quiz>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div >
  );
}

export default App;
