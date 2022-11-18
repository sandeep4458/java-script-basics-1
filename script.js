

//VARIABLE NAME CONVENSIONS

console.log(30 + 40 + 40);

let firstName="sandeep";
let secondName="dileep";

console.log(firstName);
console.log(secondName);
let PI=3.14;
console.log(PI);

//BOOLEAN


let javaScritFun=true;
console.log(javaScritFun);
console.log(typeof true);
console.log(typeof  javaScritFun);
console.log(typeof 23);
console.log(typeof  'sunny');

//dynamic typing

let javaScritFun=true;
console.log(javaScritFun);
 javaScritFun="fly";
 console.log(typeof javaScritFun);


 //undefined

let year;
console.log(year);
console.log(typeof year);

year=1992;
console.log(year);
console.log(typeof year);


// Null


console.log(typeof null);// when we execute ut should show type as null but it shows as object which is error 


// VAR ,CONST ,let
let age=30;
age=31;    // we can mutatate the age from 30 to 31 using var

const birthDate=1993;  // we cannot change birthdate so we use const for values that cannot change

const year;   // it throws error becoz we need intializer to declare value



//OPERATORS
const now= 2022;
const ageSunny=2022-1993;
const ageDileep=2022-1995;
console.log(ageSunny,ageDileep);
console.log(ageDileep*2,ageDileep/2,2**3);

console.log(ageSunny*100,ageSunny/3,2**9);

//concatenation
const hName="sun";
const lastName="deep";
console.log(hName+' '+lastName);

//assignment operator

let x=10+5;
x+=10;
x++;
x--;
console.log(x);

//comparison operators

console.log(ageSunny<ageDileep);  //<,>,<=,>=
console.log(ageDileep>=18);



//operrator precedence

let m,n;
m=n=20-10-5;
console.log(m,n);



// operrator precedence and coding clallenge 1
const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn=1.95;
const BMIMark=massMark/heightMark**2;
const BMIJohn=massJohn/(heightJohn*heightJohn);
const markHigherBMI=BMIMark>BMIJohn;
console.log(BMIMark,BMIJohn,markHigherBMI);


//strings and template literals




//taking decisions if/else statements

const age=19;
if(age>=18)
{
    console.log("sarah is legal to learn driving");
    
    
}
else
{
    const yearsLeft=18-age;
    console.log("sarah is not legal to drive 3 years left to drive");
}


const birthYear=1993;
let century;
if(birthYear<=2000)
{
    century=20;
}
else
{
    century=21;
}
console.log(century);


//coding clallenge 2


const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn=1.95;
const BMIMark=massMark/heightMark**2;
const BMIJohn=massJohn/(heightJohn*heightJohn);
const markHigherBMI=BMIMark>BMIJohn;
console.log(BMIMark,BMIJohn,markHigherBMI);
if(BMIMark>BMIJohn)
{
    console.log('markbmi ${BMIMark} is higher than john${BMIJohn}!');

}
else
{
    console.log('markbmi ${BMIMark} is lesser than john${BMIJohn}!');


}







//type conversion and coersion

//type coversion
const year="2000";
console.log(Number(year),year);
console.log(typeof(year));
console.log(year,15);
console.log(String(year),year);

//type coersion

console.log('i am '  +  23  + ' years old ');





//truty and falsy values

//5 falsy values in js are: 0,'',undefined,NULL,NAN

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean('sunny'));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(1));
console.log(Boolean(10));

let height;
if(height)
{
    console.log('height is defined');
}
else
{
    console.log('height is undefined');
}






//equality operators

==,  ===

//boolean logic

and ,or,not


//logical operators

const hasDriverLicense=true;
const hasGoodVision=false;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);


if(hasDriverLicense && hasGoodVision)
{
    console.log('sarah is able to drive');

}
else
{
    console.log('sarah is not able to drive');

}

const isTired=true;
console.log(hasDriverLicense && hasGoodVision && isTired);
console.log(hasDriverLicense || hasGoodVision || isTired);



//coding clallenge 3

const scoreDolphins=(96+108+89)/3;
const scoreKoalas=(88+91+110)/3;
console.log(scoreDolphins,scoreKoalas);
if (scoreDolphins>scoreKoalas) {
    console.log('dolphins are the winners');
} else if (scoreKoalas>scoreDolphins) {
    console.log('koalas is the winner');
} else if (scoreDolphins===scoreKoalas)
{
    console.log('both are winners');
} 
    
 


const scoreDolphins=(97+90+90)/3;
const scoreKoalas=(90+95+90)/3;
console.log(scoreDolphins,scoreKoalas);
if (scoreDolphins>scoreKoalas && scoreDolphins>=100) {
    console.log('dolphins are the winners');
} else if (scoreKoalas>scoreDolphins && scoreKoalas>=100) {
    console.log('koalas is the winner');
} else if (scoreDolphins===scoreKoalas && scoreDolphins>=100 && scoreKoalas>=100)
{
    console.log('both are winners');
} else{
    console.log('no one wins trophy');
}





//switch statement


const day='thursay';
switch (day) {
    case 'monday':
        console.log('write coding test');
        
        break;

     case'tuesday':
     console.log('write exams ');
     break;
     case'wednesday':
     console.log('go to college');
     break;
     case 'thursday':
    case 'friday':
        console.log('go to standup meeting');
        break;
        case 'saturday':
            case 'sunday':
                console.log('weekend');
                break;
default:
        console.log('data not found');
        break;
}

const day='monday';
if (day==='monday') {
    console.log('monday');
} else if (day==='tuesday') {
    console.log('tuesday');

} 
else if (day==='wednesday') {
    console.log('wednesday');
  
} 
else if (day==='thursday') {
    console.log('thursday');

} 
else if (day==='friday') {
    console.log('friday');

}
    else if (day==='saturday') {
        console.log('saturday');

    } else if (day==='sunday') {
        console.log('sunday');

    } else 
    {
         
    console.log('data not found');

    }
    


    //EXPRESSIONS AND STATEMENTS

   // 2+2+2=6....>is an expression becoz in the end it produces a value
  // true && false......>expresion
  // 1991......>expression



  //conditional ternary operator

const age=17;
const drink=age>=18 ? 'wine':'water';
console.log(drink);



 let drink2;
 if(age>=18){
    drink2='wine';

 }
 else
 {
    drink2='water';
 }
 console.log(drink2);




//coding challenge4

const bill=275;
const tip=bill<=300 && bill>=50 ? bill*0.15 : bill*0.2;
console.log('the bill was ${bill},the tip was ${tip},and total was ${bill + tip}');


