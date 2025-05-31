import { createContext, useContext, useState, type ReactNode } from "react";

type CardType = "basic-info" | "technologies" | "projects" | "languages";

type NavigationContextType = {
  currentCard: CardType;
  setCurrentCard: (card: CardType) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [currentCard, setCurrentCard] = useState<CardType>("basic-info");

  return (
    <NavigationContext.Provider value={{ currentCard, setCurrentCard }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
