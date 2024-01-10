function exampleFunction (){
    for(var i = 0; i<5; i++){
        console.log("This is var: "+ i);
    }

// console.log("Outside loop with var: " + i); // i is accessible here due to hoisting


    for (let j = 0; j<5; j++){
        console.log("This is let: "+ j);
    }
     console.log("Outside loop with let: " + j); //j is not accessible here because it is block scoped
}
exampleFunction();