/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(num){
return num.toString();
}
/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase(add){
    add+=1;
    return add;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
 function decrease (sub){
    sub -=1;
    return sub;
 }


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x, y){
    x+=y;
return x;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x, y){
    x-=y;
    return x;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply (x,y){
    x*=y;
    return x;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x,y){
    x/=y;
    return x;

}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x){
    x*=x;
    return x;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate (operation, x, y){
    if (operation === "add"){
        console.log(x + " + " + y + " = "+ (x+y));
        return add( x, y);
    }
    if (operation === "subtract"){
        console.log(x + " - " + y + " = " + (x-y));
        return subtract( x, y);
    }
    if (operation === "multiply"){
        console.log(x + " * " + y + " = " + (x*y));
        return multiply( x, y);
    }
    if (operation === "divide"){
        console.log (x + " / " + y + " = " + (x/y)); 
        return divide( x, y);
    }

}
 

    // Switch looks at the value
    // If/else looks at the boolean statement


//     switch (operation){
//     case add:
//     return( x + "+" + y + "=" + (x+y));
//     return add(x,y);
//     // break; // this is used to NOT to return anything afterward, used at the end or return

//     case subtract:
//     return( x + "-" + y + "=" + (x-y));
//     return subtract(x,y);
//     // break; // this is used to NOT to return anything afterward, used at the end or return

//     case multiply:
//     return( x + "*" + y + "=" + (x*y));
//     return multiply(x,y);
//     // break; // this is used to NOT to return anything afterward, used at the end or return

//     case divide:
//     return( x + "/" + y + "=" + (x/y));
//     return divide(x,y);
//     // break; // this is used to NOT to return anything afterward, used at the end or return
//     }
// }



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan (a,b){
    if (a>b){
        return true;
    }else{
        return false;
    }
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a,b){
    if (a<b){
        return true;
    }else{
        return false;
    }
    // return a>b; //works the same as above, and easier
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

 function areEqual(a,b){
    if (a===b){
        return true;
    }else{
        return false;
    }
 }


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(x,y){
    if (x<y){
        return x;
    }else{
        return y;
    }
    return math.min(x,y) ;// way numb1

    // if(isLessThan(x,y)){ //way numb2
    //     return x;
    // }else{
    //     return y;
    // }

    // if(isGreaterThan(x,y)){ // way numb3
    //     return x;
    // }else{
    //     return y;
    // }
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

 function maximum(x,y){
    if (x>y){
        return x;
    }else{
        return y;
    }
 }


// /**
//  * Returns true if `n` is even.
//  * @param {number} n
//  * @return {boolean} the number is even
//  */

 function isEven(n){
    if (n%2===0){
        return true;
    }else{
        return false;
    }
 }


// /**
//  * Returns true if `n` is odd.
//  * @param {number} n
//  * @return {boolean} the number is odd
//  */
function isOdd(n){
    if (n%2!=0){
        return true;
    }else{
        return false;
    }
}

// /**
//  * Returns a letter grade.
//  * "A": 90-100%
//  * "B": 80-89%
//  * "C": 70-79%
//  * "D": 60-69%
//  * "F": 0-59%
//  * @param {number} score
//  * @param {number} total maximum possible score
//  * @return {string} the score represented as a letter grade
//  */
// function letterGrade(score, total){
//     var grade = score/total*100;

//         if (grade>= 90.00) {
//             return "A";
//         }
//          if (grade >= 80.00 && grade<89.00) {
//             return "B";
//         }
     
//        if (grade >= 70.00 && grade <79.00) {
//             return  "C";
//         }
     
//        if (grade >= 60.00 && grade<69.00) {
//             return  "D";
//         }

//         else if(grade >=0.00 && grade <59.00){
//             return  "f";
//         }


function letterGrade(score, total){
    var grade = score/total*100;

    if(grade >= 90.00){
      return "A";
    }
   else if(grade >= 80.00){
      return "B";
    }
   else if(grade >= 70.00){
      return "C";
    }
   else if(grade >= 60.00){
      return "D";
    }
   else if(grade >= 0.00){
      return "F";
    }
}


    // var myGrade = "F";

    //     if (grade>= 90.00) {
    //         myGrade= "A";
    //     }
    //       else if (grade >= 80.00 && grade<89.00) {
    //         myGrade= "B";
    //     }
     
    //    else if (grade >= 70.00 && grade <79.00) {
    //         rmyGrade= "C";
    //     }
     
    //    else if (grade >= 60.00 && grade<69.00) {
    //         myGrade= "D";
        // }

//    return myGrade; // default variable to F

//         // switch (true){
//         //     case grade>=0.9;
//         //     return "A":
//         //     case grade>=0.8;
//         //     return "B":
//         //     case grade>=0.7;
//         //     return "C":
//         //     case grade>=0.6;
//         //     return "D":
//         //     default:
//         //     return "F";
//         // }
     
     
// }
// /**
//  * Checks if a `restaurant` object has a `reviews` property.
//  * If it does, increase the property's `reviews` value by 1.
//  * If it does not, set the `reviews` value to 1.
//  * @param {object} restaurant   represents a restaurant object
//  * @return {object} restaurant
//  */

function incrementReviews(restaurant){
    if(restaurant.reviews){
        restaurant.reviews++;
    }else{
        restaurant.reviews=1;
    }return restaurant;
}




// /**
//  * Joins two strings with a space.
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string} joined the words joined with a space
//  */

 function combine(word1, word2){
    var word3 = word1 + " " + word2; // best one to use
    return word3;

    // return word1.concat(" ", word2) ;
    // return [word1,word2].join ('');
 }


// /**
//  * Returns a circle object with the properties `circumference` and `area`.
//  * Use Math.PI for the value π.
//  * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
//  * @param {number} radius
//  * @return {object} circle
//  */

 function createCircle(radius){
  var circle = {};
  var circumference = 2 * Math.PI * radius;
  var area = Math.PI * (radius * radius);
  circle.circumference = circumference;
  circle.area = area;
  return circle;
 }
