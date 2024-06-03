import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import FavoritePage from "./pages/FavoritePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="ProductPage/:id" element={<ProductPage />} />
          <Route path="CartPage" element={<CartPage />} />
          <Route path="/FavoritePage" element={<FavoritePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
