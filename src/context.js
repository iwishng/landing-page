import { useContext, createContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [ind, setInd] = useState(true);
  return (
    <AppContext.Provider
      value={{
        ind,
        setInd,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
