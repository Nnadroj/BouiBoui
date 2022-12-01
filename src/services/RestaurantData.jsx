import restau from "../components/card/restau.jpeg";
import restau_2 from "../components/card/restau2.jpeg";

const restaurants = [
  {
    name: "Chez Bob",
    street: "rue des bains",
    postCode: "17420",
    city: "Saint-Palais-sur-Mer",
    country: "France",
    img: restau,
    coords: {
      latitude: 45.64247,
      longitude: -1.08665,
    },
    offer: [
      {
        title: "offer",
        data: "offer data",
        picture: "offer-picture",
      },
    ],
  },
  {
    name: "Burger Lutèce",
    street: "30 rue du surmelin",
    postCode: "75020",
    city: "Paris",
    country: "France",
    img: restau_2,
    coords: {
      latitude: 48.86831,
      longitude: 2.40398,
    },
    offer: [
      {
        title: "offer",
        data: "offer data",
        picture: "offer-picture",
      },
    ],
  },
  {
    name: "La confidente",
    street: "125 avenue Gambetta",
    postCode: "75020",
    city: "Paris",
    country: "France",
    img: restau,
    coords: {
      latitude: 48.8683,
      longitude: 2.40116,
    },
    offer: [],
  },
];
export default restaurants;
