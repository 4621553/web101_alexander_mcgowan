function fadeOutEffect() {
  var fadeTarget = document.getElementById("body");
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.017;
      } else {
          clearInterval(fadeEffect);
      }
  }, 0);


  setTimeout(() => {
    window.location.href = './contact.html';
  }, "200");
}

function goBack() {
  window.location.hash = window.location.lasthash[window.location.lasthash.length-1];
  var fadeTarget = document.getElementById("body");
  fadeTarget.style.opacity = 1;
  window.location.lasthash.pop();
}

