const sum = [1, 2, 3,4,5].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum);





const numbers = [12,15,20,25,30];
const evenNumbers = numbers.filter (num => num % 2 === 0);
console.log("Cut ededler:",evenNumbers);






var array = [5, 3, 9, 1, 7];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array>largest) {
        var largest=array[i];
    }
}

console.log(largest);








let myarray = []

function addTo(Yusif,Nihad,Vahid,Sabir) {
  myarray.push(document.getElementById("users").value)
    }





    const grades = [10, 20, 30, 40, 50];





    let number = [1, 2, 3, 4, 5];
    let reversedNumbers = numbers.reverse();
    
    console.log(reversedNumbers);
    



    var elements = [1,2,3,4,5]
if elements.contains(5) {
  //do something
}


contentarray.grep("and")
=> ["and", "and", "and"]
contentarray.grep("and")






var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
            var x = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = x;
        }

console.log(Arr);






li = [1, 2, 3, 4, 5]
  for (i=0; i<li.length; i++) {           
    console.log(li[i])
    if (i+1 == li.length) { 
      i = 0 
}