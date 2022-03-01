const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log('works')
    
    const userEmail = document.querySelector('#email').value.trim();
    const userPassword = document.querySelector('#password').value.trim();
    let loginObject = {
      email: userEmail,
      password: userPassword
    }
    if (userEmail && userPassword) {
      const response = await fetch('api/post/login', {
        method: 'POST',
        body: JSON.stringify(loginObject),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {

        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };

  document
    .querySelector('#login-button')
    .addEventListener('click', loginFormHandler);