export const capitalize = (str: string): string => {
  return str.split('').at(0)?.toUpperCase() + str.slice(1);
};

export const toParams = (str: string): string => {
  return str.toLowerCase().split(' ').join('-');
};

export const shorten = (str: string, to: number): string => {
  return str.slice(0, to) + '...';
};

export const transformCountryData = (data: any) => {
  const [nativeNameKey] = Object.keys(data.name.nativeName);
  const nativeName =
    data.name.nativeName[nativeNameKey].official.length > 31
      ? shorten(data.name.nativeName[nativeNameKey].official, 31)
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

  const borders: string[] = data.borders || [];

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
