import React from "react";

const NewsList = ({ news }) => {
  return (
    <>
      {news.map((n, index) => {
        return (
          <div key={index}>
            <p>제목 : {n.title}</p>
            <a href={n.url}>기사로 이동하기</a>
          </div>
        );
      })}
    </>
  );
};

export default NewsList;
