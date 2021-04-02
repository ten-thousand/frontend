import React from 'react';
import styled from 'styled-components';

const scale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Props = {
  count: number;
};

export const InvitationCount: React.FC<Props> = ({ count }) => {
  return (
    <Container>
      <Bar>
        <BarActive count={count} />
        <BarBase />
      </Bar>
      <Scale>
        {scale.map((num, index) => (
          <ScaleNumber key={index} isActive={num === count}>
            {num}
          </ScaleNumber>
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

type BarActiveProps = {
  count: number;
};
const BarActive = styled.div<BarActiveProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  height: 8px;
  border-radius: 8px;
  background: linear-gradient(90deg, #976eee 0%, #a053e2 54.17%, #0ca295 100%);
  width: ${(props) =>
    `${props.count != null ? Math.min(props.count, 10) * 10 : 0}`}%;
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

type ScaleNumberProps = {
  isActive: boolean;
};
const ScaleNumber = styled.span<ScaleNumberProps>`
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: #ffffff;
  opacity: ${(props) => (props.isActive ? 1 : 0.4)};
  font-weight: ${(props) => (props.isActive ? 600 : 400)};
`;
