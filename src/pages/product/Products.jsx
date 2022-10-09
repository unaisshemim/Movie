import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import MediaCard from "../../components/productsList/ProductList";
import { getProducts } from "../../redux/getApi";
import "./products.scss";
function Products() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.product.currentProduct);
  const search = useSelector((state) => state.product.searchProduct);

  const [fetch, setFetch] = useState(false);
  useEffect(()=>{
    if(search===""){
      setFetch(false)
    }
  },[search])

  const filteredProduct = movies.filter((value) => {
    return value.title.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    getProducts(dispatch);
    return () => {
      getProducts(dispatch);
    };
  }, [dispatch]);

  return (
    <div className="products">
      <Navbar />
      {fetch?movies:filteredProduct?.map((value, key) => {
        return <MediaCard key={key} value={value} />;
      })}
    </div>
  );
}

export default Products;
