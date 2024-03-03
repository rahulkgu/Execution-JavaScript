 function prin() {
     console.log(x); // Output: ReferenceError: x is not defined
     let x = 5;
     console.log(x); // Output: 5
 }
 prin();