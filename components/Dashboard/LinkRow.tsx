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
      <Label>{label}</Label>
      <Container>
        <Input value={value} />
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
          복사
        </CopyButton>
        {isUsed && <UsedLabel>THIS INVITATION IS ALREADY USED</UsedLabel>}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 16px 0 24px;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 8px;
`;

const Container = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  flex: 1;
  padding: 16px 18px;
  margin-right: 8px;
  border-radius: 8px;
  font-size: 1.05rem;
  background-color: #f1f3f5;
  border: 1px solid #dee2e6;
`;

type CopyButtonProps = {
  isUsed: boolean;
};

const CopyButton = styled(Button)<CopyButtonProps>`
  width: 82px;
  height: 100%;
  padding: 16px 0;
  font-size: 1.05rem;
  font-weight: 500;
  border: 1px solid #dee2e6;
  background-color: #dee2e6;
  color: rgba(0, 0, 0, 0.65);

  ${({ isUsed }) =>
    !isUsed
      ? css`
          &:hover {
            background-color: #ced4da;
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
