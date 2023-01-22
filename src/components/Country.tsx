import { useParams, useNavigate } from 'react-router-dom';
import { useCountryData } from '../hooks/useCountryData';
import { getCountryData } from '../services/helpers';

const Country = () => {
  const { country } = useParams();
  const navigate = useNavigate();

  const { data, status, borderNames } = useCountryData(country as string);

  if (status === 'loading') return;

  const {
    countryName,
    nativeName,
    population,
    region,
    subRegion,
    capital,
    tld,
    currencies,
    languages,
  } = getCountryData(data[0]);

  return (
    <div className="max-w-[120rem] mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="my-[5rem] px-[2rem] py-[.5rem] dark:bg-blue rounded shadow-whole dark:shadow-md"
      >
        &larr; Back
      </button>
      <div className="flex items-center gap-[5rem]">
        <div className="flex-1">
          <img src={data[0].flags.svg} className="w-[90%] max-h-[35rem]" />
        </div>
        <div className="flex-1 flex flex-col pl-[3rem]">
          <h2 className="text-[3rem] mb-[3rem] font-bold leading-[3.5rem]">
            {countryName}
          </h2>
          <ul className="grid grid-rows-5 grid-flow-col text-[1.4rem] font-light">
            <li>
              <span className="font-semibold">Native Name:</span>{' '}
              <span>{nativeName}</span>
            </li>
            <li>
              <span className="font-semibold">Population:</span>{' '}
              <span>{population}</span>
            </li>
            <li>
              <span className="font-semibold">Region:</span>{' '}
              <span>{region}</span>
            </li>
            <li>
              <span className="font-semibold">Sub Region:</span>{' '}
              <span>{subRegion}</span>
            </li>
            <li>
              <span className="font-semibold">Capital:</span>{' '}
              <span>{capital}</span>
            </li>
            <li>
              <span className="font-semibold">Top Level Domain:</span>{' '}
              <span>{tld}</span>
            </li>
            <li>
              <span className="font-semibold">Currencies:</span>{' '}
              <span>{currencies}</span>
            </li>
            <li>
              <span className="font-semibold">Languages:</span>{' '}
              <span>{languages}</span>
            </li>
          </ul>
          <div className="mt-[3rem] flex place-items-center gap-[1rem]">
            <p className="text-[1.4rem]">Border Countries:</p>
            <div className="">
              {borderNames?.map((border: string) => (
                <button
                  key={crypto.randomUUID()}
                  className="dark:bg-blue shadow-whole dark:shadow-sm px-[1.5rem] rounded text-[1.2rem] font-light"
                >
                  {border}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
