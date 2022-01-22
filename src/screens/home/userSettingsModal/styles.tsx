import React from "react";
import styled from "styled-components";


export const StyledUserSettingsModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const StyledModalOptions =  styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;

  .backBtn, .customizationBtn, .suportBtn, .AcessibilidadeBtn, .exitBtn {
    width: 100%;
    height: 45px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px 0 8px 0;
    margin: 8px 0 8px 0;
    box-sizing: border-box;
    padding: 0 8px;
    font-size: 14px;
    font-weight: 600;
    color: #313131;
    outline: none;
    border: none;
    border-radius: 9px;

    :hover {
      background-color: #f5f5f5;

    }
  }

  .icon-title--Contanier {
    display: flex;
    align-items: center;
  }

  .icon--Contanier {
    width: 42px;
    height: 42px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 0 8px 0 0;
  }

  .backgroudColor {
    background-color: transparent;
    
    & > svg {
      transform: rotate(270deg)
    }
  }
`;