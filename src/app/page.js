import styles from "./page.module.scss";
import 'normalize.css/normalize.css';
import Header from "./components/Header";
import Button from "./components/Button";

export default function Home() {
  const actions=[
    {id:1, title:"Features"},
    {id:2, title:"Pricing"},
    {id:3, title:"Testimonials"},
    {id:4, title:"Projects"}
  ]
  return (
    <main className={styles.main}>
      <Header actions={actions}/>
      <Button/>
    </main>
  );
}
