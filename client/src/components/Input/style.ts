import styled from "styled-components";

interface ContentInputInterface {
  error: boolean;
}

export const Container = styled.div`
  width: 100%;
  text-align: left;
`;

export const ContentInput = styled.div<ContentInputInterface>`
  border: 1px solid;
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;
  background-color: var(--gray);
  border-radius: 10px;
  border-color: ${(props) => (props.error ? "#f33" : "transparent")};

  input {
    background: transparent;
    font-size: 1rem;
    flex: 1;
    padding: 0.8rem;
    border: 2px solid transparent;
    color: ${(props) => (props.error ? "#f33" : "var(--light-gray)")};
    border-bottom-right-radius: 10px;
    outline: none;

    &::placeholder {
      color: ${(props) => (props.error ? "#f33" : "var(--light-gray)")};
    }
  }
  svg {
    color: ${(props) => (props.error ? "#f33" : "var(--light-gray)")};
    margin-left: 10px;
    font-size: 1.4rem;
  }
`;