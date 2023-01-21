import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { useCountriesData } from '../hooks/useCountriesData';
import { Card } from './';

const Countries = () => {
  const { fetchType, region, searchTerm } = useContext(CountriesContext);

  const { data, isLoading, isError, error } = useCountriesData(
    fetchType,
    region,
    searchTerm
  );

  return (
    <>
      <div className="max-w-[120rem] mx-auto grid grid-cols-4 gap-[5rem]">
        {data?.map((country: any) => (
          <Card
            key={crypto.randomUUID()}
            countryName={country?.name?.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            image={country.flags.png}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
