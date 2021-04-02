import styled from 'styled-components';

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 24px 0;

  h2 {
    margin: 0;
    flex: 0 auto;
    font-size: 18px;
    line-height: 18px;
    font-weight: 600;
    color: #ffffff;
  }

  h4 {
    margin: 0;
    flex: 0 auto;
    color: #ffffff;
    opacity: 0.5;
    text-align: right;

    font-size: 16px;
    line-height: 1.2;
    font-weight: 400;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;

    h2 {
      margin: 0 0 16px 0;
    }
  }
`;
