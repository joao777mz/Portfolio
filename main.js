window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const termos = ["FRONT-END", "WEB"];
  const alvo = document.getElementById('palavra');
  if (!alvo) return;

  let i = 1;
  alvo.classList.add('show');

  function trocar() {

    alvo.classList.remove('show');

    setTimeout(() => {

      alvo.textContent = termos[i];
      alvo.classList.add('show');
      i = (i + 1) % termos.length;
    }, 300);
  }


  setInterval(trocar, 2000);
});


const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  hamburger.classList.toggle('active', open);
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.classList.toggle('menu-open', open);
});

menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const botaoTema = document.querySelector(".btn-tema");
  const icone = botaoTema.querySelector(".icone-tema");


  const temaSalvo = localStorage.getItem("tema");
  const temaSistema = window.matchMedia("(prefers-color-scheme: light)").matches ? "claro" : "escuro";
  const temaInicial = temaSalvo || temaSistema;

  aplicarTema(temaInicial);

  botaoTema.addEventListener("click", () => {
    const temaAtual = root.getAttribute("data-tema");
    const novoTema = temaAtual === "claro" ? "escuro" : "claro";
    aplicarTema(novoTema);
  });

  function aplicarTema(tema) {
    root.setAttribute("data-tema", tema);
    localStorage.setItem("tema", tema);
    botaoTema.setAttribute("aria-pressed", tema === "claro" ? "true" : "false");

    if (tema === "claro") {
      icone.innerHTML = `
        <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm10-7a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zM5 13a1 1 0 0 1-1-1H2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zm14.071 6.071a1 1 0 0 1-1.414 0l-1.414-1.415a1 1 0 1 1 1.415-1.414l1.414 1.414a1 1 0 0 1 0 1.415zM7.343 7.343a1 1 0 0 1-1.414 0L4.515 5.93a1 1 0 1 1 1.414-1.415L7.343 5.93a1 1 0 0 1 0 1.414zM18.364 5.93a1 1 0 1 1-1.415 1.414L15.535 5.93a1 1 0 1 1 1.414-1.415l1.415 1.415zM5.93 18.364a1 1 0 0 1-1.415-1.414l1.415-1.415a1 1 0 0 1 1.414 1.415L5.93 18.364zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>`; // sol
    } else {
      icone.innerHTML = `
        <path d="M21 12.79A9 9 0 0 1 12.79 3a7 7 0 1 0 8.21 9.79z"/>`;
    }
  }
});

const form = document.querySelector(".form-contato");
const modal = document.getElementById("modal");
const okModal = document.getElementById("okModal");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  modal.classList.add("show"); 
});

okModal.addEventListener("click", function () {
  modal.classList.remove("show"); 
});


