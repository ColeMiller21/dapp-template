import SEOMeta from "../components/SEOMeta";
import Landing from "../components/sections/Landing";

const SEOdesc = "Home page of the dApp template";

export default function Home() {
  return (
    <>
      <SEOMeta page="Home" description={SEOdesc} path="/" />
      <Landing />
    </>
  );
}
