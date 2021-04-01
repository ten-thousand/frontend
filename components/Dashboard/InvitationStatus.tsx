import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

import { useUserCount } from '@/hooks/useUserCount';

export const InvitationStatus: React.FC = () => {
  const count = useUserCount();
  const [countEnd, setCountEnd] = useState<number | null>(null);

  useEffect(() => {
    if (count) {
      setCountEnd(count);
    }
  }, [count]);

  return (
    <Container>
      <NumberOfPeopleJoined>
        {countEnd ? (
          <CountUp start={0} end={countEnd} delay={0}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
        ) : (
          '0'
        )}
        <NumberOfPeopleJoinedSuffix>명</NumberOfPeopleJoinedSuffix>
      </NumberOfPeopleJoined>
      <TotalNumberOfInvitations>/ 10000</TotalNumberOfInvitations>
      <h5 className="footnote">지금은 Limited Beta입니다.<br/>4월 5일에 앱스토어 런칭과 동시에 계정이 열립니다.</h5>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // // height: 300px;
  color: #ffffff;

  margin: 10vh 0 60px 0;
`;

const NumberOfPeopleJoined = styled.span`
  margin: 0;
  font-size: 128px;
  line-height: 128px;
  font-weight: 200;
  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 96px;
    line-height: 96px;
  }
`;
const NumberOfPeopleJoinedSuffix = styled.span`
  margin: 0 0 0 10px;
  font-size: 24px;
  line-height: 24px;
  opacity: 0.66;
`;

const TotalNumberOfInvitations = styled.span`
  margin: 12px 0 0 0;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  opacity: 0.5;
  color: #ffffff;
`;
