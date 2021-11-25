import React, { useState } from "react";
import QrReader from "react-web-qr-reader";
import TopHeader from "../components/common/TopHeader";

const QrReaderPage = () => {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    console.log(result);
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <>
      <TopHeader title="qr 코드 읽기"></TopHeader>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </>
  );
};

export default QrReaderPage;
