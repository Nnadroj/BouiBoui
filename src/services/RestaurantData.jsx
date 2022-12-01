import restau from "../components/card/restau.jpeg";
import restau_2 from "../components/card/restau2.jpeg";

const restaurant = [
  {
    name: "Chez Bob",
    street: "rue des bains",
    postCode: "17420",
    city: "Saint-Palais-sur-Mer",
    country: "France",
    coords: {
      latitude: 45.64247,
      longitude: -1.08665,
    },
    picture: restau,
  },
  {
    name: "Burger Lutèce",
    street: "30 rue du surmelin",
    postCode: "75020",
    city: "Paris",
    country: "France",
    coords: {
      latitude: 48.86831,
      longitude: 2.40398,
    },
    picture: restau_2,
  },
];
export default restaurant;
