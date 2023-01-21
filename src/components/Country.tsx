import { useParams } from 'react-router-dom';
import { useCountryData } from '../hooks/useCountryData';

const Country = () => {
  const { country } = useParams();

  const { data, isLoading, isError, error } = useCountryData(country as string);

  if (isLoading) return null;

  return <div>{data[0]?.name?.common}</div>;
};

export default Country;
