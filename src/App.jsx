/* reference: https://www.wix.com/website-template/view/html/3455 */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

// Pages
const Homepage = lazy(() => import("./pages/Homepage"));
import ErrorPage from "./pages/Error";

// Components
import LoadingScreen from "./components/LoadingScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Homepage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
