import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Careers = () => {
  return (
    <Container>
      loooo는 4월 5일에 런칭 예정인 소셜 앱 입니다. 지금은 Limited Beta로 출시 되어있습니다.
      <Post>
        <h3>백엔드 개발자</h3>
        <p>서울 강남구 / Node.js</p>
      </Post>
    </Container>
  );
};

export default Careers;

const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Post = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
