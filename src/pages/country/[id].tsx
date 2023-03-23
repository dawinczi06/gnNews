import { NextPage } from "next";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";
import { countriesList } from "../../data/CountriesList";
import { useEffect, useMemo, useState } from "react";
import Spinner from "../../components/Spinner";
import NewsTile from "../../components/NewsTile";
import Modal from "../../components/Modal";
import NewsModal from "../../components/NewsModal";
import { useDispatch, useSelector } from "react-redux";
import { newsCountUpdate, RootState } from "../../store";
import NewsListItem from "../../components/NewsListItem";

const CountryPage: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const [data, setData] = useState<ResponseDto | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpened, setIsModalOpened] = useState<NewsDto | undefined>(
    undefined
  );

  const state = useSelector((state: RootState) => state.isNewsGrid);
  const dispatch = useDispatch();

  const country = useMemo(() => {
    return countriesList.find((v) => v.name == id)?.code;
  }, [id]);

  useEffect(() => {
    if (country) {
      setIsLoading(true);
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=50&apiKey=54e1b9d5e0c545ecb2d0707ba1276df8`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          dispatch(newsCountUpdate(data.totalResults));
        })
        .finally(() => setIsLoading(false));
    }
  }, [country]);

  return (
    <>
      <div className="flex flex-col md:flex-row flex-1 max-w-screen-2xl mx-auto h-full w-full py-10">
        <Sidebar />
        <div className="flex flex-col flex-1 h-full mt-5 md:mt-0">
          {data ? (
            <>
              {data.totalResults > 0 ? (
                <>
                  {state ? (
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {data.articles.map((item) => (
                        <NewsTile
                          key={item.title}
                          onAction={() => setIsModalOpened(item)}
                          title={item.title}
                          source={item.source.name}
                          publishedAt={item.publishedAt}
                          img={item.urlToImage}
                        />
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-3 divide-y">
                      {data.articles.map((item) => (
                        <NewsListItem
                          onAction={() => setIsModalOpened(item)}
                          key={item.title}
                          title={item.title}
                          source={item.source.name}
                          publishedAt={item.publishedAt}
                        />
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <div className="text-center">No results</div>
              )}
            </>
          ) : (
            <div className="flex justify-center w-full">
              {!isLoading ? (
                <div className="text-center">
                  <h2>Oops!</h2>
                  <p>Something went wrong!</p>
                </div>
              ) : (
                <Spinner className="h-3 fill-current text-gray-300" />
              )}
            </div>
          )}
        </div>
      </div>
      {isModalOpened && (
        <Modal>
          <NewsModal data={isModalOpened} setIsModalOpened={setIsModalOpened} />
        </Modal>
      )}
    </>
  );
};

export default CountryPage;

/* usually types/interfaces declarations lives in other files, but there was no reason to make it for this task*/
export type ResponseDto = {
  status: string;
  totalResults: number;
  articles: NewsDto[];
};

export type NewsDto = {
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
