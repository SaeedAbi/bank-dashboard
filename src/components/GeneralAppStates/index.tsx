import React from "react";
import { CurrencyType } from "@/interfaces";

interface GeneralAppStatesType {
  theme: "light" | "dark";
  currency: CurrencyType["id"];
  language: "FA" | "EN";
}
interface AppContextType {
  value: GeneralAppStatesType;
  setValue(value: GeneralAppStatesType): void;
}

const initialState: GeneralAppStatesType = {
  currency: "USD",
  theme: "light",
  language: "EN",
};

const AppContext = React.createContext<AppContextType>({
  value: initialState,
  setValue: () => void 0,
});
AppContext.displayName = "AppContext";

function GeneralAppStates({ children }: React.PropsWithChildren) {
  const [value, setValue] = React.useState<GeneralAppStatesType>(initialState);
  return (
    <AppContext.Provider value={{ value, setValue }}>
      {children}
    </AppContext.Provider>
  );
}

function useGeneralAppState() {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error(
      "`useGeneralAppState` must be used within <GeneralAppStates/> component"
    );
  }
  return context;
}

export { GeneralAppStates, useGeneralAppState };
