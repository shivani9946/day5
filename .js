function validateForm(event) {
  event.preventDefault();
  const form = event.target;

  if (form.checkValidity()) {
    // The form is valid, you can process the data here.
    alert('Form submitted successfully!');
    form.reset();
  } else {
    // The form is invalid, show error messages or visual feedback to the user.
    alert('Please fill out all required fields correctly.');
  }
}

// Disable browser's default validation bubble
window.addEventListener('invalid', (e) => {
  e.preventDefault();
}, true);

  