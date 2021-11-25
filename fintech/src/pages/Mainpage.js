import React, { useEffect, useState } from "react";
import TopHeader from "../components/common/TopHeader";
import axios from "axios";
const Mainpage = () => {
  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    getAccountList();
  }, []);

  const getAccountList = () => {
    //? user/me url 요청 보내기
    const accessToken = localStorage.getItem("accessToken");
    const userSeqNo = localStorage.getItem("userSeqNo");
    console.log(accessToken, userSeqNo);

    //work4 사용자 정보 조회 Api 호출
    const option = {
      method: "POST",
      url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      params: {},
    };

    axios(option).then(({ data }) => {});
  };

  return (
    <>
      <TopHeader title="계좌목록"></TopHeader>
    </>
  );
};

export default Mainpage;