import React, { useEffect } from "react";
import TopHeader from "../components/common/TopHeader";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const BalancePage = () => {
  // 1. 쿼리스트링에서 fintechUseNo 받아오기 (useLocation / queryString ) 활용 <-authResult 참조
  const { search } = useLocation(); //query string get
  const { fintechUseNo } = queryString.parse(search);
  console.log(fintechUseNo);
  useEffect(() => {
    getBalance();
  }, []);
  // 2. 받아온 데이터를 바탕으로 ? => axios 요청 작성하기 => bank_trans_id = 직접 손으로 타이핑 <- main axios 참조
  const getBalance = () => {
    const accessToken = localStorage.getItem("accessToken");
    //work4 사용자 정보 조회 Api 호출
    const option = {
      method: "GET",
      url: "/v2.0/account/balance/fin_num",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: "bearer " + accessToken,
      },
      params: {},
    };

    axios(option).then(({ data }) => {
      console.log(data);
    });
  };

  // 3. 카드 오브젝트를 생성하여 랜더링하기
  return (
    <>
      <TopHeader title="잔액 조회"></TopHeader>
    </>
  );
};

export default BalancePage;
