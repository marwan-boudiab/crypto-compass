"use client";

import { useState, useEffect } from "react";
import millify from "millify";
import { fetchCryptos } from "@/lib/actions";
import Image from "next/image";
// import { Input } from "./ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LoadingSpinner from "./LoadingSpinner ";

const TopCryptos = ({ simplified }) => {
  const count = simplified ? 10 : 100,
    [cryptos, setCryptos] = useState(null);
  // [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   fetchCryptos(count).then((res) => {
  //     const top10CurrentCryptos = res?.data?.coins,
  //       filteredData = top10CurrentCryptos?.filter((coin) =>
  //         coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  //       );
  //     setCryptos(filteredData);
  //   });
  //   fetchCryptos();
  // }, [searchTerm]);

  useEffect(() => {
    fetchCryptos(count).then((res) => {
      setCryptos(res?.data?.coins);
    });
    fetchCryptos();
  }, []);

  if (!cryptos) return <LoadingSpinner />;

  return (
    <>
      {/* <div className="flex flex-wrap gap-8 justify-between items-center my-8"> */}
      <h2 className="h2 sm:h1 text-center my-8">
        Top {count} Current Cryptocurrencies
      </h2>

      {/* <div className="relative flex items-center">
          <Search className="text-secondary absolute left-6" size={20} />
          <Input
            placeholder="Search for cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}
      {/* </div> */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-8 my-4">
        {cryptos?.map((currency) => (
          <Card className="font-bold max-w-72 min-w-72">
            <CardHeader>
              <Badge variant="card">
                <div className="flex gap-2 items-center">
                  <p>{currency.rank}</p>
                  <p>{currency.name}</p>
                  <Image
                    src={currency.iconUrl}
                    alt={`icon for ${currency.name} cryptocurrency`}
                    width={32}
                    height={32}
                    priority
                  />
                </div>
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <p>Price</p>
                <p>{`$ ${millify(currency.price, {
                  precision: 3,
                  space: true,
                })}`}</p>
              </div>
              <div className="flex justify-between">
                <p>Market Cap</p>
                <p>{`$ ${millify(currency.marketCap, {
                  precision: 3,
                  space: true,
                })}`}</p>
              </div>
              <div className="flex justify-between">
                <p>Change</p>
                <p>{`${millify(currency.change, { precision: 3 })} %`}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TopCryptos;
