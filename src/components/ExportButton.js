import React, { useState } from "react";
import Modal from "react-modal";

const ExportButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const command = "npm run export-email";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
    } catch (err) {
      setCopied(false);
      alert("Failed to copy!");
    }
  };

  return (
    <>
      <button className="exportButton" onClick={() => setIsOpen(!isOpen)}>
        Export HTML file
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="modalContainer"
        overlayClassName="modalOverlay"
      >
        <div>
          <h2>How to Export the Email HTML File</h2>
          <p>
            To generate the latest <code>email.html</code> file, open your
            terminal and run:
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <pre style={{ margin: 0 }}>{command}</pre>
            <button onClick={handleCopy} className="copyButton">
              {copied ? "Copied!" : "Copy Command"}
            </button>
          </div>
          <p>
            The exported file will be saved to the <code>build/email.html</code>{" "}
            folder.
          </p>
          <button className="closeButton" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ExportButton;
