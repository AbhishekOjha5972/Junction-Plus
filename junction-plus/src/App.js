import { useState, useEffect } from "react"
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import CommonSlider from './Components/CommonSlider';
import GetTrailers from "./Components/Youtube_Trailers/GetTrailers";


function App() {
  const [apiData, setApiData] = useState([])


  console.log(apiData)

  return (
    <div className="App" style={{backgroundColor:"#2d2d2d"}}>
      <AllRoutes/>
      {/* <GetTrailers/> */}
    </div>
  );
}

export default App;
