import React from "react";

const ExportButton = () => {
  const handleExport = async () => {
    console.log("Export button clicked");
    // try {
    //   const response = await fetch("/api/export-email");
    //   if (!response.ok) throw new Error("Export failed");
    //   const blob = await response.blob();
    //   const url = window.URL.createObjectURL(blob);
    //   const a = document.createElement("a");
    //   a.href = url;
    //   a.download = "email.html";
    //   a.click();
    //   window.URL.revokeObjectURL(url);
    // } catch (error) {
    //   alert("Failed to export email template.");
    // }
  };

  return (
    <button className="exportButton" onClick={handleExport}>
      Export HTML file
    </button>
  );
};

export default ExportButton;
