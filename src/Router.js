import { createBrowserRouter } from "react-router-dom";

// All pages
import App from "./pages/App";
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <Home />
  },
]);

export default router;