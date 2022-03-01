const signUpFormHandler = async (event) => {
    event.preventDefault()
  
    const firstName = document.querySelector('#first-name').value.trim()
    const lastName = document.querySelector('#last-name').value.trim()
    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()
  
    if (firstName && lastName && email && password) {
      let user = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      }
  
      const response = await fetch('/api/post/signup', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
      });
  
  
      if (response.ok) {
        document.location.replace('/')
      } else {
        alert('User already exists. Please log in or sign up with a different email.')
      }
    }
  }
  
  document
    .querySelector('#signup-button')
    .addEventListener('click', signUpFormHandler)