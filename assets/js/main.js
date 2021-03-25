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
    // const iframe = client.querySelector('iframe');
    // var iframeSrc = iframe.src;
    // console.log(iframe);
    // const iframeSrc = iframe.src
    // console.log(iframeSrc);

    clientButton.addEventListener('click', (e) => {

      // remove active and reset all the other client elements
      clients.forEach(client => {
        if (client !== e.target.parentNode) {
          let clientButton = client.querySelector('.client__button');
          let associatedSection = client.querySelector('.client__information');

          client.classList.remove('active');

          clientButton.setAttribute('aria-expanded', false);
          gsap.to(clientButton, {scale: 0.6, duration: 0.2, y: 0});
          associatedSection.classList.add("hide");
          // iframeSrc = iframeSrc.slice(0, -11);
        }
      })

      // give the clicked one the class active
      client.classList.toggle('active');

      // if active do this, else do this
      if (client.classList.contains('active')) {
        gsap.to(clientButton, {scale: 1, duration: 0.2, y: 30});
        gsap.fromTo(text, {opacity: 0}, {opacity: 1, duration: 0.5});

        clientButton.setAttribute('aria-expanded', true);

        associatedSection.classList.remove("hide");
        // console.log(iframeSrc);
        // iframeSrc += "&autoplay=1";
        // console.log(iframeSrc);

      } else {
        clientButton.setAttribute('aria-expanded', false);
        gsap.to(clientButton, {scale: 0.6, duration: 0.2, y: 0});
        associatedSection.classList.add("hide");
        // iframeSrc = iframeSrc.slice(0, -11);
        // // iframe.src.substring(0, iframe.src.length-11);
        // console.log(iframeSrc);
      }

    });
  })
}

document.addEventListener('DOMContentLoaded', function() {

  cursor();

  clientAccordion();


}, false);
