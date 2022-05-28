import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--light-blue);
  color: var(--light-gray);
  padding: 5px;
  font-size: 1.2rem;
  border-radius: 10px;
  width: 140px;
  margin-top: 10px;
  cursor: pointer;
  border: 0;
  font-weight: bold;
  outline: none;

  &:hover {
    filter: brightness(1.05);
    transition: all 0.4s;
  }
`;