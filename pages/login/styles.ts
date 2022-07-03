import styled from '@emotion/styled';
import { FLEX_CENTER, FLEX_COLUMN } from '@/styles';

export const PageWrapper = styled.div`
  ${FLEX_CENTER}
  height: 100%;
`;

export const InputWrapper = styled.div`
  ${FLEX_COLUMN}
  margin: auto;
  justify-content: space-between;
  width: 500px;
  padding: 20px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;

  div {
    margin-top: 0;
    width: 100%;
  }
  button {
    width: 100%;
    margin: 5px 0;
  }
`;
