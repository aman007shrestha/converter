
// unit value of foot and inch to cm
const footToCm = 30.48
const inchToCm = 2.54

// select elements
const btnConvert = document.querySelector(".convert");
const result = document.getElementById("result");
const feet = document.getElementById("feet");
const inches = document.getElementById("inch");
const output = document.querySelector(".output");

//event listener
btnConvert.addEventListener("click", function() {
	let total = 0;
	total = (feet.value * footToCm) + (inches.value * inchToCm );
	console.log(total); 
	output.style.visibility="visible";
	result.textContent = total
})
