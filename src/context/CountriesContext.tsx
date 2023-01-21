import { createContext, useState } from 'react';
import { FetchType, RegionType } from '../models/types';

type CountriesCtxType = {
  searchTerm: string;
  region: RegionType;
  fetchType: FetchType;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setRegion: React.Dispatch<React.SetStateAction<RegionType>>;
  setFetchType: React.Dispatch<React.SetStateAction<FetchType>>;
};

type CountriesCtxProps = {
  children: React.ReactNode;
};

export const CountriesContext = createContext<CountriesCtxType>(
  {} as CountriesCtxType
);

export const CountriesProvider = ({ children }: CountriesCtxProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState<RegionType>('' as RegionType);
  const [fetchType, setFetchType] = useState<FetchType>('all');

  return (
    <CountriesContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        region,
        setRegion,
        fetchType,
        setFetchType,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
