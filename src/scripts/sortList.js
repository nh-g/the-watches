export function sortByString(array, key) {
  const sortedList = [...array].sort((a, b) => {
    // make the strings case insensitive
    const stringA = a[key].toUpperCase();
    const stringB = b[key].toUpperCase();

    return stringA > stringB ? 1 : -1;
  });
  return sortedList;
}

export function sortByDate(array, key) {
  return [...array].sort(
    (a, b) => Date.parse(a[key]) -Date.parse(b[key])
  );
}

