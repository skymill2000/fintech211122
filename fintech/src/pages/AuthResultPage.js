import React from "react";
import TopHeader from "../components/common/TopHeader";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const AuthResultPage = () => {
  console.log(useLocation());
  const { search } = useLocation(); //query string get
  const { code } = queryString.parse(search);
  console.log(code);
  return (
    <div>
      <TopHeader title="토큰 발급 과정"></TopHeader>
      <p>사용자 인증 코드 : {code}</p>
    </div>
  );
};

export default AuthResultPage;
