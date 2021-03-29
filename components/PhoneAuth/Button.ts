import styled, { css } from 'styled-components';

type Props = {
  primary?: boolean;
};

export const Button = styled.button<Props>`
  padding: 18px 36px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.05rem;
  width: 100%;

  ${({ primary }) =>
    primary &&
    css`
      background-color: #212529;
      color: rgba(255, 255, 255, 0.95);
    `};
`;
