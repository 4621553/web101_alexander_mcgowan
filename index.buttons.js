

function fadeOutEffect(page){
  var fadeTarget = document.getElementById("body");
  fadeTarget.classList.add('fadeOut')


  setTimeout(() => {
    window.location.href = `./${page}.html`;
  }, "200");
}
