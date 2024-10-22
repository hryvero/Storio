import styles from "./page.module.scss";
import Header from "./components/Header";
import Button from "./components/Button";
import Banner from "./components/Banner";
import { actions } from "../app/mocks/header";
import { Fragment } from "react";
import Info from "./components/Info/Info";

export default function Home() {
  const bannerText = {
    title: (
      <Fragment>
        {" "}
        Find <strong> all you need </strong> <br /> in <strong>Storio</strong>{" "}
        platform{" "}
      </Fragment>
    ),
    description: (
      <Fragment>
        {" "}
        Listings from different fields - from furnitures to books and
        electronics.
        <br /> Sign up to see all the listings and find the best match for you.
      </Fragment>
    ),
    className: "styles.banner__title_size_l",
  };

  const imagesMock = [
    { id: 1, src: "/tablet.png", number: "500+", name: "Listings" },
    { id: 2, src: "/user.png", number: "100+", name: "Users" },
    { id: 3, src: "/server.png", number: "30+", name: "Servers" },
  ];

  return (
    <main className={styles.main}>
      <Header actions={actions} />
      {/* BANNER */}
      <div className="banner__section">
        <div className="banner__section-block">
          <Banner
            title={bannerText.title}
            description={bannerText.description}
            className={bannerText.className}
          />
          <Button />
        </div>
        <img src="/illustration.png" />
      </div>
      {/* INFO */}
      <div className={styles.info__section}>
        <Info details={imagesMock} text={"randommm"} />
      </div>
    </main>
  );
}
