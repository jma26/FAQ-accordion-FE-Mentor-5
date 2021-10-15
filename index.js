const buttons = document.querySelectorAll("button.accordion-trigger")

buttons.forEach(button => {
  button.addEventListener('click', handleClick);
})

function handleClick(event) {
  const buttonEl = document.getElementById(event.target.id);
  const sectionEl = document.querySelector(`[aria-labelledby=${event.target.id}]`);
  const buttons = document.querySelectorAll('.accordion-trigger');
  const sections = document.querySelectorAll('.accordion-panel');

  if (buttonEl.classList.contains('active')) {
    buttonEl.setAttribute('aria-expanded', true);
    buttonEl.classList.toggle('active');
    sectionEl.classList.toggle('active');
  } else {
    for (let i = 0; i < buttons.length; i++) {
      buttonEl.setAttribute('aria-expanded', false);
      buttons[i].classList.remove('active');
      sections[i].classList.remove('active');
    }

    buttonEl.setAttribute('aria-expanded', true);
    buttonEl.classList.toggle('active');
    sectionEl.classList.toggle('active');
  }
  

}