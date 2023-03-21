function fadeOutEffectContact() {
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

function fadeOutEffectAbout() {
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
    window.location.href = './about.html';
  }, "200");

}

function fadeOutEffectResume() {
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
    window.location.href = './resume.html';
  }, "200");

}

function fadeOutEffectGallery() {
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
    window.location.href = './gallery.html';
  }, "200");

}



