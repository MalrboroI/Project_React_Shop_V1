import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/constans";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import ProductPage from "../pages/ProductPage";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: PRODUCT_ROUTE + "/:Id",
    Component: ProductPage,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
