"use client";

import millify from "millify";
import { fetchCryptoFullList } from "@/lib/actions";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LoadingSpinner from "./LoadingSpinner ";
import { OPTIONS } from "@/utils/constants";

const Cryptocurrencies = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState();

  useEffect(() => {
    fetchCryptoFullList().then((res) => {
      setCryptoCurrencies(res?.data?.coins);
    });
    fetchCryptoFullList();
  }, []);

  if (!cryptoCurrencies)
    return (
      <div className="h-screen">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="sm:container">
      <h2 className="h2 text-center my-4 sm:my-8">
        Top 50 Cryptocurrencies By Market Cap
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cryptoCurrencies.map((currency) => (
            <TableRow>
              <TableCell className="flex gap-x-2 items-center">
                {currency.rank}
                <img src={currency.iconUrl} className="sm:size-8 size-6" />
                <div>
                  <p>{currency.name}</p>
                  <p>{currency.symbol}</p>
                </div>
              </TableCell>
              <TableCell>
                <p>{`$ ${millify(currency.price, OPTIONS)}`}</p>
              </TableCell>
              <TableCell>
                <p>{`$ ${millify(currency.marketCap, OPTIONS)}`}</p>
              </TableCell>
              <TableCell>
                <p>{`${millify(currency.change, { precision: 3 })} %`}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Cryptocurrencies;
