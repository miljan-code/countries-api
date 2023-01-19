import { useState } from 'react';
import { Header } from './components';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white text-blackBlue dark:bg-darkBlue dark:text-white min-h-[100vh]">
        <Header />
      </div>
    </div>
  );
};

export default App;
