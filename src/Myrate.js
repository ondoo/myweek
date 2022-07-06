import React from "react";
import styled from "styled-components";



import { useNavigate } from "react-router-dom";

const Myrate = (props) => {
  const weekArr = ["일", "월", "화", "수", "목", "금", "토"];
  const [circle, circleFill] = React.useState([0, 1, 2, 3, 4]);

  const week_days = weekArr.map((_d, idx) => {
    let today = new Date().getDay();
    let d = today + idx > 6 ? today + idx - 7 : today + idx;

    return weekArr[d];
  });

  let rate_sum = 0;

  const week_rates = week_days.map((w, idx) => {
    const random =
      Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
      Math.ceil(1);
    rate_sum += random;

    return {
      day: w,
      rate: random,
    };
  });
  console.log(week_rates);
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
              .map(() => {
                return <Circle />;
              })}

            {Array(5-w.rate) 
              .fill(0)
              .map(() => {
                return <FillCircle />;
              })}

            <Triangle />
          </div>
        );
      })}
    </div>
  );
};

const Title = styled.h2`
  display: block;
  font-size: 1.17em;
  font-weight: bold;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
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

const btn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default Myrate;
