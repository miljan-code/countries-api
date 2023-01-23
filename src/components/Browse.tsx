import { Dropdown, Search } from './';

const Browse = () => {
  return (
    <div className="max-w-[120rem] mx-auto py-[2rem] ss:py-[4rem] px-[2rem] xl:px-0 flex flex-col ss:flex-row ss:items-center justify-between gap-5 ss:gap-0">
      <Search />
      <Dropdown />
    </div>
  );
};

export default Browse;
