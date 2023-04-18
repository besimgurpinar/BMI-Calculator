// get references to the HTML elements
const form = document.querySelector('form');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const resultsDiv = document.querySelector('#results');

// add event listener to the form submit button
form.addEventListener('submit', function(event) {
	// prevent default form submission behavior
	event.preventDefault();

	// get the weight and height values
	const weight = parseFloat(weightInput.value);
	const height = parseFloat(heightInput.value);

	// calculate the BMI value
	const bmi = weight / (height * height);

	// display the BMI value and weight status message
	let message = '';
	if (bmi < 18.5) {
		message = 'Underweight';
	} else if (bmi < 25) {
		message = 'Normal weight';
	} else if (bmi < 30) {
		message = 'Overweight';
	} else {
		message = 'Obese';
	}
	resultsDiv.innerHTML = `<p>Your BMI is ${bmi.toFixed(2)}</p><p>${message}</p>`;
});