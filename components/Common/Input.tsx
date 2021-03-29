import React from 'react';
import styled from 'styled-components';

type Props = React.HTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
  type?: string;
  value?: string;
  style?: React.CSSProperties;
};

export const Input: React.FC<Props> = ({
  className,
  label,
  type,
  value,
  style,
  ...inputProps
}) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      <TextInput type={type} value={value} style={style} {...inputProps} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 40px 0;
`;

const Label = styled.label`
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #ffffff;
`;

const TextInput = styled.input`
  padding: 15px 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 18px;
  background: rgba(234, 174, 255, 0.08);
  color: #ffffff;

  &[type='number'] {
    -moz-appearance: textfield;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.33);
  }
`;
