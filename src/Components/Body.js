import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SignIn from "./SignIn";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <SignIn /> },
    { path: "/Browse", element: <Browse /> },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
