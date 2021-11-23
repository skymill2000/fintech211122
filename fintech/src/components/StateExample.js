import React, { useState } from "react";

const StateExample = () => {
  let username = "홍길동";
  const [stateUsername, setStateUsername] = useState("홍길동"); // 스테이트 선언
  const handleChange = (e) => {
    const { value } = e.target;
    // username = value;
    setStateUsername(value);
  };

  return (
    <div>
      state 예제
      <p>{stateUsername}</p>
      <input onChange={handleChange}></input>
    </div>
  );
};

export default StateExample;
