export type Continent = {
  id: number;
  name: string;
  short_description: string;
  long_description: string;
  countries_number: number;
  languages: number;
  carrousel_img: string;
  cover_img: string;
  countries: Country[];
}

export type Country = {
  id: number;
  name: string;
  flag: string;
  capital: string;
  image: string;
}


