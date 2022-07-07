import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";

const Setrate = (props) => {
  const navigate = useNavigate();
  const params = useParams();
 const [rate, setRate] = React.useState(0); 
 const [israte, setIsClick] = useState();
 
 
  React.useEffect(() => {
    const press = (e) => {
      console.log("", e);

      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        setRate(parseInt(e.key));
      }
    };
    window.addEventListener("keydown", press);

    return () => window.removeEventListener("keydown", press);
  }, []);

  return (
    <div>
      {params.days}요일
      <span> 평점 남기기</span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem 0",
          width: "100%",
        }}
      ></div>
      <div>
      {Array(5)
        .fill(0)
        .map((w,idx) => {
          return <FillCircle key={`fillcircle${idx}`} 
          onClick =  {() => setRate(idx+1)}
          style ={{backgroundColor: idx<rate? "yellow" : "gray"}}
            />;
        })}</div>
      
      <button
        onClick = {() => {props.dispatch({setRate()})}
      >
        평점 남기기
      </button>{" "}
    </div>
  );
};

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
  display:inline-block;
`;

const btn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default Setrate;
