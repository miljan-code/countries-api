export const capitalize = (str: string): string => {
  return str.split('').at(0)?.toUpperCase() + str.slice(1);
};
