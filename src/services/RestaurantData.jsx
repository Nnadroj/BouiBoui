import restau from "../components/card/restau.jpeg";
import restau_2 from "../components/card/restau2.jpeg";

const restaurants = [
  {
    name: "Chez Bob",
    category: "Brasserie",
    street: "rue des bains",
    postCode: "17420",
    city: "Saint-Palais-sur-Mer",
    country: "France",
    img: restau,
    coords: {
      latitude: 45.64247,
      longitude: -1.08665,
    },
    subscription_date: "",
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
    category: "Burger",
    street: "30 rue du surmelin",
    postCode: "75020",
    city: "Paris",
    country: "France",
    img: restau_2,
    coords: {
      latitude: 48.86831,
      longitude: 2.40398,
    },
    subscription_date: 3,
    offer: [
      /*  {
        title: "offer",
        data: "offer data",
        picture: "offer-picture",
      }, */
    ],
  },
  {
    name: "La confidente",
    category: "Francais moderne",
    street: "125 avenue Gambetta",
    postCode: "75020",
    city: "Paris",
    country: "France",
    img: restau,
    coords: {
      latitude: 48.8683,
      longitude: 2.40116,
    },
    subscription_date: 8,
    offer: [
      {
        title: "offer",
        data: "offer data",
        picture: "offer-picture",
      },
    ],
  },
  {
    name: "Chang Sheng",
    category: "Chinois",
    street: "95 Av. Gambetta",
    postCode: "75020",
    city: "Paris",
    country: "France",
    coords: {
      latitude: 48.8665182,
      longitude: 2.3997201,
    },
    subscription_date: 8,
    offer: [
      {
        title: "offer",
        data: "offer data",
        picture: "offer-picture",
      },
    ],
  },
];
export default restaurants;
