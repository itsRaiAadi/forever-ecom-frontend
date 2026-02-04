import BannerSection from "./BannerSection";
import LatestCollectionSection from "./LatestCollectionSection";
import BestSeller from "./BestSeller";
import EmailSection from "./EmailSection";
import PolicySection from "./PolicySection";
import { HomePageContext } from "../context/HomePageContext";
import { useContext } from "react";

const Hero = () => {
  const { latest, bestSellers, loading } = useContext(HomePageContext);
  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex flex-col gap-10">
      <BannerSection />
      <LatestCollectionSection products={latest} />
      <BestSeller products={bestSellers} />
      <PolicySection />
      <EmailSection />
    </div>
  );
};

export default Hero;
