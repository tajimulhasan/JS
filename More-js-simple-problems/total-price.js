const products = [ 
    {name: 'laptop', price: 32000 },
    {name: 'mobile', price: 32000 },
    {name: 'watch', price: 32000 },
    {name: 'car', price: 32000 },
    {name: 'mashine', price: 32000 },
    {name: 'iphone', price: 32000 }
];

let totalPrice = 0;
for(const product of products){
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);

