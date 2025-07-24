/* reference: https://www.wix.com/website-template/view/html/3455 */

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  { path: "/", element: <Homepage />, errorElement: <ErrorPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
