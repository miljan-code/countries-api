import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchCountry = async (countryName: string) => {
  const country = countryName.split('-').join(' ');

  const data = await axios.get(
    `https://restcountries.com/v3.1/name/${country}`
  );
  return data.data;
};

const getBorderCountriesName = async (borders: string[]) => {
  if (!borders) return [];
  if (borders.length <= 0) return borders;

  const bordersArr = await Promise.all(
    borders.map(async border => {
      const data = await axios.get(
        `https://restcountries.com/v3.1/alpha/${border}`
      );
      return data.data;
    })
  );

  return bordersArr.map(border => border[0].name.common);
};

export const useCountryData = (countryName: string) => {
  const { data } = useQuery({
    queryKey: ['country', countryName],
    queryFn: () => fetchCountry(countryName),
  });

  const borders = data?.borders;

  const { status, data: borderNames } = useQuery({
    queryKey: ['borders', countryName],
    queryFn: () => getBorderCountriesName(borders),
    enabled: borders,
  });

  return { data, status, borderNames };
};
