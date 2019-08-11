import styled from 'styled-components';
import theme from '../theme';

const Input = styled.input`
  margin: 10px 5px;
  border-radius: 3px;
  border: 1px solid ${theme.colors.input.border};
  padding: 7px;
  box-sizing: border-box;
  width: 100%;
  &::placeholder {
    color: ${theme.colors.input.placeholder};
  }
`;

export default Input;
