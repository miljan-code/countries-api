import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';
import { FaMoon, FaSun } from 'react-icons/fa';

type Props = {
  darkMode: {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const Header: React.FC<Props> = ({ darkMode: { darkMode, setDarkMode } }) => {
  const { setFetchType, setRegion, setPage } = useContext(CountriesContext);

  const refetchLogoHandler = () => {
    setRegion('world');
    setFetchType('all');
    setPage(1);
  };

  return (
    <div className="dark:bg-blue shadow-md">
      <div className="max-w-[120rem] mx-auto flex justify-between p-[2rem] xl:px-0">
        <Link onClick={refetchLogoHandler} to="/">
          <h1 className="text-[2rem] font-semibold">I 💘 Geography</h1>
        </Link>
        {!darkMode && (
          <div
            onClick={() => setDarkMode(prev => !prev)}
            className="flex items-center gap-[.5rem] cursor-pointer"
          >
            <FaMoon className="text-[2.4rem] ss:text-[1.6rem]" />
            <p className="hidden ss:inline-block">Dark Theme</p>
          </div>
        )}
        {darkMode && (
          <div
            onClick={() => setDarkMode(prev => !prev)}
            className="flex items-center gap-[.5rem] cursor-pointer"
          >
            <FaSun className="text-[2.4rem] ss:text-[1.6rem]" />
            <p className="hidden ss:inline-block">Light Theme</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
