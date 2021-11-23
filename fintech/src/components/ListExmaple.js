import React, { useState } from "react";
import Welcome from "./Welcome";

const ListExmaple = () => {
  const [users, setUsers] = useState([
    { name: "홍길동", age: 12, height: 180 },
    { name: "동", age: 18, height: 180 },
    { name: "길동", age: 16, height: 180 },
  ]);

  return (
    <div>
      {users.map(({ name, age, height }) => {
        return (
          <Welcome username={name} userage={age} userheight={height}></Welcome>
        );
      })}
    </div>
  );
};

export default ListExmaple;
