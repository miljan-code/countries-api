import { useState } from 'react';
import { Header, Browse, Countries } from './components';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white text-blackBlue dark:bg-darkBlue dark:text-white min-h-[100vh]">
        <Header darkMode={{ darkMode, setDarkMode }} />
        <Browse />
        <Countries />
      </div>
    </div>
  );
};

export default App;
