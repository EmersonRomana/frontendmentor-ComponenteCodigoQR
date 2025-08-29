// ===============================
// Textos em cada idioma
// ===============================
const textos = {
  pt: {
    titulo: "Melhore suas habilidades de front-end criando projetos",
    descricao:
      "Digitalize o código QR para visitar o Frontend Mentor e leve suas habilidades de codificação para o próximo nível",
  },
  en: {
    titulo: "Improve your front-end skills by building projects",
    descricao:
      "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  },
};

// ===============================
// Seletores do DOM
// ===============================
const menuIcon = document.getElementById("menu-icon");
const langMenu = document.getElementById("lang-menu");
const EN = document.getElementById("en-btn");
const PT = document.querySelector(".lang-btn"); // o primeiro botão (PT)
const titulo = document.querySelector("h2.traduzir");
const descricao = document.querySelector("p.traduzir");

// ===============================
// Menu de idiomas (abre/fecha)
// ===============================
menuIcon.addEventListener("click", function () {
  if (langMenu.style.display === "none" || langMenu.style.display === "") {
    langMenu.style.display = "block";
  } else {
    langMenu.style.display = "none";
  }
});

// ===============================
// Trocar para inglês
// ===============================
EN.addEventListener("click", function () {
  titulo.textContent = textos.en.titulo;
  descricao.textContent = textos.en.descricao;
  langMenu.style.display = "none";
});

// ===============================
// Voltar para português
// ===============================
PT.addEventListener("click", function () {
  titulo.textContent = textos.pt.titulo;
  descricao.textContent = textos.pt.descricao;
  langMenu.style.display = "none";
});
