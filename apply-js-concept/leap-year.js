function leapYear (year){
    if(year %4 == 0){
        return true;
    }
   else{
    return false;
   }
}

const myYear = 1905;
const ismyYearisleapYear = leapYear(myYear);
console.log('hosse na kanooo...', ismyYearisleapYear);

const yourYear = 2032;
const isYourYearisleapYear = leapYear(yourYear);
console.log('Is your year will be leap year? I think it will.. hahahah', isYourYearisleapYear);