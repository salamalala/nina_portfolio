var mouseX;
var mouseY;
window.onmousemove = handleMouseMove;
function handleMouseMove(event) {
  event = event || window.event;
  document.getElementById('pointer').style.top=event.clientY + "px";
  document.getElementById('pointer').style.left=event.clientX + "px";
}
