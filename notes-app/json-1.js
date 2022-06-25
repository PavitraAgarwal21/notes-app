const fs = require('fs');
// const { parse } = require('path');
// const book = {
//     title: 'ego is the enenmy ',
//     author:'ryan holiday'
// }
// const bookInJson = JSON.stringify(book);
// //console.log(bookInJson);//json
// fs.writeFileSync('json-1.json',bookInJson);//creating the json file
// // const parseData = JSON.parse(bookInJson);
// // console.log(parseData);//object
// //reading from json file
// const dataBuffer = fs.readFileSync('json-1.json');
// const dataJson = dataBuffer.toString();//converting to json 
// const dataObject = JSON.parse(dataJson);//converting into object 
// console.log(dataObject);
// console.log("l lag");




const dataBuffer =  fs.readFileSync('json-1.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);
data.name = 'sajal';
data.age = 23;
console.log(data);
//but we have to overwrite the json file 
fs.writeFileSync('json-1.json',JSON.stringify(data));

