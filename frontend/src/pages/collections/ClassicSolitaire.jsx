import React, { useEffect, useContext } from "react";
import CollectionPage from "../../components/collections/CollectionPage";
import { ProductContext } from "../../context/ProductContext";

const ClassicSolitaire = () => {
  const {
    products,
    loading,
    pagination,
    currentPage,
    fetchProducts
  } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts(1, "Classic");
  }, []);

  return (
    <CollectionPage
      title="Classic Solitaire"
      products={products || []}
      loading={loading}
      pagination={pagination}
      currentPage={currentPage}
      fetchProducts={fetchProducts}
    />
  );
};

export default ClassicSolitaire;
