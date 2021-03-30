import React from 'react';
import styled from 'styled-components';

export const InvitationCount: React.FC = ({ count }) => {
  const scale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Container>
      <Bar>
        <BarActive count={count} />
        <BarBase />
      </Bar>
      <Scale>
        {scale.map((num, index) => (
          <ScaleNumber isActive={num == count}>{num}</ScaleNumber>
        ))}
      </Scale>
    </Container>
  );
};

const Container = styled.div`
  margin: 24px 0 0 0;
`;

const Bar = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
`;

const BarActive = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;

  width: ${props => `${props.count * 10}`}%;
  height: 8px;
  border-radius: 8px;
  background: linear-gradient(90deg, #976eee 0%, #a053e2 54.17%, #0ca295 100%);
`;

const BarBase = styled.div`
  background: #d39bff;
  opacity: 0.2;
  width: 100%;
  height: 8px;
  border-radius: 8px;
`;

const Scale = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0 0 0;
`;

const ScaleNumber = styled.span`
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: #ffffff;
  opacity: ${props => props.isActive ? 1 : 0.4};
  font-weight: ${props => props.isActive ? 600 : 400};
`;
