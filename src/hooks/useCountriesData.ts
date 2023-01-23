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

const getAllCountriesData = (fetchType: FetchType) => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    enabled: fetchType === 'all',
  });
};

const getByRegionCountryData = (region: RegionType, fetchType: FetchType) => {
  return useQuery({
    queryKey: ['region', region],
    queryFn: () => fetchByRegion(region),
    enabled: fetchType === 'region',
  });
};

const getByNameCountryData = (countryName: string, fetchType: FetchType) => {
  return useQuery({
    queryKey: ['name', countryName],
    queryFn: () => fetchByName(countryName),
    enabled: fetchType === 'search',
  });
};

export const useCountriesData = (
  fetchType: FetchType,
  region: RegionType,
  countryName = ''
) => {
  if (fetchType === 'region') return getByRegionCountryData(region, fetchType);
  else if (fetchType === 'search')
    return getByNameCountryData(countryName, fetchType);
  else return getAllCountriesData(fetchType);
};
