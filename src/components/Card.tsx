import { Link } from 'react-router-dom';

type CardProps = {
  countryName: string;
  population: number;
  region: string;
  capital: string;
  image: string;
};

const Card = ({
  countryName,
  population,
  region,
  capital,
  image,
}: CardProps) => {
  const URL = countryName.toLowerCase().split(' ').join('-');

  return (
    <div className="rounded min-h-[30rem] overflow-hidden shadow-whole dark:shadow-md">
      <Link to={`/country/${URL}`}>
        <img src={image} className="w-full h-[15rem] object-cover" />
      </Link>
      <div className="h-full dark:bg-blue p-[2rem]">
        <Link to={`/country/${URL}`}>
          <h2 className="mb-[2rem] inline-block">{countryName}</h2>
        </Link>
        <div className="text-[1.4rem] font-light">
          <p>
            Population: <span>{population.toLocaleString('en-US')}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
