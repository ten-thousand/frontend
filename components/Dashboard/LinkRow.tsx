import React from 'react';
import { toast } from 'react-toastify';
import styled, { css } from 'styled-components';

import { Button } from '@/components/Common/Button';
import { copyToClipboard } from '@/utils/clipboard';

type Props = {
  label: string;
  value: string;
  isUsed: boolean;
};

export const LinkRow: React.FC<Props> = ({ label, value, isUsed }) => {
  return (
    <Wrapper>
      <Container>
        <ContainerLink>
          <Label>{label}</Label>
          <RefLink isUsed={isUsed}>
            <RefLinkText isUsed={isUsed}>
              {isUsed ? (
                '01030627978'
              ) : (
                <>
                  <span style={{ fontSize: 0 }}>{`https://`}</span>
                  {value.split('//')[1]}
                </>
              )}
            </RefLinkText>
          </RefLink>
        </ContainerLink>
        <CopyButton
          onClick={() => {
            if (isUsed) {
              return;
            }
            copyToClipboard(value);
            toast('클립보드에 초대장 링크를 복사했습니다!');
          }}
          isUsed={isUsed}
        >
          {isUsed ? '초대완료' : '복사'}
        </CopyButton>
        {isUsed && false && (
          <UsedLabel>THIS INVITATION IS ALREADY USED</UsedLabel>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
`;

const ContainerLink = styled.div`
  max-width: 100%;
  flex: 1;
  width: calc(100% - 101px - 12px);
  display: flex;
  flex-direction: row;
  margin: 0 12px 0 0;
  padding: 15px 12px 15px 18px;
  background: rgba(234, 174, 255, 0.08);
  border-radius: 8px;
`;

const Label = styled.label`
  flex: 0 40px;
  margin: 0 12px 0 0;
  font-weight: 600;
  color: #ffffff;

  overflow: hidden;
  height: 18px;
  max-height: 18px;
  // outline: 1px solid red;
`;

const RefLink = styled.div`
  display: flex;
  justify-content: ${props => (props.isUsed ? 'center' : 'flex-end')};
  flex: 0 1 auto;
  max-width: 261px;
  padding: 2px 0 0 0;
  background: none;
  overflow: hidden;
  height: 18px;
  max-height: 18px;
`;

const RefLinkText = styled.h4`
  height: 16px;
  margin: 0;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  text-align: right;
  color: ${props => (props.isUsed ? 'rgba(255, 255, 255, 0.5)' : '#ffffff')};
  white-space: nowrap;
  overflow: hidden;
  opacity: 0.8;
`;

type CopyButtonProps = {
  isUsed: boolean;
};

const CopyButton = styled(Button)<CopyButtonProps>`
  flex: 0 101px;
  width: 101px;
  min-width: 101px;
  height: 100%;
  padding: 15px 0;
  font-size: 15px;
  line-height: 18px;
  font-weight: ${props => (props.isUsed ? 400 : 600)};
  background-color: ${props =>
    props.isUsed ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.2)'};
  color: ${props =>
    props.isUsed ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 1)'};

  ${({ isUsed }) =>
    !isUsed
      ? css`
          &:hover {
            background-color: rgba(0, 0, 0, 0.4);
          }
        `
      : css`
          cursor: not-allowed !important;
        `};
`;

const UsedLabel = styled.span`
  position: absolute;
  top: 0;
  transform: rotate(8deg);
  background: linear-gradient(to bottom right, #f4013e, #9f0322);
  color: rgba(255, 255, 255, 0.85);
  font-weight: 900;
  font-size: 1.25rem;
  padding: 12px;
  border-radius: 3px;
  cursor: not-allowed !important;
`;
