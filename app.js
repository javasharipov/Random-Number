const telEl = document.querySelector('.lottery-ticket__number')
const telNumbers = [
	'+998 90 123 45 67',
	'+998 91 234 56 78',
	'+998 93 345 67 89',
	'+998 94 456 78 90',
	'+998 95 567 89 01',
	'+998 97 678 90 12',
	'+998 88 789 01 23',
	'+998 90 890 12 34',
	'+998 91 901 23 45',
	'+998 93 012 34 56',
	'+998 94 123 45 67',
	'+998 95 234 56 78',
	'+998 97 345 67 89',
	'+998 88 456 78 90',
	'+998 90 567 89 01',
	'+998 91 678 90 12',
	'+998 93 789 01 23',
	'+998 94 890 12 34',
	'+998 95 901 23 45',
	'+998 97 012 34 56',
]

function getRandomNumber() {
	// btnEl.setAttribute('disabled', true)
	const interval = setInterval(() => {
		let randomNumeber = Math.floor(Math.random() * telNumbers.length)
		telEl.innerHTML = telNumbers[randomNumeber]
	})
	setTimeout(() => {
		clearInterval(interval)
		// btnEl.removeAttribute('disabled')
	}, 2500)
}
