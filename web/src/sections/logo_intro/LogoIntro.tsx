import React from 'react';
import styled from 'styled-components';

const LogoDiv = styled.div`
  border: 1px solid orange;
`;
const LogoIntro: React.FC<LogoIntroI> = ({ title }) => {
  return (
    <LogoDiv>
      <h1
        style={{
          fontFamily: 'Kaushan Script, sans-serif',
          fontSize: '3rem',
        }}
      >
        {title}
      </h1>
    </LogoDiv>
  );
};

export default LogoIntro;
