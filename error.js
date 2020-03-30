function validate() {
  //validation logic
  console.log('validate function')
  var formValues = document.forms['login-form']
  console.log('formValues', formValues)
  var username = formValues['username'].value
  var password = formValues['password'].value
  console.log('username', username)
  console.log('password', password)

  if (password == '12345') {
    return true
  }

  return false
}

function validate2() {
  //validation logic
  console.log('validate2 function')
  var formValues = document.forms['login-form2']
  console.log('formValues', formValues)
  var username = formValues['username'].value
  var password = formValues['password'].value
  console.log('username', username)
  console.log('password', password)
  return false
}

function showError(message) {
  var errorDiv = document.getElementById('error-area')
  errorDiv.innerText = message
  errorDiv.style.display = 'block'
}

function validateSignup() {
  var form = document.forms['signup-form']
  var fName = form['f-name'].value
  var lName = form['l-name'].value
  var email = form['email'].value
  var phoneElement = form['phone']
  var phone = form['phone'].value
  console.log('fName', fName)
  console.log('lName', lName)
  console.log('email', email)
  console.log('phone', phone)

  // Number(phone) // 1234567 , not a number => NaN
    
  if (fName.includes(' ')) {
    // alert('first name should not contain spaces')
    showError('first name should not contain spaces')
    return false
  }


  if (fName=="") {
    showError('first name must be fill out')
    return false
  }


  if (lName=="") {
    showError('Last name must be fill out')
    return false
  }
  if (email=="") {
    showError('Email must be fill out')
    return false
  }

if (phone=="") {
    showError('password must be fill out!')
}
if (phone.length <=6) {
   showError('password should be 6 character or more.')
   return false
}

 

  return true
}