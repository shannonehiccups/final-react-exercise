import MCUShows from "./mcu-shows/MCUShows";

const releaseDates = {
  wandaVision: 'Jan 2021', 
  falconWinter: 'Mar 2021', 
  loki: 'June 2021', 
  whatIf: 'Aug 2021',
  hawkeye:'Nov 2021'
}


function App() {
  return (
    <div className="App">
      <h1>FINAL REACT EXERCISE</h1>
     <MCUShows />
    </div>
  );
}

export default App;
