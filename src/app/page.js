import Image from "next/image";
import Layout from "../../components/layout";
import Banner from "../../components/banner";
import Services from "../../components/services";
import Support from "../../components/support";

export default function Home() {
  return (
    <Layout pageTitle={'Home'} >
      <Banner />
      <Services />
      <Support />
    </Layout>
  );
}
