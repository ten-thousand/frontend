import styled, { css } from 'styled-components';

type Props = {
  primary?: boolean;
  ready?: boolean;
};

export const Button = styled.button<Props>`
  padding: 18px 36px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.05rem;
  width: 100%;

  ${({ primary, ready = true }) =>
    primary &&
    css`
      background-color: ${ready ? '#212529' : '#343a40'};
      color: rgba(255, 255, 255, 0.95);
    `};
`;
