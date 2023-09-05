import React, { useEffect, useState } from "react";
import DownloadPDF from './DownloadPDF'

function PdfDownloader() {


  return (
    <div className="myApp">
      <h1>Learn how to download PDF on button click</h1>
      <h3>Click the button below</h3>
      <button onClick={<DownloadPDF/>} className="downloadButton">Download PDF</button>
    </div>
  );
}

export default PdfDownloader;
