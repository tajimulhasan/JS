const phones = [
    {name: 'sumsung s5', price: 49000, camera: 20, storage: 32},
    {name: 'walton m25', price: 25000, camera: 30, storage: 64},
    {name: 'nokia model1200', price: 1000, camera: 45, storage: 4},
    {name: 'mi note12', price: 30000, camera: 50, storage: 16},
    {name: 'realme13', price: 40000, camera: 40, storage: 8},
];

let cheapest = phones[0];
for(const phone of phones) {
    console.log(phone);

    // compare price only 

if (phone.price < cheapest.price) {
    cheapest = phone;
}
}


console.log(cheapest);