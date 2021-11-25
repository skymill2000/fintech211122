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
      setAccountList(data.res_list);
    });
  };

  return (
    <>
      <TopHeader title="계좌목록"></TopHeader>
      {/* ㅂㅏㄴ보ㄱㄱ문문을  통통해  카카드  그그리리기기 */}
      {accountList.map((account) => {
        return (
          <MainCard
            key={account.fintech_use_num}
            bankName={account.bank_name}
            fintechUseNo={account.fintech_use_num}
          ></MainCard>
        );
      })}
    </>
  );
};

export default Mainpage;
