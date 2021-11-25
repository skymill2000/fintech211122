import React, { useState, useEffect } from "react";
import TopHeader from "../components/common/TopHeader";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const AuthResultPage = () => {
  console.log(useLocation());
  const { search } = useLocation(); //query string get
  const { code } = queryString.parse(search);
  const [accessToken, setaccessToken] = useState("토큰 받아오기전");
  const [userSeqNo, setuserSeqNo] = useState("사용자 번호");
  console.log(code);

  useEffect(() => {
    getAccessToken();
  }, []);
  //컴포넌트가 마운트 될때 실행

  const getAccessToken = () => {
    const sendData = {
      code: code,
      client_id: "q7kH44ThJwjpvNRg0BbJvE1yxvx5X53DKz1rNgPF", //<-
      client_secret: "yVT6irMr2h4ZTHzZY7sDpbvhm1nlOzr4nP7DYRVy", //<-
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    };
    const encodedSendData = queryString.stringify(sendData);
    console.log(encodedSendData);

    const option = {
      method: "POST",
      url: "https://testapi.openbanking.or.kr/oauth/2.0/token", //<-
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      }, //<-
      data: encodedSendData,
    };

    axios(option).then(({ data }) => {
      setaccessToken(data.access_token);
      setuserSeqNo(data.user_seq_no);
      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem("userSeqNo", data.user_seq_no);
      window.opener.location.href = "/main";
      window.close();
    });
  };

  return (
    <div>
      <TopHeader title="토큰 발급 과정"></TopHeader>
      <p>사용자 인증 코드 : {code}</p>
      <p>access token : {accessToken}</p>
      <p>user seq no : {userSeqNo}</p>
    </div>
  );
};

export default AuthResultPage;
