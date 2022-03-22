import * as React from "react";
import styled from "styled-components";

export const Div = styled.div`

  header {
    width: 100%;
  }

  .main-aside {
    margin: 81px 0 0 0;
    width: 100%;
    overflow:hidden;
    display: flex;
  }
  
  main {
  width: 100%;
  overflow:hidden;
  display: flex;
}

  .aside {
    height: 90vh;  // 100vh - 70px;
    width: 30%;
    background-color: rgb(255, 255, 255);
    display:none;
  }

  .modalGroup {
    height: 100%;  // 100vh - 70px;
    width: 100%;
    display: flex;
    padding: 8px 8px 8px 8px;
    position: fixed;
    border-left: 1px solid rgb(236, 236, 236);
  }
`;

