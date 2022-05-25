import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import { HeaderOnly } from "~/components/Layout";
import routesConfig from "~/config/routes";

// This routes don't need to be logged in
export const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.search, component: Search, layout: null },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

// This routes need to be logged in
export const privateRoutes = [];
