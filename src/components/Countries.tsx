import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { useCountriesData } from '../hooks/useCountriesData';
import { Card, Loading } from './';

const Countries = () => {
  const { fetchType, region, searchTerm, page, itemsPerPage, setPage } =
    useContext(CountriesContext);

  const { data, isLoading, isError, error } = useCountriesData(
    fetchType,
    region,
    searchTerm
  );

  if (isLoading) return <Loading />;

  const loadMoreData = data?.slice(0, page * itemsPerPage);

  return (
    <>
      <div className="max-w-[120rem] px-[2rem] xl:px-0 mx-auto grid ss:grid-cols-2 md:grid-cols-4 gap-[5rem]">
        {loadMoreData?.map((country: any) => (
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
      {page * itemsPerPage < data?.length && (
        <div className="text-center">
          <p
            onClick={() => setPage(page + 1)}
            className="cursor-pointer mt-[4rem] dark:bg-blue inline-block px-[1rem] py-[.5rem] rounded mb-[4rem] shadow-whole dark:shadow-sm"
          >
            Load More
          </p>
        </div>
      )}
    </>
  );
};

export default Countries;
