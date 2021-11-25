import React from "react";
import TopHeader from "../components/common/TopHeader";

const BalancePage = () => {
  // 1. 쿼리스트링에서 fintechUseNo 받아오기 (useLocation / queryString ) 활용
  // 2. 받아온 데이터를 바탕으로 ? => axios 요청 작성하기 => bank_trans_id = 직접 손으로 타이핑
  // 3. 카드 오브젝트를 생성하여 랜더링하기
  return (
    <>
      <TopHeader title="잔액 조회"></TopHeader>
    </>
  );
};

export default BalancePage;
