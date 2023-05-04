import { ReactNode, useState } from "react";
import { ShoppingCartContext } from "./SCContext";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      }

      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      }

      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }

        return item;
      });
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
