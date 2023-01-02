import React, { createContext, useState } from "react";

type ContextType = {
  hoge: string;
  //   fuga: string;
};

export const EntireContext = createContext<ContextType>({
  hoge: "hoge",
  //   fuga: "fuga",
});

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // ユーザ情報の初期値
  const [hoge, setHoge] = useState<string>("");
  //   const [fuga, setFuga] = useState<string>("");

  return (
    <EntireContext.Provider value={{ hoge, setHoge }}>
      {children}
    </EntireContext.Provider>
  );
};
