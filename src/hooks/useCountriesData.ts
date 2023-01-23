import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { FetchType, RegionType } from '../models/types';

const fetchCountries = async () => {
  const data = await axios.get('https://restcountries.com/v3.1/all');
  return data.data;
};

const fetchByRegion = async (region: RegionType) => {
  const data = await axios.get(
    `https://restcountries.com/v3.1/region/${region}`
  );
  return data.data;
};

const fetchByName = async (countryName: string) => {
  const data = await axios.get(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  return data.data;
};

const getAllCountriesData = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });
};

const getByRegionCountryData = (region: RegionType) => {
  return useQuery({
    queryKey: ['region', region],
    queryFn: () => fetchByRegion(region),
  });
};

const getByNameCountryData = (countryName: string) => {
  return useQuery({
    queryKey: ['name', countryName],
    queryFn: () => fetchByName(countryName),
  });
};

export const useCountriesData = (
  fetchType: FetchType,
  region: RegionType,
  countryName = ''
) => {
  if (fetchType === 'region') return getByRegionCountryData(region);
  else if (fetchType === 'search') return getByNameCountryData(countryName);
  else return getAllCountriesData();
};
