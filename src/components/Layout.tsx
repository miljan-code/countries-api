import { useState } from 'react';
import { Header, Footer } from './';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white text-blackBlue dark:bg-darkBlue dark:text-white min-h-[100vh]">
        <Header darkMode={{ darkMode, setDarkMode }} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
