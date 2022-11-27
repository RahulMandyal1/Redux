import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Allproducts</Link>
        <Link to="/products/:productId">Single Product</Link>
      </nav>
    </header>
  );
};

export default Header;
