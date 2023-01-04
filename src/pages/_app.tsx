import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";
import { NavBar } from "../components/layout/NavBar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
};

export default api.withTRPC(MyApp);
