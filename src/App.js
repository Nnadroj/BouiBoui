import "./App.css";
import Geolocalization from "./components/Geolocalization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import getDistance from "./services/getDistance";
import restaurants from "./services/RestaurantData";
import AnimatedRoute from "./components/AnimatedRoute";
import { Global } from "@emotion/react";
import GlobalCard from "./components/card/GlobalCard";
import Match from "./components/card/Match";

function App() {
  const getLocation = () => {
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${restaurants[0].street}${restaurants[0].city}${restaurants[0].postcode}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const [userCoords, setuserCoords] = useState([]);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    coords && setuserCoords(coords);
  }, [coords]);

  return (
    <div className="App">
      <GlobalCard />
      {/* <BrowserRouter>
        <Header />
        {!isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation</div>
        ) : !isGeolocationEnabled ? (
          <div>Geolocation is not enabled</div>
        ) : (
          coords && <div>Hi, \user/ !</div>
        )}

        <AnimatedRoute userCoords={userCoords}></AnimatedRoute>
        <Footer />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
