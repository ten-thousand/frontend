import styled, { css } from 'styled-components';

type Props = {
  primary?: boolean;
  ready?: boolean;
};

export const Button = styled.button<Props>`
  width: 100%;
  padding: 14px 36px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  width: 100%;
  transition: background-color 0.25s ease-in-out;

  ${({ primary, ready = true }) =>
    primary &&
    css`
      color: rgba(255, 255, 255, 0.8);

      ${ready
        ? css`
            background-color: rgba(0, 0, 0, 0.4);

            &:hover {
              background-color: rgba(0, 0, 0, 0.66);
            }
          `
        : css`
            background-color: rgba(0, 0, 0, 0.1);
          `}
    `};
`;
