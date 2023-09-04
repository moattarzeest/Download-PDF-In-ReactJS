import React, { useEffect, useState } from "react";

function PdfDownloader() {
  const pdfUrl = "https://arxiv.org/pdf/1308.4675.pdf";
  const [pdfBlob, setPdfBlob] = useState(null);

  useEffect(() => {
    // Fetch the PDF file
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Store the PDF blob in state
        setPdfBlob(blob);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDownload = () => {
    if (pdfBlob) {
      // Create a URL object from the binary data
      const url = URL.createObjectURL(pdfBlob);

      // Create a temporary link element to download the PDF
      const link = document.createElement("a");
      link.href = url;
      link.download = "example.pdf";

      // Add the link to the document and click it
      document.body.appendChild(link);
      link.click();

      // Clean up the URL object
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="myApp">
      <h1>Learn how to download PDF on button click</h1>
      <h3>Click the button below</h3>
      <button onClick={handleDownload} className="downloadButton">Download PDF</button>
    </div>
  );
}

export default PdfDownloader;
