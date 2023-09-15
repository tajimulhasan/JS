const products = [
    'Dell hardcore i22 333GB laptop',
    'iphone 1TB camera flashLight phone',
    'yellow laptop with black camera',
    '2x34 Lenovo commercial yoga laptop',
    'HTC low price phone',
    'purple color phone with laptop'
];
const serarching = 'laptop';

//indexOf

const output = [];
for(const product of products){
     if(product.indexOf(serarching) != -1){
        output.push(product)
     }
}