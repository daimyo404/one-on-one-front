import React, { createContext, useContext, useState } from "react";

type EntireContextType = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isDisplayError: boolean;
  setIsDisplayError: React.Dispatch<React.SetStateAction<boolean>>;
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
  isDisplayError: false,
  setIsDisplayError: () => {
    return undefined;
  },
});

export const useEntireContext = () => {
  return useContext(EntireContext);
};

export const EntireContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // NOTE: Login state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isDisplayError, setIsDisplayError] = useState<boolean>(false);

  return (
    <EntireContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        isDisplayError,
        setIsDisplayError,
      }}
    >
      {children}
    </EntireContext.Provider>
  );
};
