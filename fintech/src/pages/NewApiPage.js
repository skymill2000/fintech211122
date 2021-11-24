import React, { useState } from "react";
import axios from "axios";
import TopHeader from "../components/common/TopHeader";

const NewApiPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [serachInput, setSearchInput] = useState("");
  //스테이트 추가
  const handleClick = () => {
    //템플릿 리터럴을 사용
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2021-10-24&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&language=ko"
      )
      .then(({ data }) => {
        console.log(data);
        setNewsList(data.articles);
      });
  };
  return (
    <>
      <TopHeader title={"뉴스 검색"}></TopHeader>
      <input></input>
      <button onClick={handleClick}>검색</button>
      {/* result list component */}
      {newsList.map((n) => {
        return <p>{n.title}</p>;
      })}
    </>
  );
};

export default NewApiPage;
