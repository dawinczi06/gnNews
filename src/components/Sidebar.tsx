import { FC } from "react";
import Flag from "react-world-flags";
import cx from "classnames";

import Link from "next/link";
import { useRouter } from "next/router";
import { countriesList } from "../data/CountriesList";
import { countryRoutes } from "../routes/country.routes";

const Sidebar: FC = () => {
  const router = useRouter();
  const isActive = (route: string) => {
    const formatRoute = router.asPath.replace(/%20/g, " ");
    return formatRoute == route;
  };

  return (
    <aside className="w-60 shrink-0 h-full">
      <div>Select country:</div>
      <ul className="space-y-4 mt-5">
        {countriesList.map((country) => (
          <li key={country.code}>
            <Link
              href={countryRoutes.country.path(country.name)}
              className={cx(
                "flex items-center space-x-2 hover:font-bold",
                isActive(countryRoutes.country.path(country.name)) &&
                  "font-bold"
              )}
            >
              <Flag
                code={country.code}
                className="w-10 border border-gray-400"
              />
              <p className="capitalize">{country.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
