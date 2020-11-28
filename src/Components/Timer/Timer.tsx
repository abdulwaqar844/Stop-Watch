import React, { useState } from "react";
import TimerButton from "../../TimerButton/TimerButton";
import "./Timer.css"
const Timer = () => {
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState<number>(0);
  let [second, setSecond] = useState<number>(0);
  let [interv, setInterv] = useState<any>();
  let [status, setStatus] = useState<number>(0);
  function run() {
    if (status !== 1) {
      setStatus(1);
      setInterv(
        setInterval(() => {
          start();
        }, 1000)
      );
    }
  }
  function start() {
    if (second === 60) {
      minute++;
      setMinute(minute);
      second = 0;
    }

    if (minute === 60) {
      hour++;
      setHour(hour);
      minute = 0;
    }

    setSecond(second++);
  }
  function stop() {
    if (status !== 0) {
      setStatus(2);
      clearInterval(interv);
    }
  }

  function reset() {
    setStatus(0);
    clearInterval(interv);
    setSecond(0);
    setMinute(0);
    setHour(0);
  }
  return (
    <div className="container">

      <h1>Stop Watch</h1>
      <span>
        HH:MM:SS  <br />
      </span>
      <span>{hour < 10 ? `0${hour}` : hour}</span>:
      <span>{minute < 10 ? `0${minute}` : minute}</span>:
      <span>{second < 10 ? `0${second}` : second}</span>


      <div className="timer-container">
        <TimerButton buttonAction={run} buttonValue={status === 2 ? "Resume" : "Start"} />
        <TimerButton buttonAction={stop} buttonValue={"stop"} />
        <TimerButton buttonAction={reset} buttonValue={"reset"} />

      </div>
    </div>
  )
}

export default Timer;