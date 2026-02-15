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
      const apiResponse = await axiosGetService("/customer/wishlist/allitem");

      if (!apiResponse.ok) {
        console.log(apiResponse.data.message || "Please Login");
        return
      }

      const list = apiResponse.data.data[0]?.products || [];

      const formatted = list.map(p => ({
        _id: p._id,
        slug: p.slug,
        name: p.name,
        price: p.price,
        stockStatus: p.stockStatus,
        productImage: p.productImage,   // ⭐ important for images
        category: p.category
      }));


      setFavorites(formatted);
      localStorage.setItem(
        "g-crown-favorites",
        JSON.stringify(formatted.map(x => x._id))
      );
    } catch (err) {
      console.log("Wishlist load error:", err);
    }
  };

  const toggleFavorite = async (product) => {
    const productId = product._id || product.id;

    const exists = favorites.some(item => item._id === productId);

    if (!exists) {
      // Optimistic Add
      setFavorites(prev => [...prev, { ...product, _id: productId }]);

      const apiResponse = await axiosPostService("/customer/wishlist/add", {
        productId
      });

      if (!apiResponse.ok) {
        setFavorites(prev => prev.filter(item => item._id !== productId));
        alert(apiResponse.data.message || "Failed to add to wishlist");
      }
    } else {
      // Optimistic Remove
      setFavorites(prev => prev.filter(item => item._id !== productId));

      const apiResponse = await axiosPutService("/customer/wishlist/remove", {
        productId
      });

      if (!apiResponse.ok) {
        alert(apiResponse.data.message || "Failed to remove item");
        setFavorites(prev => [...prev, product]);
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
