"use client";
import { createContext, useContext, useState } from "react";

interface LanguageContextType {
  locale: string;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocale] = useState("it");

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "it" ? "en" : "it"));
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
