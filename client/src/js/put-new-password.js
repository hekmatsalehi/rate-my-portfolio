const newPassFormHandler = async (event) => {
    event.preventDefault();
  
    const newPassword = document.querySelector('#new-password').value.trim();
    const confirmNewPassword = document.querySelector('#confirm-new-password').value.trim();
  
    if (newPassword && confirmNewPassword) {
      try {
        if(newPassword != confirmNewPassword){ return alert("your passwords don't match")}
        const id = window.location.search.substring(1)
        const response = await fetch('/api/put/reset/:id', {
          method: 'PUT',
          body: JSON.stringify({ newPassword, id }),
          headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
          document.location.replace('/');
        } 

      } catch(err) {
        console.log(err);
      }
    }
};
  
document
    .querySelector('#new-pass-form')
    .addEventListener('click', newPassFormHandler);