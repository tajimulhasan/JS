const products = [
    {name: 'iphone 14', price: 76000},
    {name: 'samsung galaxy 15', price: 50000},
    {name: 'dell-laptop', price: 60000},
    {name: 'lenovo yoga laptop', price: 22200},
    {name: 'smart watch samsung', price: 5000},
    {name: 'apple watch', price: 9000},
    {name: 'Asus notebook laptop', price: 85000},
    {name: 'apple macBook', price: 55500},
];


function SearchProducts (products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
          result.push(product);
        }
     
    }
    return result;
}

const matched = SearchProducts(products, 'watch');
console.log(matched);