class Number{
	constructor(digits,){
		this.digits = digits
		this.operator = ""
	}
}

let currentNumber = new Number('')
let answer = new Number('')
window.mem = false

$( ".but" ).click(function() {
	currentNumber.digits += $(this).val()
	$('.screen').html(currentNumber.digits)
});

$( ".operator" ).click(function() {

	answer.operator = $(this).val()

	if (mem === true && currentNumber.digits.length === 0){
		$('.screen').html('0')
	} else if (mem === true){
		$('.screen').html(answer.digits)
		equals()
	} else {
		$('.screen').html('0')
		answer.digits = currentNumber.digits
		currentNumber.digits = ""
	}

	mem = true
});

$( ".equals" ).click(function() {
	equals()
});

$( ".clear" ).click(function() {
	clear()
});


function clear(){
	$('.screen').html('0')
	currentNumber.digits = ""
	answer.digits = ""
	mem = false
	answer.operator = ""
}

function equals() {

	switch(answer.operator){
	case '+':
		answer.digits = parseFloat(answer.digits) + parseFloat(currentNumber.digits)
	break
	case '-':
		answer.digits = parseFloat(answer.digits) - parseFloat(currentNumber.digits)
	break
	case '*':
		answer.digits = parseFloat(answer.digits) * parseFloat(currentNumber.digits)
	break
	case '/':
		answer.digits = parseFloat(answer.digits) / parseFloat(currentNumber.digits)
		break
	default:
		console.log('no operator selected')
		break
	}

	currentNumber.digits = ""
	console.log(`answer = ${answer.digits}`)
	$('.screen').html(answer.digits)

}
