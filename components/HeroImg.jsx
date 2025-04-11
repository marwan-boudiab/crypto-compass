import Image from "next/image";
import Badge from "./Badge";
import millify from "millify";
import { fetchCryptoGlobalStats } from "@/lib/actions";

const HeroImg = async () => {
  const data = await fetchCryptoGlobalStats(),
    globalStats = data?.data;

  return (
    <div className="relative sm:left-0 mx-auto sm:scale-100 mt-10 mb-8">
      <div className="-ms-4 sm:ms-0 w-[255px] h-[231px] sm:w-[510px] sm:h-[462px]">
        {/* phone image */}
        <Image
          className="absolute sm:top-2 sm:right-20"
          src="/phone.svg"
          width={440}
          height={500}
        />
        {/* badge 1 */}
        <Badge
          containerStyles="scale-50 sm:scale-100 absolute bottom-[55%] -top-4 -left-12 sm:top-0 sm:left-0"
          badgeCount={globalStats ? globalStats?.totalCoins : "undefined"}
          badgeText="Cryptocurrencies"
        />
        {/* badge 2 */}
        <Badge
          containerStyles="scale-50 sm:scale-100 absolute bottom-[1%] sm:bottom-[10%] -left-4 sm:left-10"
          badgeCount={millify(globalStats?.totalCoins, {
            space: true,
          })}
          badgeText="Coins"
        />
        {/* badge 3 */}
        <Badge
          containerStyles="scale-50 sm:scale-100 absolute top-4 -right-8 sm:top-14 sm:right-10"
          badgeCount={millify(globalStats?.totalExchanges)}
          badgeText="Exchanges"
        />
        {/* badge 4 */}
        <Badge
          containerStyles="scale-50 sm:scale-100 absolute bottom-[52%] sm:bottom-[58%] -left-20 sm:-left-16"
          badgeCount={millify(globalStats?.totalMarketCap, {
            precision: 2,
            space: true,
          })}
          badgeText="Market Cap"
        />
        {/* badge 5 */}
        <Badge
          containerStyles="scale-50 sm:scale-100 absolute bottom-[16%] -right-12 sm:bottom-[25%] sm:right-8"
          badgeCount={millify(globalStats?.total24hVolume, {
            space: true,
          })}
          badgeText="24hr Volume"
        />
        {/* badge 6 */}
        <Badge
          containerStyles="scale-50 sm:scale-100 absolute bottom-[42%] sm:bottom-[50%] -right-20 sm:-right-8"
          badgeCount={millify(globalStats?.totalMarkets, {
            space: true,
          })}
          badgeText="Markets"
        />
      </div>
    </div>
  );
};
export default HeroImg;
