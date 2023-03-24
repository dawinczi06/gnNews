import { FC } from "react";
import Flag from "react-world-flags";
import cx from "classnames";

import Link from "next/link";
import { useRouter } from "next/router";
import { countriesList } from "../data/CountriesList";
import { countryRoutes } from "../routes/country.routes";
import useIseMobile from "../hooks/isMobile";

const Sidebar: FC = () => {
  const router = useRouter();
  const isMobile = useIseMobile(768);

  const isActive = (route: string) => {
    const formatRoute = router.asPath.replace(/%20/g, " ");
    return formatRoute == route;
  };

  return (
    <aside className="md:w-60 shrink-0 h-full md:sticky top-[104px]">
      <div>Select country:</div>
      <ul className="grid grid-cols-4 md:flex md:flex-col flex-wrap items-center md:items-start md:space-y-4 mt-5">
        {countriesList.map((country) => (
          <li key={country.code} className="pr-4 pb-3">
            <Link
              href={countryRoutes.country.path(country.name)}
              className={cx(
                "flex items-center space-x-2 hover:font-bold hover:opacity-100",
                isActive(countryRoutes.country.path(country.name))
                  ? "font-bold opacity-100"
                  : "opacity-70"
              )}
            >
              <Flag
                code={country.code}
                className="w-10 border border-gray-400"
              />
              <p className="capitalize">
                {isMobile ? country.code : country.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
