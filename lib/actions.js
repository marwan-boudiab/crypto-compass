"use server";

async function fetchData(url, options) {
  try {
    const response = await fetch(url, options); // 
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
}

const coinrankingOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.COINRANKING_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.COINRANKING_RAPID_API_HOST,
  },
  // cache: "force-cache", // default
  // cache: "no-store",
  // next: {revalidate: 3600 }, // refetch data every 1 hour
};

const fetchCryptos = async (count) => await fetchData(`${process.env.COINRANKING_RAPID_API_URL}coins?limit=${count}`, coinrankingOptions);
const fetchCryptoGlobalStats = async () => await fetchData(`${process.env.COINRANKING_RAPID_API_URL}stats`, coinrankingOptions);
const fetchCryptoFullList = async () => await fetchData(`${process.env.COINRANKING_RAPID_API_URL}coins`, coinrankingOptions);


const newsOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.NEWS_RAPID_API_KEY,
		'X-RapidAPI-Host': process.env.NEWS_RAPID_API_HOST
	}
};

const fetchCryptoNews = async () => await fetchData(process.env.NEWS_RAPID_API_URL, newsOptions);
export { fetchCryptos, fetchCryptoGlobalStats, fetchCryptoFullList, fetchCryptoNews };