import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

// GlobalStyle 
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;  

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>안녕하세요</TodoTemplate>
    </>
  );
}

export default App;