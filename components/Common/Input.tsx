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
  margin: 16px 0;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 8px;
`;

const TextInput = styled.input`
  padding: 16px 18px;
  border-radius: 8px;
  font-size: 1.05rem;
  background-color: #f1f3f5;

  &[type='number'] {
    -moz-appearance: textfield;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
