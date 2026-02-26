import React, { createContext, useContext, useState, useEffect } from "react";
import { axiosPostService, axiosPutService, axiosGetService } from "../services/axios";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("g-crown-favorites");
    if (!saved) return [];
    const ids = JSON.parse(saved);
    return ids.map(id => ({ _id: id }));
  });

  useEffect(() => {
    localStorage.setItem(
      "g-crown-favorites",
      JSON.stringify(favorites.map(f => f._id))
    );

  }, [favorites]);

  useEffect(() => {
    fetchWishlist();
  }, []);

const fetchWishlist = async () => {
  try {
    const apiResponse = await axiosGetService(
      "/customer/wishlist/allitem"
    );

    if (!apiResponse.ok) {
      console.log(apiResponse.data.message || "Please Login");
      return;
    }

    const list = apiResponse.data.data?.wishlist || [];

    const formatted = list.map(item => {

      const product = item.product;

      const variant = product?.variants?.find(
        v => String(v.purity) === String(item.purity)
      );

      return {
        _id: product?._id,
        slug: product?.slug,
        name: product?.name,
        category: product?.category,
        productImage: product?.productImage,
        stockStatus: product?.stockStatus,

        price: {
          mrp: variant?.price || 0,
          sale: variant?.sale || 0,
          currency: product?.price?.currency || "INR"
        },

        availableStock: variant?.quantity || 0,

        quantity: item.quantity,
        purity: item.purity
      };
    });

    setFavorites(formatted);

  } catch (err) {
    console.log("Wishlist load error:", err);
  }
};

const toggleFavorite = async (product, productPurity) => {

  const productId = String(product._id || product.id);
  const purity = String(productPurity);

  const exists = favorites.some(
    item =>
      String(item._id) === productId &&
      String(item.purity) === purity
  );

  if (!exists) {

    setFavorites(prev => [
      ...prev,
      { ...product, _id: productId, purity }
    ]);

    const apiResponse = await axiosPostService(
      "/customer/wishlist/add",
      { productId, purity }
    );

    if (!apiResponse?.ok) {
      setFavorites(prev =>
        prev.filter(
          item =>
            !(String(item._id) === productId &&
              String(item.purity) === purity)
        )
      );
    }

  } else {

    setFavorites(prev =>
      prev.filter(
        item =>
          !(String(item._id) === productId &&
            String(item.purity) === purity)
      )
    );

    const apiResponse = await axiosPutService(
      "/customer/wishlist/remove",
      { productId, purity }
    );

    if (!apiResponse?.ok) {
      setFavorites(prev => [
        ...prev,
        { ...product, _id: productId, purity }
      ]);
    }
  }
};

  const removeFromFavorites = async (productId) => {
    setFavorites(prev => prev.filter(item => item._id !== productId));

    const apiResponse = await axiosPutService("/customer/wishlist/remove", {
      productId
    });

    if (!apiResponse.ok) {
      alert(apiResponse.data.message || "Failed to remove item");
    }
  };

  const clearFavorites = async () => {
    setFavorites([]);

    const apiResponse = await axiosPutService("/customer/wishlist/removeall");

    if (!apiResponse.ok) {
      console.log("Failed to clear wishlist");
    }
  };

  const isFavorite = (productId) => {
    return favorites.some(item => item._id === productId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        clearFavorites,
        removeFromFavorites,
        fetchWishlist,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
