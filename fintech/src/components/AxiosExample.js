import React from "react";
import TopHeader from "./common/TopHeader";
import axios from "axios";

const AxiosExample = () => {
  const handleClick = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2021-10-24&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&language=ko"
      )
      .then((reponse) => {
        console.log(reponse.data);
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
