const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  const res = await fetch('https://your-backend-on-render.onrender.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const json = await res.json();
  if (json.success) {
    alert('Message sent!');
    form.reset();
  } else {
    alert('Something went wrong.');
  }
});