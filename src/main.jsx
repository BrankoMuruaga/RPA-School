import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./Context/authContext.jsx";
import { DownloadProvider } from "./Context/downloadContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <DownloadProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DownloadProvider>
    </NextUIProvider>
  </React.StrictMode>
);
