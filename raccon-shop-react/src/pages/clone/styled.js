import styled from "styled-components";

export const ClockStyled = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #2987e4 50%, #16191e 50%);

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .clock {
    background: #16191e;
    height: 320px;
    width: 320px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 15px solid #242931;
    box-shadow: 15px 15px 35px rgba(0, 0, 0, 0.2),
      inset 0 0 30px rgba(0, 0, 0.4);
  }

  .clock {
    position: relative;
    width: 200px;
    height: 200px;
    border: 8px solid black;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .clock-face {
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 2px solid #000;
  }

  .hand {
    position: absolute;
    background-color: black;
    width: 2px;
    top: 50%;
    left: 50%;
    transform-origin: 100% 100%;
    transform: translate(-50%, -100%);
  }

  .hour {
    height: 50px;
    background-color: #333;
  }

  .minute {
    height: 60px;
    background-color: #555;
  }

  .seconds {
    height: 70px;
    background-color: red;
  }
`;
