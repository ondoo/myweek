import React from "react";
import styled from "styled-components";

import {Link } from "react-router-dom";

const Myrate = ({ week_rates, rate_sum }) => {
  console.log(week_rates, rate_sum);
  const rate_avg = (rate_sum / week_rates.length).toFixed(1);
  const [avg, setAvg] = React.useState(rate_avg);


  return (
    <div>
      <Title>내 일주일은?</Title>
      {week_rates.map((w, idx) => {
        return (
          <div
            key={`week_day_${idx}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem 0",
              width: "100%",
            }}
          >
            <p
              style={{
                margin: "0 0.5rem 0 0",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {w.day}
            </p>
            {Array(w.rate)
              .fill(0)
              .map((w,idx) => {
                return <Circle key={`circle${idx}`}/>;
              })}

            {Array(5 - w.rate)
              .fill(0)
              .map((w,idx) => {
                return <FillCircle key={`fillcircle${idx}`}/>;
              })}
            <Link to={`/Setrate/${w.day}`}>
              <Triangle />
            </Link>
          </div>
        );
      })}
      <div>
          <p>평균 평점</p>
          <p>{avg}</p>
          <button onClick = {() => setAvg("0.0")} >reset</button>
      </div>
    </div>
    
  );
};

const Title = styled.h2`
  display: block;
  font-size: 1.17em;
  font-weight: bold;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: rgb(255, 235, 59);
`;

const FillCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: gray;
`;

const Triangle = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

const rate_avg = styled.div`
width: 8rem;
margin: 1rem auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
color: blue;
padding: 9px;
font-size: 25px;
font-weight: bold;
`;

const btn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default Myrate;
