import "./App.css";
import Geolocalization from "./components/Geolocalization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page3";
import Page3 from "./Pages/Page3";
import restaurant from "./services/RestaurantData";

function App() {
  const getLocation = () => {
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${restaurant[0].street}${restaurant[0].city}${restaurant[0].postcode}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  

  return (
    <div className="App">
      <h1>BOUIBOUI</h1>
      <Geolocalization data={restaurant}/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/*  */}
    </div>
  );
}

export default App;
