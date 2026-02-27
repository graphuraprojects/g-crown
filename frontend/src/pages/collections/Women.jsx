


import React, { useEffect, useContext } from "react";
import CollectionPage from "../../components/collections/CollectionPage";
import { ProductContext } from "../../context/ProductContext";

const Women = () => {
  const {
    products,
    loading,
    pagination,
    currentPage,
    fetchProducts,
  } = useContext(ProductContext);

  useEffect(() => {
<<<<<<< HEAD
    fetchProducts(1, undefined, "female");
=======
    fetchProducts(1, undefined, "Women");
>>>>>>> master
  }, []);

  return (
    <CollectionPage
      title="Women's Collection"
      products={products}
      loading={loading}
      pagination={pagination}
      currentPage={currentPage}
<<<<<<< HEAD
      fetchProducts={(page) => fetchProducts(page, undefined, "female")}
=======
      fetchProducts={(page) => fetchProducts(page, undefined, "Women")}
>>>>>>> master
    />
  );
};

export default Women;
