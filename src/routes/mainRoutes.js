import { lazy } from "react";
const AuthPage = lazy(() =>
  import("../pages/AuthPage" /* webpackChunkName:"HomePage" */)
);
const RequestPage = lazy(() =>
  import("../pages/RequestPage" /* webpackChunkName:"RequestPage" */)
);
const InputPage = lazy(() =>
  import("../pages/InputPage.js" /* webpackChunkName:"InputPage" */)
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage" /* webpackChunkName:"NotFoundPage" */)
);
export const mainRoutes = [
  {
    // name: "Authorization",
    path: "/",
    component: <AuthPage />,
  },
  {
    // name: "Request",
    name: "Request",
    path: "/Request",
    component: <RequestPage />,
  },
  {
    // name: "Input",

    name: "Input",
    path: "/input",
    component: <InputPage />,
  },
  {
    // name: "NotFoundPage",

    name: "NotFoundPage",
    path: "*",
    component: <NotFoundPage />,
  },
];
