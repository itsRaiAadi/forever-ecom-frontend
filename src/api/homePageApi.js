export const getHomePageData = async () => {
  const res = await fetch(import.meta.env.VITE_HOME_PAGE_API);

  if (!res.ok) throw new Error("Failed to fetch home page data !");

  return res.json();
};
