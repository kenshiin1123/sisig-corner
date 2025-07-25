/* reference: https://www.wix.com/website-template/view/html/3455 */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

// Pages
import ErrorPage from "./pages/Error";
const Homepage = lazy(() => import("./pages/Homepage"));
const AboutPage = lazy(() => import("./pages/About"));
const MenuPage = lazy(() => import("./pages/Menu"));

// Components
import LoadingScreen from "./components/LoadingScreen";

// Layouts
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "menu",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <MenuPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
