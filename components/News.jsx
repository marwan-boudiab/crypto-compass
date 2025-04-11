"use client";

import { formatDate } from "@/utils/functions";
import { fetchCryptoNews } from "@/lib/actions";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner ";

const News = () => {
  const [cryptoNews, setCryptoNews] = useState(null);

  useEffect(() => {
    fetchCryptoNews().then((res) => {
      setCryptoNews(res);
    });
    fetchCryptoNews();
  }, []);

  if (!cryptoNews)
    return (
      <div className="h-screen">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="container">
      <h1 className="h1">Latest News from the World of Crypto</h1>
      <div className="mt-16 flex flex-wrap justify-between gap-y-16">
        {cryptoNews?.data
          ?.filter(
            (news) =>
              news.url &&
              news.thumbnail &&
              news.title &&
              news.description &&
              news.createdAt
          )
          .map((news) => (
            <Link href={news.url} target="_blank">
              <Card className="bg-white text-muted opacity-90 hover:opacity-100 hover:hover:cursor-pointer font-bold max-w-sm min-w-max-w-sm p-1 ">
                <Image
                  src={news.thumbnail}
                  width={384}
                  height={384}
                  className="rounded-t-[1.8rem] w-fit"
                />
                <CardHeader>
                  <p>{String(news.title)}</p>
                </CardHeader>
                <CardContent>
                  <p>{String(news.description)}</p>
                </CardContent>
                <CardFooter>
                  <p>{String(formatDate(news.createdAt))}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default News;
