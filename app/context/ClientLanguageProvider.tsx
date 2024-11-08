// app/context/ClientLanguageProvider.tsx
"use client";

import { LanguageProvider } from "./LanguageContext"; // Importa il contesto
import { useEffect, useState } from "react";

// Questo è un wrapper client-side che avvolge la tua app in LanguageProvider
export default function ClientLanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  // Impostiamo il componente come client-side solo dopo che il rendering è stato eseguito
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Evitiamo di renderizzare nulla sul server
  }

  return <LanguageProvider>{children}</LanguageProvider>;
}
