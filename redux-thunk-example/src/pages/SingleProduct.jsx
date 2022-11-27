import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../store/action/productActions";

const DetailedProduct = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.selectedProduct);
  const { productId } = useParams();

  //get single product detail
  useEffect(() => {
    if (!product) {
      dispatch(fetchSingleProduct(productId));
    }
  }, []);

  return (
    <section>
      {product && (
        <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </>
      )}
    </section>
  );
};

export default DetailedProduct;
