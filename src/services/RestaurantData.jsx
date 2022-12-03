import chezbob from "../assets/chezbob.jpg";
import burgerlutece from "../assets/burgerlutece.png";
import laconfidente from "../assets/laconfidente.jpg";
import changsheng from "../assets/changsheng.jpeg";
import laptitevadrouille from "../assets/laptitevadrouille.jpeg";

const restaurants = [
  {
    name: "Chez Bob",
    category: "Brasserie",
    street: "rue des bains",
    postcode: "17420",
    city: "Saint-Palais-sur-Mer",
    country: "France",
    img: chezbob,
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
    postcode: "75020",
    city: "Paris",
    country: "France",
    img: burgerlutece,
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
    postcode: "75020",
    city: "Paris",
    country: "France",
    img: laconfidente,
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
    postcode: "75020",
    city: "Paris",
    country: "France",
    img: changsheng,
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
  {
    name: "La P'tite Vadrouille",
    category: "Francais moderne",
    street: "49 Rue de la Chine, 75020",
    postcode: "75020",
    city: "Paris",
    country: "France",
    img: laptitevadrouille,
    coords: {
      latitude: 48.8692559,
      longitude: 2.396618,
    },
    subscription_date: 2,
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
