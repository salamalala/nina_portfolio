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

  const clients = document.querySelectorAll('.client');
  let clientButtons = document.querySelectorAll('.client__button');


  clients.forEach(client => {

    let clientButton = client.querySelector('.client__button');

    gsap.set(clientButton, {scale: 0.6});

    const expanded = clientButton.getAttribute('aria-expanded');
    const number = clientButton.dataset.indexNumber;
    let associatedSection = client.querySelector('.client__information');
    const text = associatedSection.querySelector('.client__textWrapper');

    clientButton.addEventListener('click', (e) => {

      // remove active and reset all the other client elements
      clients.forEach(client => {
        if (client !== e.target.parentNode) {
          let clientButton = client.querySelector('.client__button');
          let associatedSection = client.querySelector('.client__information');

          client.classList.remove('active');

          clientButton.setAttribute('aria-expanded', false);
          gsap.to(clientButton, {scale: 0.6, duration: 0.2});

          associatedSection.classList.add("hide");
        }
      })

      // give the clicked one the class active
      client.classList.toggle('active');

      if (client.classList.contains('active')) {
        gsap.to(clientButton, {scale: 1, duration: 0.2});
        gsap.fromTo(text, {opacity: 0}, {opacity: 1, duration: 0.5});

        clientButton.setAttribute('aria-expanded', true);

        associatedSection.classList.remove("hide");
      } else {
        clientButton.setAttribute('aria-expanded', false);

        gsap.to(clientButton, {scale: 0.6, duration: 0.2});
        associatedSection.classList.add("hide");
      }

    });
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
    }
  });

  player.on('ready', () => {
    player.muted = true;
  });



}, false);
