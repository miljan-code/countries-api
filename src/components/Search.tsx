import { useContext, useRef } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const { setSearchTerm, setFetchType, setPage } = useContext(CountriesContext);

  const searchRef = useRef<HTMLInputElement | null>(null);

  const searchCountryHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchRef.current || searchRef.current.value === '') return;

    setPage(1);
    setSearchTerm(searchRef.current.value);
    setFetchType('search');
    searchRef.current.value = '';
  };

  return (
    <form onSubmit={searchCountryHandler} className="relative">
      <FaSearch className="absolute top-[50%] translate-y-[-50%] left-[2rem]" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="pl-[5.5rem] w-full p-4 dark:bg-blue rounded text-[1.4rem] sm:w-[40rem] shadow-whole dark:shadow-md focus:outline-none font-light"
        ref={searchRef}
      />
    </form>
  );
};

export default Search;
