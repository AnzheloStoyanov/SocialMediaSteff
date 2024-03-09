import HomePage from "../pages/HomePage/homePage";
import NotFound from "../pages/NotFound/notFound";
import Accommodation from "../pages/Accommodation/trainings";
import Prices from "../pages/Prices/Prices";
import Gallery from "../pages/Gallery/Gallery";
import Entertainment from "../pages/Entertainment/entertainment";
import Contact from "../pages/Contact/Contact";
import RoomPage from "../pages/Room/RoomPage";
import Services from "../pages/Services/Services";
import Trainings from "../pages/Accommodation/trainings";
export const nav = [
  {
    path: "/",
    name: "Home",
    element:<HomePage/>,
  },
  // {
  //   path: "/services",
  //   name: "kraimorie",
  //   element: <Services/>
  // },
  {
    path: "/trainings",
    name: "trainings",
    element:<Trainings/>,
  },
  // {
  //   path: "/prices",
  //   name: "prices",
  //   element:<Prices/>,
  // },
  // {
  //   path: "/gallery",
  //   name: "gallery",
  //   element:<Gallery/>,
  // },
  // {
  //   path: "/entertainment",
  //   name: "entertainment",
  //   element:<Entertainment/>,
  // },
  // {
  //   path: "/contracts",
  //   name: "contracts",
  //   element: <Contact/>,
  // },
  // {
  //   path: "/room/:id",
  //   name: "room",
  //   element: <RoomPage/>
   
  // },
  {
    path: "*",
    name: "Not Found",
    element:<NotFound/>,
  },
];
