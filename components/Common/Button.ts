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
  transition: background-color 0.25s ease-in-out;

  ${({ primary, ready = true }) =>
    primary &&
    css`
      color: rgba(255, 255, 255, 0.95);

      ${ready
        ? css`
            background-color: #212529;

            &:hover {
              background-color: #111214;
            }
          `
        : css`
            background-color: #343a40;
          `}
    `};
`;
