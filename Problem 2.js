function Notcontainingodd(arr) {
   
    return arr.every(num => num % 2 === 0);
}

console.log(Notcontainingodd([2,4,6,9]));