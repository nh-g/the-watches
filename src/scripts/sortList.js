export function sortByString(array, key) {
  const sortedList = [...array].sort((a, b) => {
    // make the strings case insensitive
    const stringA = a[key].toUpperCase();
    const stringB = b[key].toUpperCase();

    return stringA > stringB ? 1 : -1;
  });
  return sortedList;
}

export function sortByNumberDescending(array, key1, key2) {
  return [...array].sort((a, b) => b[key1][key2] - a[key1][key2]);
}
export function sortByNumberAscending(array, key1, key2) {
  return [...array].sort((a, b) => a[key1][key2] - b[key1][key2]);
}
