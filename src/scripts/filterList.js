export function filterList(array, key, query){
    const filteredList = array.filter((item) => 
    item[key].toUpperCase().includes(query.toUpperCase()));
    
    return filteredList;
}
