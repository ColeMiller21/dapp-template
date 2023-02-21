import SEO from "../components/SEO";
import Landing from "../components/sections/Landing";

const SEOdesc = "Home page of the dApp template";

export default function Home() {
  return (
    <>
      <SEO page="Home" description={SEOdesc} path="/" />
      <Landing />
    </>
  );
}
