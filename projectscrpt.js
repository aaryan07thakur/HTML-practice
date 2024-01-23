// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  window.scrollTo({
    top: targetElement.offsetTop - 60,
    behavior: 'smooth'
  });
}

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  // Perform form validation here
  
  // Form data to be sent to the server
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // Send form data to the server (example using fetch API)
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to submit form');
    }
  })
  .then(data => {
    // Handle successful form submission here
    console.log(data);
  })
  .catch(error => {
    // Handle form submission error here
    console.error(error);
  });
}
