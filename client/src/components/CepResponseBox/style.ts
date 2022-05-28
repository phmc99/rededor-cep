import styled from "styled-components";

export const CepContent = styled.div`
  background-color: var(--aux);
  width: 100%;
  padding: 10px;
  border-radius: 15px;

  ul {
    list-style: none;
    width: 100%;

    li {
      margin: 5px 0;
      display: flex;
      justify-content: space-between;
    }
    
    li span {
      font-weight: bold;
      color: var(--dark-gray);
    }
    
    li p {
      width: 50%;
      text-align: right;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--light-gray);
    }
  }
`;
