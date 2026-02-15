import { createContext, useState, useCallback } from "react";
import { axiosGetService } from "../services/axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const LIMIT = 9;

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCollection, setCurrentCollection] = useState("");
  const [currentGender, setCurrentGender] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(
    async (page = 1, collectionName = undefined, gender = undefined) => {
      try {
        setLoading(true);

        let activeCollection = currentCollection;
        let activeGender = currentGender;


        if (collectionName !== undefined) {
          activeCollection = collectionName;
          setCurrentCollection(collectionName);
          setCurrentGender("");   
          activeGender = "";
          page = 1;
        }

        if (gender !== undefined) {
          activeGender = gender;
          setCurrentGender(gender);
          setCurrentCollection("");  
          activeCollection = "";
          page = 1;
        }

        let url = `/customer/product/all?page=${page}&limit=${LIMIT}`;

        if (activeCollection) {
          url += `&collectionName=${activeCollection}`;
        }

        if (activeGender) {
          url += `&productFor=${activeGender}`;
        }

        const res = await axiosGetService(url);

        if (res?.ok && res?.data?.data) {
          const { products, pagination } = res.data.data;

          setProducts(products || []);
          setPagination(pagination || null);
          setCurrentPage(page);
        }

      } catch (error) {
        console.error("Product fetch error:", error);
      } finally {
        setLoading(false);
      }
    },
    [currentCollection, currentGender]
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        pagination,
        currentPage,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
