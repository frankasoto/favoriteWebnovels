import { createBrowserRouter,  } from "react-router-dom";
import App from "../App";
import NovelPage from "../pages/NovelPage";

export const routes = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/novel/:id',
    element: <NovelPage />
  }

])