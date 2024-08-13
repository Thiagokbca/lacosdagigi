//Gravatas
const cardsWrapper = document.querySelector(".plan-content");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function scrollLeft() {
  const imageWidth = window.innerWidth; // Largura da imagem (ajuste conforme necessário)
  const scrollAmount = imageWidth * 0.91; // Porcentagem ajustável (80% neste exemplo)
  cardsWrapper.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
}

function scrollRight() {
  const imageWidth = window.innerWidth; // Largura da imagem (ajuste conforme necessário)
  const scrollAmount = imageWidth * 0.92; // Porcentagem ajustável (80% neste exemplo)
  cardsWrapper.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
}
prev.addEventListener("click", scrollLeft);
next.addEventListener("click", scrollRight);

//Colarinhos
const cardsWrapper1 = document.querySelector(".colarinhos");
const prev1 = document.querySelector(".prev1");
const next1 = document.querySelector(".next1");

function scrollLeft1() {
  const imageWidth = window.innerWidth; // Largura da imagem (ajuste conforme necessário)
  const scrollAmount = imageWidth * 0.91; // Porcentagem ajustável (80% neste exemplo)
  cardsWrapper1.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
}

function scrollRight1() {
  const imageWidth = window.innerWidth; // Largura da imagem (ajuste conforme necessário)
  const scrollAmount = imageWidth * 0.92; // Porcentagem ajustável (80% neste exemplo)
  cardsWrapper1.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
}
prev1.addEventListener("click", scrollLeft1);
next1.addEventListener("click", scrollRight1);

//Temáticos
const cardsWrapper2 = document.querySelector(".tematicos");
const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");

function scrollLeft2() {
  const imageWidth = window.innerWidth; // Largura da imagem (ajuste conforme necessário)
  const scrollAmount = imageWidth * 0.9; // Porcentagem ajustável (80% neste exemplo)
  cardsWrapper2.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
}

function scrollRight2() {
  const imageWidth = window.innerWidth; // Largura da imagem (ajuste conforme necessário)
  const scrollAmount = imageWidth * 0.91; // Porcentagem ajustável (80% neste exemplo)
  cardsWrapper2.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
}
prev2.addEventListener("click", scrollLeft2);
next2.addEventListener("click", scrollRight2);

const btnMobile = document.getElementById("btn");
const nav = document.querySelector(".nav");
const navItens = document.querySelectorAll(".nav-itens");

function toggleMenu(event) {
  btnMobile.classList.toggle("active");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);

navItens.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

//Evento de pop-up
function abrirPopup(imgSrc) {
  // Obtém o elemento popup e a imagem dentro dele
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popupImage");

  // Define a fonte da imagem no popup
  popupImage.src = imgSrc;

  // Mostra o popup
  if (window.innerWidth >= 1024) {
    popup.style.display = "block";
  }
}

const closeButton = document.getElementsByClassName("close")[0];
const images = document.getElementsByTagName("img");

// Função para fechar o popup
function closePopup() {
  popup.style.display = "none";
}

// Adiciona evento de clique ao documento, excluindo imagens.
document.addEventListener("click", function (event) {
  if (event.target == closeButton || !event.target.closest("img")) {
    closePopup();
  }
});

// Função de carregamento preguiçoso das imagens
const lazyLoading = () => {
  //Buscar todas as imagens atravez da class ".lazy-load"
  var lazyImages = document.querySelectorAll(".lazy-load");
  lazyImages.forEach((img) => {
    //verifica se o topo da imagem está dentro da jenela visível do navegador.
    if (
      img.getBoundingClientRect().top < window.innerHeight &&
      img.getAttribute("data-src")
    ) {
      // Atribui a fonte da img data-src ao atributo src para carregá-la
      img.src = img.getAttribute("data-src");
      img.removeAttribute("data-src");
      img.classList.add("loading");
    }
  });
};
// Função vai ser executada quando todos os recursos da página forem carregados.
window.onload = () => {
  lazyLoading();
};
// Função vai ser executada quando ocorre o evento de rolagem da página
window.onscroll = () => {
  lazyLoading();
};
