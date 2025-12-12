const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');

    contactForm.reset();
    formStatus.textContent = `Thanks${name ? `, ${name}` : ''}! We will reach out within one business day.`;
  });
}
