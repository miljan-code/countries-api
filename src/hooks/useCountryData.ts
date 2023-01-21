import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchCountry = async (countryName: string) => {
  const country = countryName.split('-').join(' ');

  const data = await axios.get(
    `https://restcountries.com/v3.1/name/${country}`
  );
  return data.data;
};

export const useCountryData = (countryName: string) => {
  return useQuery({
    queryKey: ['country', countryName],
    queryFn: () => fetchCountry(countryName),
  });
};
