import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


const route=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },{
    path:"/contact",
    element:<Contact/>
  }
])
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<span className="loader"></span>}>
      <RouterProvider router={route}/>
    </Suspense>
  </StrictMode>
);
