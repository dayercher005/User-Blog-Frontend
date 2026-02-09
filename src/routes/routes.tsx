import { createBrowserRouter } from 'react-router';
import Dashboard from '../pages/Dashboard.tsx';
import { BlogReader } from '../pages/BlogReader.tsx';
import LoginPage from '../pages/Log-In.tsx';
import SignupPage from '../pages/Sign-Up.tsx';
import { Homepage } from '../pages/Homepage.tsx';
import { NotFound } from '@/pages/NotFound.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/:blogID",
    element: <BlogReader />
  },
  {
    path: "/log-in",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignupPage />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);