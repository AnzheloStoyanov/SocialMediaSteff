import HomePage from "../pages/HomePage/homePage";
import NotFound from "../pages/NotFound/notFound";


import Trainings from "../pages/Accommodation/trainings";
import Services from "../pages/Services/Services";
import TikTokResults from "../pages/TikTokResults/TikTokResults";

export const nav = [
  {
    path: "/",
    name: "Home",
    element:<HomePage/>,
  },

  {
    path: "/trainings",
    name: "trainings",
    element:<Trainings/>,
  },
  {
    path: "/services",
    name: "services",
    element:<Services/>,
  },
  {
    path: "/tiktok-results",
    name: "tikTokResults",
    element:<TikTokResults/>,
  },
  {
    path: "*",
    name: "Not Found",
    element:<NotFound/>,
  },
];
