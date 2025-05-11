import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsGallery from "./pages/ProductsGallery/ProductsGallery";
import Quotation from "../src/pages/InstantQuote/components/Quotation";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LandingPage />} />
      <Route path="gallery" element={<ProductsGallery />} />
      <Route path="quotation" element={<Quotation />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
