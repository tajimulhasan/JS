const products = [
    {name: 'iphone 14', price: 76000},
    {name: 'samsung galaxy 15', price: 50000},
    {name: 'dell-laptop', price: 70000},
    {name: 'lenovo yoga laptop', price: 22200},
    {name: 'smart watch samsung', price: 5000},
    {name: 'apple watch', price: 4000},
    {name: 'Asus notebook laptop', price: 9000},
    {name: 'apple macBook', price: 5500},
];

//break kore dibeeeeeeeee

// for(const product of products){
//     if(product.price < 5000){
//         break;
//     }
//     console.log(product);
// }



// continue means skip 10000 er upore sob continue korechee


for(const product of products){
    if (product.price < 10000){
        continue;
    }
    console.log(product);
}

console.log('After the loop')

