import styles from "./page.module.scss";
import Header from "./components/Header";
import Button from "./components/Button";
import Banner from "./components/Banner";
import { actions } from "../app/mocks/header";
import { Fragment } from "react";
import Info from "./components/Info/Info";

export default function Home() {
  const bannerText = [
    {
      id: 1,
      title: (
        <>
          Find{" "}
          <span>
            <strong> all you need </strong>
          </span>{" "}
          <br /> in
          <span>
            {" "}
            <strong> Storio </strong>
          </span>
          platform
        </>
      ),
      description: (
        <>
          Listings from different fields - from furnitures to books and
          electronics.
          <br /> Sign up to see all the listings and find the best match for
          you.
        </>
      ),
      className: "large",
    },
    {
      id: 2,
      title: (
        <>
          Our awesome apps <br />
          are loved worldwide
        </>
      ),
      description: (
        <>
          We care about your users and we always pay huge attention to create a
          <br />
          product that people <strong>love</strong> to use every day.
        </>
      ),
      className: "medium",
    },
  ];

  const imagesMock = [
    { id: 1, src: "/tablet.png", number: "500+", name: "Listings" },
    { id: 2, src: "/user.png", number: "100+", name: "Users" },
    { id: 3, src: "/server.png", number: "30+", name: "Servers" },
  ];

  return (
    <main className={styles.main}>
      <Header actions={actions} />
      {/* BANNER */}
      <div className={styles.banner__section}>
        <div className={styles.banner__section_block}>
          <Banner bannerText={bannerText[0]} />
          <Button />
        </div>
        <img src="/illustration.png" />
      </div>
      {/* INFO */}
      <div className={styles.info__section}>
        <Info details={imagesMock} />
      </div>
      {/* BANNER */}
      <div className={styles.location__section}>
        <Banner bannerText={bannerText[1]} textLocation="center" />
        <img src="/location.png" />
      </div>
    </main>
  );
}
