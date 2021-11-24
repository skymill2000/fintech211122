import React from "react";
import TopHeader from "./common/TopHeader";
import axios from "axios";

const AxiosExample = () => {
  const handleClick = () => {
    axios.get("https://naver.com").then((reponse) => {
      console.log(reponse);
    });
  };

  return (
    <>
      <TopHeader title="http 통신"></TopHeader>
      <button onClick={handleClick}>웹 데이터 가져오기</button>
    </>
  );
};

export default AxiosExample;
