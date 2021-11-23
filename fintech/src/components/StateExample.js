import React from "react";

const StateExample = () => {
  let username = "홍길동";
  const handleChange = (e) => {
    const { value } = e.target;
    username = value;
  };
  return (
    <div>
      state 예제
      <p>{username}</p>
      <input onChange={handleChange}></input>
    </div>
  );
};

export default StateExample;
