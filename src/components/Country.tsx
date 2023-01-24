import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCountryData } from '../hooks/useCountryData';
import { shorten, transformCountryData } from '../services/helpers';
import { toParams } from '../services/helpers';
import { Loading } from './';

const Country = () => {
  const { country } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError, error, borderNames } = useCountryData(
    country as string
  );

  if (isLoading) return <Loading />;

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
  } = transformCountryData(data[0]);

  return (
    <div className="max-w-[120rem] px-[2rem] xl:px-0 mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="my-[5rem] px-[2rem] py-[.5rem] dark:bg-blue rounded shadow-whole dark:shadow-md"
      >
        &larr; Back
      </button>
      <div className="flex flex-col ms:flex-row items-center gap-[5rem]">
        <div className="flex-1">
          <img
            src={data[0].flags.svg}
            className="mx-auto ms:mx-0 w-[90%] ms:w-[100%] l:w-[90%] max-h-[35rem]"
          />
        </div>
        <div className="flex-1 flex flex-col w-[90%] ms:w-full ms:pl-[3rem]">
          <h2 className="text-[2.4rem] l:text-[3rem] mb-[3rem] font-bold leading-[3.5rem]">
            {countryName}
          </h2>
          <ul className="l:grid grid-rows-5 grid-flow-col text-[1.4rem] font-light">
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
          <div className="mt-[3rem] l:flex place-items-center gap-[1rem]">
            <p className="text-[1.4rem] self-start">Border Countries:</p>
            <div className="flex flex-col ss:grid grid-cols-3 gap-[.5rem] ss:gap-[1rem]">
              {borderNames?.map((border: string) => (
                <Link
                  key={crypto.randomUUID()}
                  to={`/country/${toParams(border)}`}
                >
                  <button className="dark:bg-blue shadow-whole dark:shadow-sm px-[1.5rem] rounded text-[1.2rem] font-light w-full">
                    {border.length > 13 ? shorten(border, 13) : border}
                  </button>
                </Link>
              )) || <span className="font-light text-[1.4rem]">None</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
