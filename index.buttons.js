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

window.onhashchange = function() {
  fadeTarget.style.opacity = 1
 }

