const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

const landing = document.querySelector('.landing');
const landingContent = document.querySelector('.landing__content');

function fitContentToViewport() {
  if (!landing || !landingContent) return;

  landingContent.style.setProperty('--content-scale', '1');

  const { width: contentWidth, height: contentHeight } = landingContent.getBoundingClientRect();
  const availableWidth = landing.clientWidth;
  const availableHeight = landing.clientHeight;

  if (!contentWidth || !contentHeight || !availableWidth || !availableHeight) return;

  const scale = Math.min(availableWidth / contentWidth, availableHeight / contentHeight, 1);
  landingContent.style.setProperty('--content-scale', scale.toString());
}

const resizeObserver = landingContent ? new ResizeObserver(() => fitContentToViewport()) : null;
if (resizeObserver && landingContent) {
  resizeObserver.observe(landingContent);
}

window.addEventListener('resize', fitContentToViewport);
window.addEventListener('orientationchange', fitContentToViewport);

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  requestAnimationFrame(() => fitContentToViewport());
} else {
  document.addEventListener('DOMContentLoaded', () => fitContentToViewport(), { once: true });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');

    contactForm.reset();
    formStatus.textContent = `Thanks${name ? `, ${name}` : ''}! We will reach out within one business day.`;
  });
}
