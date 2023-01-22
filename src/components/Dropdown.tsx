import { useState, useContext, useRef, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { CountriesContext } from '../context/CountriesContext';
import { RegionType } from '../models/types';
import { capitalize } from '../services/helpers';
import { DropdownItem } from './';

const Dropdown = () => {
  const [showOptions, setShowOptions] = useState(false);

  const regionRef = useRef<HTMLDivElement | null>(null);

  const { region, setRegion, setFetchType, setPage } =
    useContext(CountriesContext);

  const regions: RegionType[] = [
    'africa',
    'america',
    'asia',
    'europe',
    'oceania',
    'world',
  ];

  const handleClickOutside = (e: MouseEvent) => {
    if (regionRef.current && !regionRef.current.contains(e.target as Node)) {
      setShowOptions(false);
    }
  };

  const changeRegionHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const newRegion = e.currentTarget.innerHTML;
    if (newRegion !== region) setPage(1);
    setRegion(newRegion as RegionType);
    if (newRegion === 'World') return setFetchType('all');
    setFetchType('region');
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [regionRef]);

  return (
    <div ref={regionRef} className="relative w-[17rem]">
      <div
        onClick={() => setShowOptions(prev => !prev)}
        className="flex justify-between items-center gap-[2rem] px-[1.5rem] py-[1.25rem] dark:bg-blue rounded shadow-whole dark:shadow-md cursor-pointer font-light"
      >
        <p className="text-[1.4rem]">
          {!region ? 'Filter by Region' : capitalize(region)}
        </p>
        <FaArrowDown className="text-[1.2rem]" />
      </div>
      {showOptions && (
        <ul className="absolute w-full bg-white dark:bg-blue rounded mt-2 flex flex-col gap-2 cursor-pointer py-3 font-light text-[1.4rem] shadow-whole dark:shadow-md">
          {regions.map(region => (
            <DropdownItem
              key={crypto.randomUUID()}
              changeRegionHandler={changeRegionHandler}
              region={region}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
