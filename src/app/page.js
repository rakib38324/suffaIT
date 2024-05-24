import Image from "next/image";
import Layout from "../../components/layout";
import Banner from "../../components/banner";
import Services from "../../components/services";

export default function Home() {
  return (
    <Layout pageTitle={'Home'} >
      <Banner />
      <Services />
    </Layout>
  );
}
