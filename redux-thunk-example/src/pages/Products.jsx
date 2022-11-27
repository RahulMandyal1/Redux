import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../store/action/productActions";
import { Link } from "react-router-dom";

const Products = () => {
  const data = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  //get all the product once we get to products page
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <section>
      {data &&
        data.products.map((product, index) => {
          return (
            <div key={index}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </div>
          );
        })}
    </section>
  );
};

export default Products;
