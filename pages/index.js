import SEOMeta from "../components/SEOMeta";
import Landing from "../components/sections/Landing";
import styles from "../styles/Home.module.css";

const SEOdesc = "Home page of the dApp template";

export default function Home() {
  return (
    <>
      <SEOMeta page="Home" description={SEOdesc} path="/" />
      <Landing />
    </>
  );
}
