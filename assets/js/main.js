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
    let clientButtonText = client.querySelector('.client__buttonText');
    let number = clientButton.dataset.indexNumber;
    const expanded = clientButton.getAttribute('aria-expanded');
    let associatedSection = client.querySelector('.client__content');
    const text = associatedSection.querySelector('.client__textWrapper');
    let plus = client.querySelector('.client__button--plus');

    gsap.set(clientButtonText, {scale: 0.6});


    clientButton.addEventListener('click', (e) => {

      // remove active and reset all the other client elements -> e.currentTarget.parentNode is the parent of the button -> client
      clients.forEach(client => {
        if (client !== e.currentTarget.parentNode) {
          let clientButton = client.querySelector('.client__button');
          let clientButtonText = client.querySelector('.client__buttonText');
          let associatedSection = client.querySelector('.client__content');
          let plus = client.querySelector('.client__button--plus');

          client.classList.remove('active');

          clientButton.setAttribute('aria-expanded', false);
          gsap.to(clientButtonText, {scale: 0.6, duration: 0.2, y: 0});
          gsap.set(plus, {opacity: 1, display: "inline-block"});
          associatedSection.classList.add("hide");
        }
      })

      // give the clicked one the class active
      client.classList.toggle('active');

      // if active do this,  else (if not active)
      if (client.classList.contains('active')) {
        gsap.to(window, 0.1, {scrollTo:"#button_" + number})
        gsap.to(clientButtonText, {scale: 1, duration: 0.2, y: 30});
        gsap.fromTo(text, {opacity: 0}, {opacity: 1, duration: 0.5});
        gsap.to(plus, {opacity: 0, display: "none", duration: 0.2});
        clientButton.setAttribute('aria-expanded', true);
        associatedSection.classList.remove("hide");

      } else {
        gsap.set(plus, {opacity: 1, display: "inline-block", duration: 0.2});
        clientButton.setAttribute('aria-expanded', false);
        gsap.to(clientButtonText, {scale: 0.6, duration: 0.2, y: 0});
        associatedSection.classList.add("hide");
      }

    });
  })
}

document.addEventListener('DOMContentLoaded', function() {

  cursor();
  clientAccordion();


}, false);
