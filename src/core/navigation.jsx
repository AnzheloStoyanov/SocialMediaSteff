import HomePage from "../pages/HomePage/homePage";
import NotFound from "../pages/NotFound/notFound";
import Accommodation from "../pages/Accommodation/accommodation";
import Kraimorie from "../pages/Kraimorie/kraimorie";
import Prices from "../pages/Prices/Prices";
import Gallery from "../pages/Gallery/Gallery";
import Entertainment from "../pages/Entertainment/entertainment";
import Contact from "../pages/Contact/Contact";
import RoomPage from "../pages/Room/RoomPage";

export const nav = [
  {
    path: "/",
    name: "Home",
    element:<HomePage/>,
  },
  {
    path: "/kraimorie",
    name: "kraimorie",
    element: <Kraimorie/> ,
  },
  {
    path: "/accommodation",
    name: "accommodation",
    element:<Accommodation/>,
  },
  {
    path: "/prices",
    name: "prices",
    element:<Prices/>,
  },
  {
    path: "/gallery",
    name: "gallery",
    element:<Gallery/>,
  },
  {
    path: "/entertainment",
    name: "entertainment",
    element:<Entertainment/>,
  },
  {
    path: "/contracts",
    name: "contracts",
    element: <Contact/>,
  },
  {
    path: "/room/:id",
    name: "room",
    element: <RoomPage/>
   
  },
  {
    path: "*",
    name: "Not Found",
    element:<NotFound/>,
  },
];
