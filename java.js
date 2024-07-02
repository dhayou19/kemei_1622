const scriptURL = 'https://script.google.com/macros/s/AKfycbyzqVY01lIcCAEJrG-EaL0g7iEqCNGh1AnmL7UTV737ca28YY83fjNXWgGR4pwjxdfc/exec'
const form = document.getElementById('contact-form')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      $('#thankYouModal').modal('show'); // Show the modal
      form.reset(); // Optionally reset the form
    })
    .catch(error => console.error('Error!', error.message))
})
