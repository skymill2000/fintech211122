import React from "react";
import styled from "styled-components";

const TopHeaderBlock = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  width: auto;
  height: 60px;
  border-bottom: 1px double #000000;
`;

const TopHeader = ({ title }) => {
  return <TopHeaderBlock>{title}</TopHeaderBlock>;
};

export default TopHeader;
