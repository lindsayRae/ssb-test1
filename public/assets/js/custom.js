document.getElementById('contactSubmitBtn').addEventListener('click', (e) => {
  e.preventDefault();
  handleContactSubmit();
});

const handleContactSubmit = async () => {
  const body = {
    fullName: document.getElementById('formFullName').value,
    email: document.getElementById('formEmail').value,
    message: document.getElementById('formMessage').value,
  };

  alert('This email was not sent because this is just a demo site. Thank you.');
};
