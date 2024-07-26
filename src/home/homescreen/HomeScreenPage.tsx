import qrimg from "../../assets/qrimg.jpeg";
import logo from "../../assets/logobg.png";
import { Link } from "react-router-dom";

function HomeScreenPage({ selectedTime, setSelectedTime, onRequestVehicle }) {
  return (
    <div className="w-full flex flex-col gap-10 p-8">
      <div className="flex justify-center gap-8">
        <div className="w-3/6 p-0">
          <img src={logo} alt="LOGO" />
        </div>

        <div className="flex flex-col p-2 justify-center items-startstart">
          <div className="flex gap-2">
            <p className="text-md font-semibold">Name:</p>
            <p className="text-md">Hotel</p>
          </div>

          <div className="flex gap-2">
            <p className="text-md font-semibold">Address:</p>
            <p className="text-md">Hyderabad</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="w-3/6 p-2">
          <img src={qrimg} alt="qrimg" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-normal">Ticket</p>
          <p className="text-xl font-semibold">2000051</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="flex gap-2 w-full">
          <p className="bg-[#3684d6] text-white flex items-center p-2 justify-center rounded-full shadow-2xl w-3/6 text-lg">
            Vehicle Number:
          </p>
          <p className="flex items-center text-lg">AP07 CF 1234</p>
        </div>
        <div className="flex gap-2 w-full">
          <p className="bg-[#3684d6] text-white flex items-center p-2 justify-center rounded-full shadow-2xl w-3/6 text-lg">
            Entry Time:
          </p>
          <p className="flex items-center text-md">01/01/2024 8.30pm</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3">
        <p className="bg-[#3684d6] text-white flex items-center p-2 justify-center rounded-full shadow-2xl w-3/6 text-lg">
          Request Time:
        </p>

        <select
          className="w-3/6 border border-black p-2 rounded-xl focus:outline-none"
          value={selectedTime}
          onChange={(e) => setSelectedTime(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      <div className="flex justify-center">
        <Link
          to="/TimerPage" 
          className="flex bg-[#032374] font-semibold text-lg justify-center items-center p-3 px-6 rounded-full text-white"
          onClick={onRequestVehicle}
        >
          Request Vehicle
        </Link>
      </div>
    </div>
  );
}

export default HomeScreenPage;
