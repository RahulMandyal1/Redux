import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import DetailedProduct from "./pages/SingleProduct";
import Header from "./components/Header";

const App =()=> {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:productId"
          exact
          element={<DetailedProduct />}
        />
      </Routes>
    </div>
  );
}


export default App