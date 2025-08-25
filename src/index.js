import React from "react";
import "./i18n";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import MainLayout from "./MainLayout";
import ExportButton from "./components/ExportButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExportButton onExport={() => console.log("Exporting data...")} />
    <MainLayout />
  </React.StrictMode>
);
