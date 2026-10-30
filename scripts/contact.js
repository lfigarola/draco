// Email composition keeps inquiries in the visitor's own email client.
const form = document.querySelector('.contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const subject = `Project inquiry: ${fields.get('interest')}`;
  const body = `Hello Draco,\n\n${fields.get('message').trim()}\n\nName: ${fields.get('name').trim()}\nEmail: ${fields.get('email')}\nInterested in: ${fields.get('interest')}`;
  const link = `mailto:info@DracoTech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = link;
  const status = form.querySelector('.form-status');
  status.replaceChildren(document.createTextNode('Your message is ready in your email app. If it did not open, email info@DracoTech.com directly. Your draft is still here.'));
});
