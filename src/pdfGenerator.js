import React from "react";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import MyComponent from "./MyComponent";

const PDFGenerator = () => {
  // Function to generate the PDF content
  const MyPDF = () => (
    <Document>
      <Page>
        <MyComponent />
      </Page>
    </Document>
  );

  return (
    <div>
      <h1>Generate and Download PDF</h1>
      {/* PDFDownloadLink will handle the download */}
      <PDFDownloadLink document={<MyPDF />} fileName="my_pdf.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading..." : "Download PDF"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PDFGenerator;