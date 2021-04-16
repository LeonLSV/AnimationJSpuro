const elements = document.querySelectorAll("main > h2");
const parent = document.getElementById("#containerObserver");

const observeElement = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animationEntrada");
    }
  });
};

const observer = new IntersectionObserver(observeElement, {
  root: parent,
  threshold: 0.5,
});

elements.forEach((element) => {
  observer.observe(element);
});

const elements2 = document.querySelectorAll("main > h1");

const observeElement2 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      var fondo = document.querySelector("#containerObserver");
      entry.target.classList.add("animationDesplazaR");
      fondo.style.background = "black";
    }
  });
};

const observer2 = new IntersectionObserver(observeElement2, {
  root: parent,
  threshold: 0.5,
});

elements2.forEach((element1) => {
  observer2.observe(element1);
});

const elements3 = document.querySelectorAll("main > h3");

const observeElement3 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animationDesplazaL");
    }
  });
};

const observer3 = new IntersectionObserver(observeElement3, {
  root: parent,
  threshold: 0.5,
});

elements3.forEach((element3) => {
  observer3.observe(element3);
});

// navbar

const nav1 = document.querySelectorAll("nav");

const navbar = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("navbarfixed");
    }
  });
};

const observer4 = new IntersectionObserver(navbar, {
  root: parent,
  threshold: 0.5,
});

nav1.forEach((element4) => {
  observer4.observe(element4);
});
