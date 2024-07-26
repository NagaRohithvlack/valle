import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import car from "../../assets/CAR.png";
import back from "../../assets/back.svg";

function TimerPage({ initialTime, timerStarted, onCancelRequest }) {
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    setRemainingTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (!timerStarted) return;

    const timer = setInterval(() => {
      setRemainingTime((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timerStarted]);

  const percentage = (remainingTime / initialTime) * 100;

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  

  return (
    <div className="flex flex-col justify-center items-center p-8 gap-16">
      <div className=" w-full flex justify-center items-center ">
        <p className="text-3xl font-bold">PARKING TIMER</p>
        <Link to="/" className="absolute left-1 border-2 border-black rounded-full h-8 w-8 ">
          <img src={back} alt="left-arrow" />
        </Link>
      </div>

      <div className="progress w-full relative flex justify-center items-center">
        <div
          style={{ width: "60%" }}
          className="flex justify-center items-center relative"
        >
          <div className="absolute">
            <CircularProgressbar
              value={percentage}
              styles={buildStyles({
                pathColor: "#4A90E2",
                trailColor: "#d6d6d6",
                strokeLinecap: "round",
              })}
            />
          </div>
          <img
            src={car}
            alt="car"
            className="w-1/4 flex justify-center items-center"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-2xl font-bold">{formatTime(remainingTime)}</p>
        <p className="text-2xl font-medium">Remaining Parking Time</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-between">
          <div className="w-3/6 flex flex-col justify-between items-center">
            <p className="text-[#797979] text-xl font-semibold">Token Number</p>
            <p className="text-xl font-medium">2000123</p>
          </div>
          <div className="w-3/6 flex flex-col justify-between items-center">
            <p className="text-[#797979] text-xl font-semibold">
              Vehicle Number
            </p>
            <p className="text-xl font-medium">AP07 CF 1234</p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-3/6 flex flex-col justify-between items-center">
            <p className="text-[#797979] text-xl font-semibold">Parking</p>
            <p className="text-xl font-medium">Secure Park</p>
          </div>
          <div className="w-3/6 flex flex-col justify-between items-center">
            <p className="text-[#797979] text-xl font-semibold">Parking Slot</p>
            <p className="text-xl font-medium">A06 1st Floor</p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-3/6 flex flex-col justify-between items-center">
            <p className="text-[#797979] text-xl font-semibold">Arrive Time</p>
            <p className="text-xl font-medium">07.00 AM</p>
          </div>
          <div className="w-3/6 flex flex-col justify-between items-center">
            <p className="text-[#797979] text-xl font-semibold">Exit Time</p>
            <p className="text-xl font-medium">08.00 AM</p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-3/6 flex flex-col justify-center items-center">
            <p className="text-[#797979] text-xl font-semibold">Date</p>
            <p className="text-xl font-medium">04 JAN</p>
          </div>
          <div className="w-3/6 flex flex-col justify-between items-center">
            <p className="text-[#797979] text-xl font-semibold">Car Status</p>
            <p className="text-xl font-medium">Reached</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="/"
          className="flex bg-[#032374] font-semibold text-lg justify-center items-center p-3 px-6 rounded-full text-white"
          onClick={onCancelRequest}
        >
          Cancel Request
        </Link>
        {/* <Link 
          to="/TimerPage" // Set the path to TimerPage
          className="flex bg-[#032374] font-semibold text-lg justify-center items-center p-3 px-6 rounded-full text-white"
          onClick={onRequestVehicle} // Trigger the onRequestVehicle function on click
        >
          Request Vehicle
        </Link> */}
      </div>
    </div>
  );
}

export default TimerPage;
