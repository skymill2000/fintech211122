import React, { useState } from "react";
import QrReader from "react-web-qr-reader";
import TopHeader from "../components/common/TopHeader";
import Modal from "react-modal";
import ModalWithdraw from "../components/withdraw/ModalWithDraw";
const CustomStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "9",
  },
  content: {
    width: "95%",
    border: `0 solid black`,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "99999",
  },
};

const QrReaderPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const delay = 500;
  const previewStyle = {
    height: 375,
    width: 375,
  };
  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    console.log(result);
    setResult(result.data);
    setOpenModal(true);
  };

  const handleError = (error) => {
    console.log(error);
  };
  const closeModal = () => {
    setOpenModal(false);
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
      <Modal
        isOpen={openModal}
        style={CustomStyles}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <ModalWithdraw tofintechno={result}></ModalWithdraw>
      </Modal>
    </>
  );
};

export default QrReaderPage;
