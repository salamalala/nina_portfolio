var cursor = function () {
  var mouseX;
  var mouseY;
  window.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    event = event || window.event;
    document.getElementById('pointer').style.top=event.clientY + "px";
    document.getElementById('pointer').style.left=event.clientX + "px";
  }
}

var clientAccordion = function() {

  const clients = document.querySelectorAll('.client__name');
  const clientInformations = document.querySelectorAll('.client__information');


  clients.forEach(client => {
      client.setAttribute('aria-expanded', false);
      gsap.set(client, {scale: 0.6});

      const expanded = client.getAttribute('aria-expanded');

      const number = client.dataset.indexNumber;
      const associatedSection = document.getElementById(`section_${number}`);

      const wrapper = client.parentNode;

      const text = associatedSection.querySelector('.client__textWrapper');
      const img = associatedSection.querySelector('.client__screenshot');


      client.addEventListener('click', () => {

        // add class too - to be able to toggle - aria cant be toggled.
        client.classList.toggle('expanded');

        if (client.classList.contains('expanded')) {
          gsap.to(wrapper, {className:'+=client active'});

          gsap.to(client, {scale: 1, duration: 0.2});
          gsap.fromTo(text, {opacity: 0}, {opacity: 1, duration: 0.5});
          gsap.fromTo(img, {opacity: 0, x: 500}, {opacity: 1, x:0, duration: 0.5});

          client.setAttribute('aria-expanded', true);

          associatedSection.classList.add("show");
          associatedSection.classList.remove("hide");

        } else {

          client.setAttribute('aria-expanded', false);
          wrapper.classList.remove('active');

          gsap.to(client, {scale: 0.6, duration: 0.2});
          associatedSection.classList.add("hide");
          associatedSection.classList.remove("show");
        }
      })
    })
}

document.addEventListener('DOMContentLoaded', function() {

  cursor();

  clientAccordion();

  const player = new Plyr('#player', {
    autoplay: true,
    autopause: false,
    muted: true,
    controls: false,
    clickToPlay: false,
    loop: {
      active: true
    },
  });

  player.on('ready', () => {
    player.muted = true;
  });

  window.player = player;




}, false);
