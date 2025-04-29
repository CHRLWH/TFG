import React from 'react';
import styled from 'styled-components';

const CoinPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const CoinTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const CoinDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

const CoinPage = () => {
  return (
    <CoinPageContainer>
      <CoinTitle>Coin Name</CoinTitle>
      <CoinDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </CoinDescription>
    </CoinPageContainer>
  );
};

export default CoinPage;
