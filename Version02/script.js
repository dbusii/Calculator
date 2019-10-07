class Number{
	constructor(digits,){
		this.digits = digits
		this.operator = ""
	}
}

let currentNumber = new Number('')
let num1 = new Number('')
let num2 = new Number('')
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
		num1.digits = currentNumber.digits
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

	num2.digits = currentNumber.digits

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
	case '^':
		answer.digits = parseFloat(answer.digits) ** parseFloat(currentNumber.digits)
		break
	case '%':
		answer.digits = parseFloat(answer.digits) % parseFloat(currentNumber.digits)
		break
	case 'sqrt':
		answer.digits =Math.sqrt( parseFloat( (answer.digits)  ) ) 
		break
	default:
		console.log('no operator selected')
		break
	}

	currentNumber.digits = ""
	console.log(`answer = ${answer.digits}`)

	$('.screen').html(answer.digits)

	$('.num1').html(num1.digits)
	$('.op').html(answer.operator)
	$('.num2').html(num2.digits)
	$('.ans').html(`= ${answer.digits}`)

	num1.digits = num2.digits
	console.log(num1.digits)
}

