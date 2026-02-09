// i=[1,2,4,5,7,9,3,8,6]

// i.forEach(e=>{
//     if(e%2==0)
//         console.log(e);
// })

// const person={key:"Hello"};
// console.log(person.key);
// person.key="Bye";
// console.log(person.key);



// const Sales="Toyota";

// function carType(name)
// {
//     return name==="Honda"?name:"Sorry we don't sell this car";
// }

// const car={ carn:"city",getCar.carType("Honda"),Special:Sales}

// console.log(car.carn);
// console.log(getcar);
// console.log(car.special);



// const color=["RED","BLACK","WHITE"];
// color.forEach((i)=>console.log(i));
// for(const i in color)       //(THIS IS FORIN LOOP)--->THIS loops brings index in return.
// {
//     console.log(i,color[i]);
// }



// z=[1,2,4,5,7,9,3,8,6]
// z.forEach((e,i)=> {         //(THIS IS FOREACH LOOP))
//     z[i]=z[i]+3;
//     console.log(a[i]);
//     i++;
// })




// Const language=["HTML","CSS","Javascript"] 
// for(const i of Color)                          //(FOROF loop)---->THIS loop brings the value in return.
// {
//     console.log(i);
// }



// function greet(name)
// {
//     console.log("Hello"+' '+name);
// }



//LECTURE 2
//----------

// var x2 = 10;
// console.log("x is var is" ,x2);

// //let in block scope 
// let x = 12;
// {
//     let x =13;
// }
// console.log("x = ", x)

// function say( a , b){
//     console.log("Add numbers " + (a+b));
// }

// say(2,4);


// // Anonymous Function
// let s1 = function(){
//     console.log("nothing");
//     return 5;
// }
// let num = s1();
// console.log(num);



// let s2 = function(m,n){      
//     let add = m+n;
//     return add;
// }
// console.log(s2(1,6));




//Q (To Find the 4th Highest marks among the students);

class students{
    constructor(name,marks){
        this.name = name;
        this.marks = marks;
    }
     
}
const s1 = new students("adit", 95);
const s2 = new students("aditya", 85);
const s3 = new students("alok", 70);
const s4 = new students("Rohan", 75);
const s5 = new students("Amit", 65);

const arr = [ s1.marks,s2.marks,s3.marks,s4.marks,s5.marks];
 arr.sort();
 console.log(arr[arr.length-4]);



 //WAP A Program to find Odd - Event;

 function check(a)
 {
    if (a%2==0){
        console.log("Even no");
    }
    else{
        console.log("Odd no");
    }
 }
check(3);


// WAP to find greatest among two no;

function high(a,b){
    console.log(a>b?"a is highest":"b is highest");

}
high(2,4);