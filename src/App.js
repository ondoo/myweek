import React from "react";
import styled from "styled-components"; //사용한 프레임1
import { Route, Routes } from "react-router-dom"; //사용한 프레임2

// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import Myrate from "./Myrate";
import Setrate from "./Setrate";

function App() {
    const weekArr = ["일", "월", "화", "수", "목", "금", "토"];
  
    const week_days = weekArr.map((_d, idx) => {
      let today = new Date().getDay();
      let d = today + idx > 6 ? today + idx - 7 : today + idx;
  
      return weekArr[d];
    });
  
    let rate_sum = 0;
  
    const week_rates = week_days.map((w) => {
      const random =
        Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
        Math.ceil(1);
      rate_sum += random;
  
      return {
        day: w,
        rate: random,
      };
    });
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Myrate week_rates 
          = {week_rates} rate_sum = {rate_sum}/>} />
          <Route path="/Setrate/:days" element={<Setrate />} />
  
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
