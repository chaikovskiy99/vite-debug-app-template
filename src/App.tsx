import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./root-layout.tsx";
import Login from "./login.tsx";
import Dashboard from "./dashboard.tsx";
import Signup from "./signup.tsx";
import postsLoader from "./api/post-loader.ts";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        loader: postsLoader,
        element: <Dashboard />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
