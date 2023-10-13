import { Fragment } from "react";
import { CreateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";

import { Root } from "./pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/">
        <Route index element={<Root />} />
      </Route>
    </Fragment>
  )
);

const App = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default App;
