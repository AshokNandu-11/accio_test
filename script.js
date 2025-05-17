/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
 const developers = arr
  .filter(person => person.profession === "developer")
  .map(dev => {
    console.log(dev); // print each developer object
    return dev;
  });  
 
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.filter(person => person.profession === "developer").forEach(developer => console.log(developer));
}

function addData() {
  //Write your code here, just console.log
  let newperson =  {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newperson);
  console.log(arr);  
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(person => person.profession !== "admin");
  console.log(arr);
  
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
  { id: 4, name: "emma", age: "24", profession: "designer" },
  { id: 5, name: "mike", age: "29", profession: "manager" },
  { id: 6, name: "lisa", age: "23", profession: "tester" }
  ];
  let combine = arr.concat(arr2);
  console.log(combine);
  
}
