function LargestElement(numbers){
    let largesT = 0;
    for(let i = 0; i < numbers.length; i++){
        const elements = numbers[i];
       if(elements > largesT){
        largesT = elements;
       }
    }
    return largesT;
}



const Ages = [12, 26, 24, 51, 45];
const oldAges = LargestElement(Ages);
