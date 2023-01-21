import { RegionType } from '../models/types';
import { capitalize } from '../services/helpers';

type DropdownItemProps = {
  changeRegionHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
  region: RegionType;
};

const DropdownItem = ({ changeRegionHandler, region }: DropdownItemProps) => {
  return (
    <li
      onClick={changeRegionHandler}
      className="py-[.25rem] px-[1.5rem] hover:bg-gray-300 dark:hover:bg-slate-500 transition-all"
    >
      {capitalize(region)}
    </li>
  );
};

export default DropdownItem;
