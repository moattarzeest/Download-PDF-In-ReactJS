import React, { useEffect, useState } from "react";


export default function DownloadPDF()
{
    //We must create constant functions (components) inside default function
const pdfUrl = "https://arxiv.org/pdf/1308.4675.pdf";
const [pdfBlob, setPdfBlob] = useState(null);

  useEffect(() => {
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        setPdfBlob(blob);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDownload = () => {
    if (pdfBlob) {
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "example.pdf";
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(url);
    }
  };

}
