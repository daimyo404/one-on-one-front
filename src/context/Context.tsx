import React, { createContext, useContext, useState } from "react";

type DisplayType = "visible" | "hidden";

type EntireContextType = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  errorVisibleOrHidden: DisplayType;
  setErrorVisibleOrHidden: React.Dispatch<React.SetStateAction<DisplayType>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const EntireContext = createContext<EntireContextType>({
  email: "",
  setEmail: () => {
    return undefined;
  },
  password: "",
  setPassword: () => {
    return undefined;
  },
  errorVisibleOrHidden: "hidden",
  setErrorVisibleOrHidden: () => {
    return undefined;
  },
  errorMessage: "",
  setErrorMessage: () => {
    return undefined;
  },
});

export const useEntireContext = () => {
  return useContext(EntireContext);
};

export const EntireContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // NOTE: Login screen state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorVisibleOrHidden, setErrorVisibleOrHidden] =
    useState<DisplayType>("hidden");
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <EntireContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        errorVisibleOrHidden,
        setErrorVisibleOrHidden,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </EntireContext.Provider>
  );
};
