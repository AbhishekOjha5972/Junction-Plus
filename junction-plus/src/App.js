import { useState, useEffect } from "react"
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import CommonSlider from './Components/CommonSlider';
import GetTrailers from "./Components/Youtube_Trailers/GetTrailers";
import Footer from "./Components/Footer";
import Details from "./Pages/Details";


function App() {
  const [apiData, setApiData] = useState([])


  console.log(apiData)

  return (
    <div className="App" style={{backgroundColor:"#2d2d2d"}}>
    {/* <Navbar/> */}
      <AllRoutes/>
      {/* <GetTrailers/> */}
      {/* <Footer/> */}
      {/* <Details/> */}
    </div>
  );
}

export default App;
