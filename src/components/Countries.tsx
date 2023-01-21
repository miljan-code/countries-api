import { useContext, useEffect } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { useCountriesData } from '../hooks/useCountriesData';

const Countries = () => {
  const { fetchType, region, searchTerm } = useContext(CountriesContext);

  const { data, isLoading, isError, error } = useCountriesData(
    fetchType,
    region,
    searchTerm
  );

  return (
    <>
      <div>
        {data?.map((c: any) => (
          <p key={crypto.randomUUID()}>{c.name.official}</p>
        ))}
      </div>
    </>
  );
};

export default Countries;
