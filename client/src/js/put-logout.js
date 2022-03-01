const logout = async () => {
    console.log('clicked')
    const response = await fetch('/api/post/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
};
  
document.querySelector('#logout').addEventListener('click', logout);