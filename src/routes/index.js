import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import { HeaderOnly } from "~/components/Layout";

// This routes don't need to be logged in
export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/@:nickname", component: Profile },
  { path: "/search", component: Search, layout: null },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];

// This routes need to be logged in
export const privateRoutes = [];
