// HINT: You can delete this console.log after you no longer need it!
// console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Dexter K. Johnson" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

  // total Quantity
  let resetButton = document.createElement('button')
  resetButton.textContent = 'RESET'
  


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


                    /* Ginger Bread cookies Area Begin here*/

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Ginger bread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    
       gb+=1  
    
   
    totalQty()
    document.getElementById('qty-gb').textContent = gb
})


document.getElementById('minus-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Ginger bread - button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    
    if(gb>0){
      gb-=1  
     }
    
    totalQty()

    document.getElementById('qty-gb').textContent = gb
})

 /* ==============================End here=================================================== */

 /* Chocolate Chip cookies Area Begin here*/

 // Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chocolate Chip + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    cc+=1
    totalQty()
    document.getElementById('qty-cc').textContent = cc
})


document.getElementById('minus-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chocolate Chip - button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    if(cc>0){
     cc-=1 
     }
    
    totalQty()
    document.getElementById('qty-cc').textContent = cc
})

/* ==============================End here=================================================== */

 /* Sugar Sprinkle cookies Area Begin here*/


 // Event listener for clicks on the "+" button for Ginger Bread cookies
 document.getElementById('add-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chocolate Chip + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    sugar+=1
    totalQty()
    document.getElementById('qty-sugar').textContent = sugar
})


document.getElementById('minus-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chocolate Chip - button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    if(sugar>0){
        sugar-=1
     }
    
    
    totalQty()
    document.getElementById('qty-sugar').textContent = sugar
})
/* ==============================End here=================================================== */



//calculate the total quantity using function

function totalQty(){

    let totalQuantity = gb + cc + sugar
    document.getElementById('qty-total').textContent = totalQuantity
    
}


// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('clear').addEventListener('click', function() {
   
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
   
gb=0
cc=0
sugar=0

    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-sugar').textContent = sugar

   document.getElementById('qty-total').textContent = gb+cc+sugar
})
