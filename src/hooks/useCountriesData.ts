import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FetchType, RegionType } from '../models/types';

const fetchCountries = () =>
  axios.get('https://restcountries.com/v3.1/all').then(data => data.data);

const fetchByRegion = (region: RegionType) =>
  axios
    .get(`https://restcountries.com/v3.1/region/${region}`)
    .then(data => data.data);

const fetchByName = (countryName: string) =>
  axios
    .get(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(data => data.data);

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
  if (fetchType === 'all') {
    const { data, isLoading, isError, error } = getAllCountriesData(fetchType);
    return { data, isLoading, isError, error };
  } else if (fetchType === 'region') {
    const { data, isLoading, isError, error } = getByRegionCountryData(
      region,
      fetchType
    );
    return { data, isLoading, isError, error };
  } else if (fetchType === 'search') {
    const { data, isLoading, isError, error } = getByNameCountryData(
      countryName,
      fetchType
    );
    return { data, isLoading, isError, error };
  } else {
    return {
      data: undefined,
      isLoading: undefined,
      isError: undefined,
      error: undefined,
    };
  }
};
