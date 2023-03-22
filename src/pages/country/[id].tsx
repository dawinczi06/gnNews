import { NextPage } from "next";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";
import { countriesList } from "../../data/CountriesList";
import { useEffect, useState } from "react";

const CountryPage: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const [data, setData] = useState<NewsDto[] | undefined>();

  const country = countriesList.find((v) => v.name == id)?.code;

  useEffect(() => {
    if (country) {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=54e1b9d5e0c545ecb2d0707ba1276df8`
      )
        .then((response) => response.json())
        .then((data) => setData(data.articles));
    }
  }, [country]);

  return (
    <div className="flex max-w-screen-2xl mx-auto w-full py-10">
      <Sidebar />
      {data ? <div>{data.map((item) => item.author)}</div> : <div></div>}
    </div>
  );
};

export default CountryPage;

type NewsDto = {
  author: string;
  content?: string;
  description?: string;
  publishedAt: Date;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage?: string;
};
