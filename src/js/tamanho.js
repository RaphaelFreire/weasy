// MENU RESPONSIVO

const $tamanho = document.querySelector(".info");
// const $megaMenu = document.querySelector(".menu");

console.log($tamanho);
// console.log($megaMenu);

$tamanho.addEventListener("click", () =>{
  $tamanho.classList.toggle("-active");
})
