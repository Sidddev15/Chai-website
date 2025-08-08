import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const buyNow = (product) => {
    setSelectedProduct(product);
  };

  return (
    <CartContext.Provider value={{ selectedProduct, buyNow }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
