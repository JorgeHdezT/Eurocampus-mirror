const miDiv = document.getElementById("header");
  const puntoScroll = 50; // píxeles desde arriba

  console.log(miDiv);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= puntoScroll) {
      miDiv.classList.add("scrolled");
    } else {
      miDiv.classList.remove("scrolled");
    }
  });