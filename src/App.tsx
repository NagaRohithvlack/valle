// import './App.css'
// // import HomeScreenPage from './home/homescreen/HomeScreenPage'
// import TimerPage from './home/timer/TimerPage'
// // import PrintPage from './home/Print/PrintPage'

// function App() {

//   return (
//     <>
//     {/* <PrintPage /> */}
//     {/* <HomeScreenPage /> */}
//     <TimerPage />

//     </>
//   )
// }

// export default App
import  { useState } from 'react';
import HomeScreenPage from './home/homescreen/HomeScreenPage';
import TimerPage from './home/timer/TimerPage';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import PrintPage from './home/Print/PrintPage';

function App() {
  const [selectedTime, setSelectedTime] = useState(5); // Default time in minutes
  const [timerStarted, setTimerStarted] = useState(false);
  // const navigate = useNavigate();

  const handleRequestVehicle = () => {
    setTimerStarted(true);
    setSelectedTime(selectedTime);
    

  };
  const handleCancelRequest = () => {
    setTimerStarted(false);
    setSelectedTime(selectedTime)
    // navigate("/TimerPage")
  };

  
  return (
    
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomeScreenPage 
        selectedTime={selectedTime} 
        setSelectedTime={setSelectedTime} 
        onRequestVehicle={handleRequestVehicle}
      />} />

      <Route path='/TimerPage' element={<TimerPage 
        initialTime={selectedTime * 60} 
        timerStarted={timerStarted}
        onCancelRequest={handleCancelRequest}
      />} />
      </Routes>
      </BrowserRouter>


    
  );
}

export default App;




{/* <div>
<PrintPage />

<HomeScreenPage selectedTime={selectedTime} 
   setSelectedTime={setSelectedTime} 
   onRequestVehicle={handleRequestVehicle} />

   <TimerPage initialTime={selectedTime * 60} 
     timerStarted={timerStarted}
     onCancelRequest={handleCancelRequest} />
</div> */}