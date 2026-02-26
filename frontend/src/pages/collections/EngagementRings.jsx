import React, { useEffect, useContext } from "react";
import CollectionPage from "../../components/collections/CollectionPage";
import { ProductContext } from "../../context/ProductContext";

const EngagementRings = () => {
  const {
    products,
    loading,
    pagination,
    currentPage,
    fetchProducts,
  } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts(1, "Engagement Ring");
  }, []);

  return (
    <CollectionPage
      title="Engagement Rings"
      products={products}
      loading={loading}
      pagination={pagination}
      currentPage={currentPage}
      fetchProducts={fetchProducts}
    />
  );
};

export default EngagementRings;
