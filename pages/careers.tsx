import React from 'react';
import styled from 'styled-components';

import { useBrowserEffect } from '@/hooks/useBrowserEffect';
import { Analytics } from '@/utils/analytics';

const Careers = () => {
  useBrowserEffect(() => {
    Analytics.logEvent('view_careers');
  }, []);

  return (
    <Container>
      <div className="splash">
        <div className="splash-content">
          <div className="careers__wrapper">
            <h3 style={{ lineHeight: 1.5 }}>
              loooo. 4월 6일에 런칭 예정인 소셜 앱 입니다.
              <br />
              지금은 Limited Beta로 출시 되어있습니다.
            </h3>
            <Post href="mailto:ooool@loooo.app?subject=백엔드%20개발자">
              <h5>백엔드 개발자</h5>
              <p>Node.js / 서울 강남구</p>
            </Post>
            <Post href="mailto:ooool@loooo.app?subject=프론트엔드%20개발자">
              <h5>프론트엔드 개발자</h5>
              <p>React Native / 서울 강남구</p>
            </Post>
            <Post href="mailto:ooool@loooo.app?subject=프로덕트%20디자이너">
              <h5>프로덕트 디자이너</h5>
              <p>서울 강남구</p>
            </Post>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Careers;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Post = styled.a`
  background-color: #f8f9fa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;

  margin: 16px 0 0 0;
  padding: 28px 20px 26px 20px;

  h5 {
    margin: 0;
    color: rgba(0, 0, 0, 0.75) !important;
    line-height: 1;
    font-weight: 600;
  }

  p {
    margin: 0;
    color: rgb(0, 0, 0, 0.5);
    line-height: 1;
  }

  &:first-of-type {
    margin-top: 48px;
  }
`;
