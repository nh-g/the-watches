export function filterList(array, key1, key2, query){
    if (key2 === "") {
    return array.filter((item) =>
      item[key1]?.toUpperCase().includes(query.toUpperCase())
    );
    }else{
        return array.filter((item) =>
          item[key1]?.[key2]?.toUpperCase().includes(query.toUpperCase())
        );
    }
    
}
