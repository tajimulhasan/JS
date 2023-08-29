const names = ['abul', 'babul', 'lavlu', 'kabul', 'abul', 'mabul', 'abul', 'abul', 'lavlu', 'abul', 'robul', 'lavlu', 'abul',  'abul',];
function removeDuplicate(names) {
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const element = names[i];
        // console.log(element);
    }
    for(const element of names){
        console.log(element);
    }
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);