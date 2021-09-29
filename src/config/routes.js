// Pages
import Home from "../pages/Home";
import AddRecipe from "../pages/AddRecipe";
import Registration from "../pages/Registration";

const ROUTES = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/add_recipe",
    component: AddRecipe,
  },
  {
    path: "/register",
    component: Registration,
  },
];

export default ROUTES;
