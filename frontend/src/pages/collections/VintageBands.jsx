import React, { useEffect, useContext } from "react";
import CollectionPage from "../../components/collections/CollectionPage";
import { ProductContext } from "../../context/ProductContext";

const VintageBands = () => {
  const {
    products,
    loading,
    pagination,
    currentPage,
    fetchProducts
  } = useContext(ProductContext);

  // Load engagement collection
  useEffect(() => {
    fetchProducts(1, "Vintage");
  }, []);

  return (
    <CollectionPage
      title="Vintage Bands"
      products={products || []}
      loading={loading}
      pagination={pagination}
      currentPage={currentPage}
      fetchProducts={(page) => fetchProducts(page, "Vintage")}
    />
  );
};

export default VintageBands;
