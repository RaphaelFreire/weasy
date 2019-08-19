// MENU RESPONSIVO

const $megaMenuList = document.querySelector(".mega-menu-list");
const $megaMenu = document.querySelector(".menu");

console.log($megaMenuList);
console.log($megaMenu);

$megaMenu.addEventListener("click", () =>{
  $megaMenu.classList.toggle("-fechado");
})


// MENU FILTRO LATERAL

// $(document).ready(function () {
//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar').toggleClass('active');
//     });
// });