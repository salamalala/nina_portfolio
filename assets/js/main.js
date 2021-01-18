var mouseX;
var mouseY;
window.onmousemove = handleMouseMove;
function handleMouseMove(event) {
  event = event || window.event;
  document.getElementById('pointer').style.top=event.clientY + "px";
  document.getElementById('pointer').style.left=event.clientX + "px";
}

const clients = document.querySelectorAll('.client__name');
const clientInformations = document.querySelectorAll('.client__information');


clients.forEach(client => {
    client.setAttribute('aria-expanded', false);

    const expanded = client.getAttribute('aria-expanded');
    const number = client.dataset.indexNumber;
    const associatedSection = document.getElementById(`section_${number}`);
    const text = associatedSection.querySelector('.client__text');
    const img = associatedSection.querySelector('.client__screenshot');
    const container = client.parentNode;

    client.addEventListener('click', () => {

      client.classList.toggle('expanded');

      if (client.classList.contains('expanded')) {
        // gsap.fromTo(text, {opacity: 0, x: -500}, {opacity: 1, x:0, duration: 0.5});
        // container.classList.add('active');
        gsap.to(container, {className:'+=client active', duration: 5});
        gsap.fromTo(img, {opacity: 0, x: 500}, {opacity: 1, x:0, duration: 0.5});
        gsap.fromTo(text, {opacity: 0}, {opacity: 1, duration: 0.5});
        client.setAttribute('aria-expanded', true);

        associatedSection.classList.add("show");
        associatedSection.classList.remove("hide");
      } else {
        client.setAttribute('aria-expanded', false);
        container.classList.remove('active');
        associatedSection.classList.add("hide");
        associatedSection.classList.remove("show");
      }
    })
  })
