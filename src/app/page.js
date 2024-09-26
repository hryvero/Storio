import styles from "./page.module.scss";
import Header from "./components/Header";
import Button from "./components/Button";
import Banner from "./components/Banner";
import {actions} from '../app/mocks/header'
import { Fragment } from "react";

export default function Home() {

  const bannerText={
    title:<Fragment> Find <strong> all you need </strong> <br/> in  <strong>Storio</strong> platform </Fragment>,
    description:"Listings from different fields - from furnitures to books and electronics.Sign up to see all the listings and find the best match for you.",
    className: "styles.banner__title_size_l"
  }
  return (
    <main className={styles.main}>
      <Header actions={actions}/>
      <Banner title={bannerText.title} description={bannerText.description} className={bannerText.className}/>
      <Button/>
    </main>
  );
}
