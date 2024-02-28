import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Gemini from "./pages/Gemini";
import Catelogue from "./pages/Catalogue";
import Three from "./pages/ThreeJS";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Catelogue />}></Route>
      <Route path="/gemini" element={<Gemini />}></Route>
      <Route path="/three" element={<Three />}></Route>
    </>
  )
);
