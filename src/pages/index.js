import styles from "../styles/Home.module.scss";
import Layout from "../components/MainComponents/Layout/Layout";
import Slider from "../components/Slider/Slider";
import SearchInput from "../components/SearchInput/SearchInput";
import Features from "../components/LatestFeatures/Features";
import Cars from "../components/Cars/Cars";

export default function Home() {
  return (
    <Layout>
      <div className={styles.homecontainer}>
        <Slider />
        {/* input section */}
        <SearchInput />

        <Features />

        <Cars />
      </div>
    </Layout>
  );
}
