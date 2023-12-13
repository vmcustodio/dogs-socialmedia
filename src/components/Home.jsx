import React from "react";
import Feed from "./Feed/Feed";

import styles from "./Footer.module.css";
import Head from "./Helpers/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" />
      <Feed></Feed>
    </section>
  );
};

export default Home;
