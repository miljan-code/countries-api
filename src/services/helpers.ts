export const capitalize = (str: string): string => {
  return str.split('').at(0)?.toUpperCase() + str.slice(1);
};

export const getCountryData = (data: any) => {
  const [nativeNameKey] = Object.keys(data.name.nativeName);
  const nativeName =
    data.name.nativeName[nativeNameKey].official.length > 31
      ? data.name.nativeName[nativeNameKey].official.slice(0, 31) + '...'
      : data.name.nativeName[nativeNameKey].official;

  const countryName = data.name.official;

  const population = data.population.toLocaleString() || 'Unknown';

  const region = data.region || 'Unknown';

  const subRegion = data.subregion || 'Unknown';

  const [capital] = data.capital || ['Unknown'];

  const [tld] = data.tld || ['/'];

  const currencies = data.currencies
    ? Object.entries(data.currencies)
        .map((cur: any[]) => cur[1].name)
        .join(', ')
    : 'Unknown';

  let langArr: string[] = [];
  for (const [_, value] of Object.entries(data.languages)) {
    langArr.push(value as string);
  }
  const languages = langArr.join(', ');

  let borders: string[] = data.borders || [];

  return {
    nativeName,
    countryName,
    population,
    region,
    subRegion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  };
};
