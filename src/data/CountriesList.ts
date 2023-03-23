export type CountriesDto = {
  code: string;
  name: string;
};

/*
We can sort alphabetically here (manually), or just write a hook with sorting function.
For now, I just left it like this.
*/
export const countriesList: CountriesDto[] = [
  { code: "US", name: "united states" },
  { code: "PL", name: "poland" },
  { code: "GB", name: "great britain" },
  { code: "FR", name: "france" },
  { code: "SE", name: "sweden" },
  { code: "IT", name: "italy" },
  { code: "AT", name: "austria" },
];
