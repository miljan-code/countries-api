import { FaMoon, FaSun } from 'react-icons/fa';

type Props = {
  darkMode: {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const Header: React.FC<Props> = ({ darkMode: { darkMode, setDarkMode } }) => {
  return (
    <div className="dark:bg-blue shadow-md">
      <div className="max-w-[120rem] mx-auto flex justify-between py-[2rem]">
        <h1 className="text-[2rem] font-semibold">Where In The World?!</h1>
        {!darkMode && (
          <div
            onClick={() => setDarkMode(prev => !prev)}
            className="flex items-center gap-[.5rem] cursor-pointer"
          >
            <FaMoon />
            <p>Dark Theme</p>
          </div>
        )}
        {darkMode && (
          <div
            onClick={() => setDarkMode(prev => !prev)}
            className="flex items-center gap-[.5rem] cursor-pointer"
          >
            <FaSun />
            <p>Light Theme</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
