import React, { useEffect, useState } from "react";
import TopHeader from "../components/common/TopHeader";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const BalancePage = () => {
  // 1. 쿼리스트링에서 fintechUseNo 받아오기 (useLocation / queryString ) 활용 <-authResult 참조
  const { search } = useLocation(); //query string get
  const { fintechUseNo } = queryString.parse(search);
  const [balance, setbalance] = useState(0);
  const [transactionList, setTransactionList] = useState([]);
  console.log(fintechUseNo);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "T991599190U" + countnum; //이용기관번호 본인것 입력
    return transId;
  };

  useEffect(() => {
    getBalance();
    getTransactionList();
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
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: fintechUseNo,
        tran_dtime: "20211125132500",
      },
    };
    axios(option).then(({ data }) => {
      console.log(data);
      setbalance(data.balance_amt);
    });
  };

  const getTransactionList = () => {
    const accessToken = localStorage.getItem("accessToken");
    const option = {
      method: "GET",
      url: "/v2.0/account/transaction_list/fin_num",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: "bearer " + accessToken,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: fintechUseNo,
        inquiry_type: "A",
        inquiry_base: "D",
        from_date: "20190101",
        to_date: "20190101",
        sort_order: "D",
        tran_dtime: "20211125132500",
      },
    };
    axios(option).then(({ data }) => {
      console.log(data);
      setTransactionList(data.res_list);
    });
  };

  // 3. 카드 오브젝트를 생성하여 랜더링하기
  return (
    <>
      <TopHeader title="잔액 조회"></TopHeader>
      {balance}
      {/* {transactionList.} */}
    </>
  );
};

export default BalancePage;
