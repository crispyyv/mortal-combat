import React, { memo } from "react";

import { GeneralSwitch } from "@routes";
import { createGlobalStyle } from "styled-components";
import { MemoizedAppContext } from "./context";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root{
    max-width:1440px;
    width:100%;
    min-height:100vh;
   
    margin: 0 auto;
  }
`;

const App = () => (
  <MemoizedAppContext>
    <GeneralSwitch />
    <GlobalStyle />
  </MemoizedAppContext>
);
export default App;
