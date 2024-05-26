import Image from "next/image";
import Layout from "../../components/layout";
import Banner from "../../components/banner";
import Services from "../../components/services";
import Support from "../../components/support";
import OurClient from "../../components/ourClient";
import SuffaItHelp from "../../components/suffaitHelp";

export default function Home() {
  return (
    <Layout pageTitle={'Home'} >
      <Banner />
      <Services />
      <Support />
      <OurClient />
      <SuffaItHelp />
    </Layout>
  );
}
