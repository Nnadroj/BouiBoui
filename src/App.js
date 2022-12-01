import "./App.css";
import Geolocalization from "./components/Geolocalization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import restaurant from "./services/RestaurantData";
import AnimatedRoute from "./components/AnimatedRoute";
import GlobalCard from "./components/card/GlobalCard";
import SwipeButtons from "./components/card/SwipeButtons";

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
      <Geolocalization data={restaurant} />
      <GlobalCard />

      <BrowserRouter>
        <Header />
        <AnimatedRoute></AnimatedRoute>
        <Footer />
      </BrowserRouter>

      {/*  */}
    </div>
  );
}

export default App;
