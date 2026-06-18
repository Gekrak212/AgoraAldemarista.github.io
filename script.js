const links = document.querySelectorAll(".nav-links a");

const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* ===================== */
/* ZOOM IMÁGENES PRO */
/* ===================== */

const imagenes = document.querySelectorAll(".img-expandible");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const cerrar = document.getElementById("close");

imagenes.forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("show");
        modalImg.src = img.src;
    });
});

cerrar.addEventListener("click", () => {
    modal.classList.remove("show");
    modalImg.src = "";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
        modalImg.src = "";
    }
});