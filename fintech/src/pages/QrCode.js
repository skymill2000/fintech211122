import React from "react";
import TopHeader from "../components/common/TopHeader";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import styled from "styled-components";
var QRCode = require("qrcode.react");

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
const QrCode = () => {
  const { search } = useLocation(); //query string get
  const { fintechUseNo } = queryString.parse(search);

  return (
    <>
      <TopHeader title="QR 코드"></TopHeader>
      <QRBlock>
        <QRCode value={fintechUseNo} />
      </QRBlock>
    </>
  );
};

export default QrCode;
