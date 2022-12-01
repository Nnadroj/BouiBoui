import { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import getDistance from "../services/getDistance";
import restaurant from "../services/RestaurantData";

const Geolocalization = ({ data }) => {
  const [list, setList] = useState([]);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    coords &&
      setList(
        data.filter(
          (el) =>
            getDistance(
              coords.latitude,
              coords.longitude,
              el.coords.latitude,
              el.coords.longitude,
              "K"
            ) <= 5
        )
      );
  }, [coords]);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <div>{coords && list.map((el) => <div>{el.name}</div>)}</div>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default Geolocalization;

// {getDistance(coords.latitude, coords.longitude, data[0].coords.latitude, data[0].coords.longitude, "K")}
