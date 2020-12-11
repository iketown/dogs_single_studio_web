import React, { createContext, useContext } from "react";

interface BreederCtxI {
  breeder: LayoutI;
}
const BreederCtx = createContext<Partial<BreederCtxI>>({});

export const BreederCtxProvider: React.FC<{ breeder: LayoutI }> = ({
  children,
  breeder,
}) => {
  return (
    <BreederCtx.Provider value={{ breeder }}>{children}</BreederCtx.Provider>
  );
};

export const useBreederCtx = (): Partial<BreederCtxI> => useContext(BreederCtx);
