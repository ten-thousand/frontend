import styled, { css } from 'styled-components';

type Props = {
  primary?: boolean;
  disabled?: boolean;
};

export const Button = styled.button<Props>`
  padding: 18px 36px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.05rem;
  width: 100%;

  ${({ primary, disabled }) =>
    primary &&
    css`
      background-color: ${!disabled ? '#212529' : '#343a40'};
      color: rgba(255, 255, 255, 0.95);
    `};
`;
