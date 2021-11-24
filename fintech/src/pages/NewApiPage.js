import React, { useState } from "react";
import axios from "axios";
import TopHeader from "../components/common/TopHeader";
import SearchInput from "../components/news/SearchInput";
import NewsList from "../components/news/NewsList";

const NewApiPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [serachInput, setSearchInput] = useState("");
  //스테이트 추가
  const handleClick = () => {
    //템플릿 리터럴을 사용
    const url = `https://newsapi.org/v2/everything?q=${serachInput}&from=2021-10-24&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&language=ko`;
    axios.get(url).then(({ data }) => {
      console.log(data);
      setNewsList(data.articles);
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setSearchInput(value);
  };

  return (
    <>
      <TopHeader title={"뉴스 검색"}></TopHeader>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <NewsList news={newsList}></NewsList>
    </>
  );
};

export default NewApiPage;
