import React, { useState } from "react";
import Modal from "react-modal";

const ExportButton = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <pre>npm run export-email</pre>
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
