import React from "react";
import styled from "styled-components"; //사용한 프레임1
import { Route, Routes } from "react-router-dom"; //사용한 프레임2

// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import Myrate from "./Myrate";
import Setrate from "./Setrate";

function App() {

  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Myrate />} />
          <Route path="/Setrate" element={<Setrate />} />
        </Routes>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 0px;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
`;


export default App;
