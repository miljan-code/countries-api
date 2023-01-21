import { Dropdown, Search } from './';

const Browse = () => {
  return (
    <div className="max-w-[120rem] mx-auto py-[4rem] flex items-center justify-between">
      <Search />
      <Dropdown />
    </div>
  );
};

export default Browse;
