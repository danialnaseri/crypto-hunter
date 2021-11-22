import React, { useState, useEffect, createContext, useContext } from "react";

const Crypto = createContext();

function CryptoContext({ children }) {
  const [currency, setCurrency] = useState("SEK");
  const [symbol, setSymbol] = useState("kr");

  useEffect(() => {
    if (currency === "SEK") {
      setSymbol("SEK");
    } else if (currency === "USD") {
      setSymbol("$");
    }
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
}

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
