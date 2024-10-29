document.addEventListener('DOMContentLoaded', function() {
    var cardLogo = document.getElementById('CardLogo')
    var number = document.getElementById('number')
	  var cleanNumber  = document.getElementById('clean-number')
    var expmonth = document.getElementById('expmonth')
    var expyear = document.getElementById('expyear')
    var cvv = document.getElementById('cvv')
    var expiry = document.getElementById('expiry')
    var payButton = document.getElementById('pay-button')
    var nameOnCard = document.getElementById('name')
    var validationFeedback = document.getElementById('validationFeedback')
    number.addEventListener('input', function (event) {
    const cleanedValue = event.target.value.replace(/\D/g, '')
    const formattedValue = cleanedValue.replace(/(\d{4})/g, '$1 ').trim()

    event.target.value = formattedValue

    if (formattedValue.length >= 19) {
        expiry.focus()
    }
	
	cleanNumber.value = cleanedValue
    })

    cvv.addEventListener('input', function (event) {
    const inputLength = event.target.value.length

    // Allow only numbers
    cvv.value = event.target.value.replace(/\D/g, '')

    if (inputLength === 3) {
        nameOnCard.focus()
    }
    })

    expiry.addEventListener('input', function (event) {
    const inputLength = event.target.value.length

    // Allow only numbers
    const newValue = event.target.value.replace(/\D/g, '')

    // Format the input as 'mm / yy'
    if (inputLength <= 2) {
        event.target.value = newValue.slice(0, 2)
        expmonth.value = newValue.slice(0, 2)
    } else {
        const month = newValue.slice(0, 2)
        const year = newValue.slice(2, 4)

        // Check if the month is greater than 12, adjust it
        const formattedMonth = month > 12 ? '12' : month

        event.target.value = `${formattedMonth} / ${year}`
        expmonth.value = formattedMonth
        expyear.value = `20${year}`
    }
    if (inputLength === 7) {
        cvv.focus()
    }
    })

    expiry.addEventListener('keydown', function (event) {
    // Handle backspace key to allow deletion of the slash
    if (event.key === 'Backspace' && event.target.selectionStart === 5) {
        event.preventDefault()
        event.target.value = event.target.value.slice(0, 2)
    }
    })
}, false);
