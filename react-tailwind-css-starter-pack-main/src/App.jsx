import "./App.css";
import data from "./data";
import { useState } from "react";
import Tours from "./Components/Tours";

const App = () => {
  const[tours,setTour]=useState(data);
  function removeTour(id){
    const newTours=tours.filter(tour =>tour.id!==id);
    setTour(newTours);

   }

   if(tours.length ===0){
    return(
      <div className="refresh">
        <h2>No tours left</h2>
        <button onClick={() =>setTour(data)}>Refresh</button>

      </div>

    );
   }
  return (
    <div>
     
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
