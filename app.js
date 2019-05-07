// ----- contact form -----
console.log('It works')
$(document).ready(function () {
  $('.submit').click(function (event {
    console.log('Clicked button')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.form-status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }

    if(subject.length >= 2) {
      statusElm.append('<div>Submit is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }

    if(message.length >= 10) {
      statusElm.append('<div>Message is valid</div>')
    } else {
      statusElm.append('<div>Message is not valid</div>')
    }
  }))
})
// -------------------------
