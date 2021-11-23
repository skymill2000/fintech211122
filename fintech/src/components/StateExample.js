import React, { useState } from "react";

const StateExample = () => {
  const [stateUsername, setStateUsername] = useState("홍길동"); // 스테이트 선언
  const handleChange = (e) => {
    const { value } = e.target;
    // username = value;
    setStateUsername(value);
  };

  const handleClick = () => {
    alert("버튼을 글릭했습니다.");
  };

  return (
    <div>
      state 예제
      <p>{stateUsername}</p>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>클릭 테스트</button>
    </div>
  );
};

export default StateExample;
