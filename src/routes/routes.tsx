import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/Home.tsx';
import { BlogReader } from '../pages/BlogReader.tsx';
import LoginPage from '../pages/Log-In.tsx';
import SignupPage from '../pages/Sign-Up.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
  }
]);