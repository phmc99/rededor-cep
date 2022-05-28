import styled from "styled-components";

interface MainContentInterface {
  error: boolean;
}

export const MainContent = styled.div<MainContentInterface>`
  max-width: 460px;
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    span {
      height: 18px;
      color: #f33
    }
  }
`;
