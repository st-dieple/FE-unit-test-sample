import React, { createContext, useContext } from "react";

interface GlobalContent {
}

export const MyGlobalContext  = createContext<GlobalContent>({
  
});

export const useGlobalContext = () => useContext(MyGlobalContext);