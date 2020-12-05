
// unit value of foot and inch to cm
const footToCm = 30.48
const inchToCm = 2.54

// select elements
const btnConvertToCm = document.querySelector(".ftConversion");
const btnConvertToFt = document.querySelector(".cmConversion");

console.log(btnConvertToCm);
console.log(btnConvertToFt);
const result = document.getElementById("result");

// get input for feet and inch to Cm
const feet = document.getElementById("feet");
const inches = document.getElementById("inch");

// get input for cm to Inch and ft
const cms = document.getElementById("cm");



const output = document.querySelector(".output");
// show or hide 
var outputAns;


//event listener for toCm conversion
btnConvertToCm.addEventListener("click", function() {
	let total = 0;
	total = (feet.value * footToCm) + (inches.value * inchToCm );
	console.log(total); 
	total = Math.round(total*100)/100;
	output.style.visibility="visible";
	result.textContent = total+" cm.";
})


// event listener for toFt conversion
btnConvertToFt.addEventListener("click", function() {
	console.log(cms.value);
	let cmInput = cms.value
	let feetAns = Math.floor(cmInput/footToCm);
	let remainder = cmInput%footToCm;
	let inchAns = Math.round((remainder/inchToCm)*100)/100;
	output.style.visibility="visible";
	console.log(feetAns + " and " + inchAns);
	result.textContent = feetAns + " feets " + inchAns + " inches. ";
})


// hide a view based on btnContainer
const feetToCmBtn = document.querySelector(".buttonFtIn");
const cmToFeetBtn = document.querySelector(".buttoncm");
console.log(feetToCmBtn);
console.log(cmToFeetBtn);


// get the visible fields
const feetToCmView = document.querySelector(".ftToCm");
const cmToFeetView = document.querySelector(".cmToFt");

// display or hide view
feetToCmBtn.addEventListener("click", function(){
	cmToFeetView.style.display = "none";
	feetToCmView.style.display="block";
});
cmToFeetBtn.addEventListener("click", function(){
	feetToCmView.style.display="none";
	cmToFeetView.style.display = "block";
});

