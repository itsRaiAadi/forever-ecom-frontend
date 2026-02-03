import React, { useEffect, useState } from "react";
import BannerSection from "./BannerSection";
import LatestCollectionSection from "./LatestCollectionSection";
import BestSeller from "./BestSeller";
import EmailSection from "./EmailSection";
import PolicySection from "./PolicySection";
import { getHomePageData } from "../api/homePageApi.js";

const Hero = () => {
  const [latest, setLatest] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const data = await getHomePageData();
        setLatest(data.latestCollections);
        setBestSellers(data.bestSellers);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

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
