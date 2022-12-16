import { useState, useEffect } from "react"
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import CommonSlider from './Components/CommonSlider';
import GetTrailers from "./Components/Youtube_Trailers/GetTrailers";


function App() {
  const [apiData, setApiData] = useState([])

  // useEffect(() => {
    // https://api.themoviedb.org/3/movie/550?api_key=26b4b6b67e3c0341ce0cf1dc7ce746d9&query=Jack+Reacher

    // https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
  //   fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=26b4b6b67e3c0341ce0cf1dc7ce746d9&query=Jack+Reacher`)
  //     .then((res) => res.json())
  //     .then((res) => setApiData(res))
  //     .catch((err) => console.log(err))

  // }, []);


  console.log(apiData)

  return (
    <div className="App" style={{backgroundColor:"#2d2d2d"}}>
    {/* <Navbar/> */}
      {/* <img src={`https://image.tmdb.org/t/p/w500/${apiData.backdrop_path}`} alt="adfsdf" /> */}
      {/* <AllRoutes/> */}
      <GetTrailers/>
    </div>
  );
}

export default App;
