import React, { useEffect, useState } from "react";
import TopHeader from "../components/common/TopHeader";
import axios from "axios";
import MainCard from "../components/main/MainCard";
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
      method: "GET",
      url: "/v2.0/user/me",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: "bearer " + accessToken,
      },
      params: {
        user_seq_no: userSeqNo,
      },
    };

    axios(option).then(({ data }) => {
      console.log(data);
    });
  };

  return (
    <>
      <TopHeader title="계좌목록"></TopHeader>
      <MainCard></MainCard>
    </>
  );
};

export default Mainpage;
