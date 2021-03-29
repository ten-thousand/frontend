import styled from 'styled-components';

export const ScreenContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  margin: 0 auto;
  padding: 0 20px 64px;

  & > div {
    width: 100%;
  }
`;
