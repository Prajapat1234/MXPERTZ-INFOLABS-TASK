// // const { constants } = require('buffer');
// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017';

// const client = new MongoClient(uri);

// async function connect() {
//     await client.connect();
//     console.log('Connected to the MongoDB server');
// }

// function DisplayData(result){
//     result.forEach(element => {
//         console.log(element);
        
//     });
// }



// async function readData() {


//     connect();
//     let DB = client.db("Company");
//     let collection = DB.collection("Employee");
//     let result = await collection.find().toArray();
//     console.log(result);
//     DisplayData(result);
// }


// async function CreatData(data){
//     connect();
//     let DB = client.db("Company");
//     let collection = DB.collection("Employee");
//     let result = await collection.insertOne(data);
//     console.log(result);
// }
// async function DeleteData(filter){
//     connect();
//     let DB = client.db("Company");
//     let collection = DB.collection("Employee");
//     let result = await collection.deleteOne(filter);
//     // console.log(result);
// }


// readData();
// // CreatData({ name: 'John', age: 30 , Address: "XCX" });
// DeleteData({ Name: 'RamRaj'});


// // ---------------Without loop----------------------------------

// // function printNumbersRecursive(n) {
// //     if (n <= 10) {
// //         console.log(n);
// //         printNumbersRecursive(n + 2);
// //     }
// // }

// // printNumbersRecursive(0);
// let numbersArray = Array.from({ length: 101 });
// numbersArray=numbersArray.map((_, index) => index)
// console.log(numbersArray);
// let obj={length:100};
// let neewarray=Object.keys(obj)
// let neewarray=Array.from(obj)
// console.log(neewarray+1);

  
class ToyCar {
    constructor(color, wheels) {
        this.color = color;
        this.wheels = wheels;
        // this.wheel = wheel;
    }
}

 let myToyCar = new ToyCar("red", 4);
 let myToyCar1 = new ToyCar("black", 6);

console.log(myToyCar);
console.log(myToyCar1);

