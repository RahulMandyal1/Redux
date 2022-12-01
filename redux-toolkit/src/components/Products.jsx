import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import ReactLoading from "react-loading";
import { addToCart } from "../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const { data, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    toast.success(`Product is added to cart`);
  };

  //if there is an error
  if (status === STATUSES.ERROR) {
    return <h2>An error occured</h2>;
  }

  //loading data
  if (status === STATUSES.LOADING) {
    return (
      <div className="loader-container">
        <ReactLoading color="#774DBC" />
      </div>
    );
  }
  return (
    <div className="productsWrapper">
      {data?.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Products;
