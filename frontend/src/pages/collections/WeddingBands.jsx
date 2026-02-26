import React, { useEffect, useContext } from "react";
import CollectionPage from "../../components/collections/CollectionPage";
import { ProductContext } from "../../context/ProductContext";

const WeddingBands = () => {
  const {
    products,
    loading,
    pagination,
    currentPage,
    fetchProducts
  } = useContext(ProductContext);

  // Load engagement collection
  useEffect(() => {
    fetchProducts(1, "Wedding");
  }, []);

  return (
    <CollectionPage
      title="Wedding Bands"
      products={products || []}
      loading={loading}
      pagination={pagination}
      currentPage={currentPage}
      fetchProducts={(page) => fetchProducts(page, "Wedding")}
    />
  );
};

export default WeddingBands;