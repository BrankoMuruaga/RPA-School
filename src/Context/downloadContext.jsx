// authContext.jsx
import React, { createContext, useContext, useState } from "react";

const DownloadContext = createContext();

export const DownloadProvider = ({ children }) => {
  const [downloadFile, setDownloadFile] = useState("");

  return (
    <DownloadContext.Provider value={{ downloadFile, setDownloadFile }}>
      {children}
    </DownloadContext.Provider>
  );
};

export const useDownloadFile = () => {
  const context = useContext(DownloadContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};
