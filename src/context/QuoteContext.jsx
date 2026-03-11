import { createContext, useContext, useState, useEffect } from "react";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {

  // ⭐ Load from localStorage

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("quoteItems");
    return saved ? JSON.parse(saved) : [];
  });

  // ⭐ Save to localStorage

  useEffect(() => {
    localStorage.setItem("quoteItems", JSON.stringify(items));
  }, [items]);

  const addToQuote = (product) => {
    setItems(prev => [...prev, product]);
  };

  const removeFromQuote = (id) => {
    setItems(prev => prev.filter(i => i._id !== id));
  };

  const clearQuote = () => setItems([]);

  return (
    <QuoteContext.Provider
      value={{ items, addToQuote, removeFromQuote, clearQuote }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => useContext(QuoteContext);