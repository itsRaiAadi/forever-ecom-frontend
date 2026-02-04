import { createContext, useState, useEffect } from "react";
import { getHomePageData } from "../api/homePageApi.js";
export const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
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

  return (
    <HomePageContext.Provider value={{ latest, bestSellers, loading }}>
      {children}
    </HomePageContext.Provider>
  );
};
