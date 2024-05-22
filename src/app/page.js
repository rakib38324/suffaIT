import Image from "next/image";
import Layout from "../../components/layout";
import Banner from "../../components/banner";

export default function Home() {
  return (
    <Layout pageTitle={'Home'} >
      <Banner />
    </Layout>
  );
}
