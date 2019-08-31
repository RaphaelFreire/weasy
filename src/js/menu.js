// MENU RESPONSIVO

// const $megaMenuList = document.querySelector(".mega-menu-list");
const $megaMenu = document.querySelector(".menu");

console.log($megaMenu);

$megaMenu.addEventListener("click", () => {
	$megaMenu.classList.toggle("-fechado");
});

// ALTERNANDO AS IMAGENS DO MEGA-MENU

// IMAGEM 1
const $imageMenu = document.querySelector("#imagem-menu");

$imageMenu.addEventListener("mouseover", () => {
	const $element = document.querySelector(".imagem-menu");
	const $style = getComputedStyle($element);
	$element.classList.add("imagem-menu-troca");
});

$imageMenu.addEventListener("mouseleave", () => {
	const $element = document.querySelector(".imagem-menu");
	const $style = getComputedStyle($element);
	$element.classList.remove("imagem-menu-troca");
});

// // IMAGEM 2
const $imageMenu2 = document.querySelector("#imagem-menu2");

$imageMenu2.addEventListener("mouseover", () => {
	const $element2 = document.querySelector(".imagem-menu");
	const $style2 = getComputedStyle($element2);
	$element2.classList.add("imagem-menu-troca2");
});

$imageMenu2.addEventListener("mouseleave", () => {
	const $element2 = document.querySelector(".imagem-menu");
	const $style2 = getComputedStyle($element2);
	$element2.classList.remove("imagem-menu-troca2");
});

// // IMAGEM 3
const $imageMenu3 = document.querySelector("#imagem-menu3");

$imageMenu3.addEventListener("mouseover", () => {
	const $element3 = document.querySelector(".imagem-menu");
	const $style3 = getComputedStyle($element3);
	$element3.classList.add("imagem-menu-troca3");
});

$imageMenu3.addEventListener("mouseleave", () => {
	const $element3 = document.querySelector(".imagem-menu");
	const $style3 = getComputedStyle($element3);
	$element3.classList.remove("imagem-menu-troca3");
});

// // IMAGEM 4
const $imageMenu4 = document.querySelector("#imagem-menu4");

$imageMenu4.addEventListener("mouseover", () => {
	const $element4 = document.querySelector(".imagem-menu");
	const $style4 = getComputedStyle($element4);
	$element4.classList.add("imagem-menu-troca4");
});

$imageMenu4.addEventListener("mouseleave", () => {
	const $element4 = document.querySelector(".imagem-menu");
	const $style4 = getComputedStyle($element4);
	$element4.classList.remove("imagem-menu-troca4");
});

// // IMAGEM 5
const $imageMenu5 = document.querySelector("#imagem-menu5");

$imageMenu5.addEventListener("mouseover", () => {
	const $element5 = document.querySelector(".imagem-menu");
	const $style5 = getComputedStyle($element5);
	$element5.classList.add("imagem-menu-troca5");
});

$imageMenu5.addEventListener("mouseleave", () => {
	const $element5 = document.querySelector(".imagem-menu");
	const $style5 = getComputedStyle($element5);
	$element5.classList.remove("imagem-menu-troca5");
});

// IMAGEM 6
const $imageMenu6 = document.querySelector("#imagem-menu6");

$imageMenu6.addEventListener("mouseover", () => {
	const $element6 = document.querySelector(".imagem-menu");
	const $style6 = getComputedStyle($element6);
	$element6.classList.add("imagem-menu-troca6");
});

$imageMenu6.addEventListener("mouseleave", () => {
	const $element6 = document.querySelector(".imagem-menu");
	const $style6 = getComputedStyle($element6);
	$element6.classList.remove("imagem-menu-troca6");
});

// // IMAGEM 7
const $imageMenu7 = document.querySelector("#imagem-menu7");

$imageMenu7.addEventListener("mouseover", () => {
	const $element7 = document.querySelector(".imagem-menu");
	const $style7 = getComputedStyle($element7);
	$element7.classList.add("imagem-menu-troca7");
});

$imageMenu7.addEventListener("mouseleave", () => {
	const $element7 = document.querySelector(".imagem-menu");
	const $style7 = getComputedStyle($element7);
	$element7.classList.remove("imagem-menu-troca7");
});

// // IMAGEM 8
const $imageMenu8 = document.querySelector("#imagem-menu8");

$imageMenu8.addEventListener("mouseover", () => {
	const $element8 = document.querySelector(".imagem-menu");
	const $style8 = getComputedStyle($element8);
	$element8.classList.add("imagem-menu-troca8");
});

$imageMenu8.addEventListener("mouseleave", () => {
	const $element8 = document.querySelector(".imagem-menu");
	const $style8 = getComputedStyle($element8);
	$element8.classList.remove("imagem-menu-troca8");
});

// IMAGEM 9
const $imageMenu9 = document.querySelector("#imagem-menu9");

$imageMenu9.addEventListener("mouseover", () => {
	const $element9 = document.querySelector(".imagem-menu");
	const $style9 = getComputedStyle($element9);
	$element9.classList.add("imagem-menu-troca9");
});

$imageMenu9.addEventListener("mouseleave", () => {
	const $element9 = document.querySelector(".imagem-menu");
	const $style9 = getComputedStyle($element9);
	$element9.classList.remove("imagem-menu-troca9");
});

// // IMAGEM 10
const $imageMenu10 = document.querySelector("#imagem-menu10");

$imageMenu10.addEventListener("mouseover", () => {
	const $element10 = document.querySelector(".imagem-menu");
	const $style10 = getComputedStyle($element10);
	$element10.classList.add("imagem-menu-troca10");
});

$imageMenu10.addEventListener("mouseleave", () => {
	const $element10 = document.querySelector(".imagem-menu");
	const $style10 = getComputedStyle($element10);
	$element10.classList.remove("imagem-menu-troca10");
});

// // IMAGEM 11
const $imageMenu11 = document.querySelector("#imagem-menu11");

$imageMenu11.addEventListener("mouseover", () => {
	const $element11 = document.querySelector(".imagem-menu");
	const $style11 = getComputedStyle($element11);
	$element11.classList.add("imagem-menu-troca11");
});

$imageMenu11.addEventListener("mouseleave", () => {
	const $element11 = document.querySelector(".imagem-menu");
	const $style11 = getComputedStyle($element11);
	$element11.classList.remove("imagem-menu-troca11");
});

// // IMAGEM 12
const $imageMenu12 = document.querySelector("#imagem-menu12");

$imageMenu12.addEventListener("mouseover", () => {
	const $element12 = document.querySelector(".imagem-menu");
	const $style12 = getComputedStyle($element12);
	$element12.classList.add("imagem-menu-troca12");
});

$imageMenu12.addEventListener("mouseleave", () => {
	const $element12 = document.querySelector(".imagem-menu");
	const $style12 = getComputedStyle($element12);
	$element12.classList.remove("imagem-menu-troca12");
});

// // IMAGEM 13
const $imageMenu13 = document.querySelector("#imagem-menu13");

$imageMenu13.addEventListener("mouseover", () => {
	const $element13 = document.querySelector(".imagem-menu");
	const $style13 = getComputedStyle($element13);
	$element13.classList.add("imagem-menu-troca13");
});

$imageMenu13.addEventListener("mouseleave", () => {
	const $element13 = document.querySelector(".imagem-menu");
	const $style13 = getComputedStyle($element13);
	$element13.classList.remove("imagem-menu-troca13");
});

// // IMAGEM 14
const $imageMenu14 = document.querySelector("#imagem-menu14");

$imageMenu14.addEventListener("mouseover", () => {
	const $element14 = document.querySelector(".imagem-menu");
	const $style14 = getComputedStyle($element14);
	$element14.classList.add("imagem-menu-troca14");
});

$imageMenu14.addEventListener("mouseleave", () => {
	const $element14 = document.querySelector(".imagem-menu");
	const $style14 = getComputedStyle($element14);
	$element14.classList.remove("imagem-menu-troca14");
});

// // IMAGEM 15
const $imageMenu15 = document.querySelector("#imagem-menu15");

$imageMenu15.addEventListener("mouseover", () => {
	const $element15 = document.querySelector(".imagem-menu");
	const $style15 = getComputedStyle($element15);
	$element15.classList.add("imagem-menu-troca15");
});

$imageMenu15.addEventListener("mouseleave", () => {
	const $element15 = document.querySelector(".imagem-menu");
	const $style15 = getComputedStyle($element15);
	$element15.classList.remove("imagem-menu-troca15");
});

// // IMAGEM 16
const $imageMenu16 = document.querySelector("#imagem-menu16");

$imageMenu16.addEventListener("mouseover", () => {
	const $element16 = document.querySelector(".imagem-menu");
	const $style16 = getComputedStyle($element16);
	$element16.classList.add("imagem-menu-troca16");
});

$imageMenu16.addEventListener("mouseleave", () => {
	const $element16 = document.querySelector(".imagem-menu");
	const $style16 = getComputedStyle($element16);
	$element16.classList.remove("imagem-menu-troca16");
});

// // IMAGEM 17
const $imageMenu17 = document.querySelector("#imagem-menu17");

$imageMenu17.addEventListener("mouseover", () => {
	const $element17 = document.querySelector(".imagem-menu");
	const $style17 = getComputedStyle($element17);
	$element17.classList.add("imagem-menu-troca17");
});

$imageMenu17.addEventListener("mouseleave", () => {
	const $element17 = document.querySelector(".imagem-menu");
	const $style17 = getComputedStyle($element17);
	$element17.classList.remove("imagem-menu-troca17");
});

// // IMAGEM 18
const $imageMenu18 = document.querySelector("#imagem-menu18");

$imageMenu18.addEventListener("mouseover", () => {
	const $element18 = document.querySelector(".imagem-menu");
	const $style18 = getComputedStyle($element18);
	$element18.classList.add("imagem-menu-troca18");
});

$imageMenu18.addEventListener("mouseleave", () => {
	const $element18 = document.querySelector(".imagem-menu");
	const $style18 = getComputedStyle($element18);
	$element18.classList.remove("imagem-menu-troca18");
});

// // IMAGEM 19
const $imageMenu19 = document.querySelector("#imagem-menu19");

$imageMenu19.addEventListener("mouseover", () => {
	const $element19 = document.querySelector(".imagem-menu");
	const $style19 = getComputedStyle($element19);
	$element19.classList.add("imagem-menu-troca19");
});

$imageMenu19.addEventListener("mouseleave", () => {
	const $element19 = document.querySelector(".imagem-menu");
	const $style19 = getComputedStyle($element19);
	$element19.classList.remove("imagem-menu-troca19");
});

// // IMAGEM 20
const $imageMenu20 = document.querySelector("#imagem-menu20");

$imageMenu20.addEventListener("mouseover", () => {
	const $element20 = document.querySelector(".imagem-menu");
	const $style20 = getComputedStyle($element20);
	$element20.classList.add("imagem-menu-troca20");
});

$imageMenu20.addEventListener("mouseleave", () => {
	const $element20 = document.querySelector(".imagem-menu");
	const $style20 = getComputedStyle($element20);
	$element20.classList.remove("imagem-menu-troca20");
});

// // IMAGEM 21
const $imageMenu21 = document.querySelector("#imagem-menu21");

$imageMenu21.addEventListener("mouseover", () => {
	const $element21 = document.querySelector(".imagem-menu");
	const $style21 = getComputedStyle($element21);
	$element21.classList.add("imagem-menu-troca21");
});

$imageMenu21.addEventListener("mouseleave", () => {
	const $element21 = document.querySelector(".imagem-menu");
	const $style21 = getComputedStyle($element21);
	$element21.classList.remove("imagem-menu-troca21");
});

// // IMAGEM 22
const $imageMenu22 = document.querySelector("#imagem-menu22");

$imageMenu22.addEventListener("mouseover", () => {
	const $element22 = document.querySelector(".imagem-menu");
	const $style22 = getComputedStyle($element22);
	$element22.classList.add("imagem-menu-troca22");
});

$imageMenu22.addEventListener("mouseleave", () => {
	const $element22 = document.querySelector(".imagem-menu");
	const $style22 = getComputedStyle($element22);
	$element22.classList.remove("imagem-menu-troca22");
});

// // IMAGEM 23
const $imageMenu23 = document.querySelector("#imagem-menu23");

$imageMenu23.addEventListener("mouseover", () => {
	const $element23 = document.querySelector(".imagem-menu");
	const $style23 = getComputedStyle($element23);
	$element23.classList.add("imagem-menu-troca23");
});

$imageMenu23.addEventListener("mouseleave", () => {
	const $element23 = document.querySelector(".imagem-menu");
	const $style23 = getComputedStyle($element23);
	$element23.classList.remove("imagem-menu-troca23");
});

// // IMAGEM 24
const $imageMenu24 = document.querySelector("#imagem-menu24");

$imageMenu24.addEventListener("mouseover", () => {
	const $element24 = document.querySelector(".imagem-menu");
	const $style24 = getComputedStyle($element24);
	$element24.classList.add("imagem-menu-troca24");
});

$imageMenu24.addEventListener("mouseleave", () => {
	const $element24 = document.querySelector(".imagem-menu");
	const $style24 = getComputedStyle($element24);
	$element24.classList.remove("imagem-menu-troca24");
});

// // IMAGEM 25
const $imageMenu25 = document.querySelector("#imagem-menu25");

$imageMenu25.addEventListener("mouseover", () => {
	const $element25 = document.querySelector(".imagem-menu");
	const $style25 = getComputedStyle($element25);
	$element25.classList.add("imagem-menu-troca25");
});

$imageMenu25.addEventListener("mouseleave", () => {
	const $element25 = document.querySelector(".imagem-menu");
	const $style25 = getComputedStyle($element25);
	$element25.classList.remove("imagem-menu-troca25");
});

// // IMAGEM 26
const $imageMenu26 = document.querySelector("#imagem-menu26");

$imageMenu26.addEventListener("mouseover", () => {
	const $element26 = document.querySelector(".imagem-menu");
	const $style26 = getComputedStyle($element26);
	$element26.classList.add("imagem-menu-troca26");
});

$imageMenu26.addEventListener("mouseleave", () => {
	const $element26 = document.querySelector(".imagem-menu");
	const $style26 = getComputedStyle($element26);
	$element26.classList.remove("imagem-menu-troca26");
});

// // IMAGEM 27
const $imageMenu27 = document.querySelector("#imagem-menu27");

$imageMenu27.addEventListener("mouseover", () => {
	const $element27 = document.querySelector(".imagem-menu");
	const $style27 = getComputedStyle($element27);
	$element27.classList.add("imagem-menu-troca27");
});

$imageMenu27.addEventListener("mouseleave", () => {
	const $element27 = document.querySelector(".imagem-menu");
	const $style27 = getComputedStyle($element27);
	$element27.classList.remove("imagem-menu-troca27");
});

// // IMAGEM 28
const $imageMenu28 = document.querySelector("#imagem-menu28");

$imageMenu28.addEventListener("mouseover", () => {
	const $element28 = document.querySelector(".imagem-menu");
	const $style28 = getComputedStyle($element28);
	$element28.classList.add("imagem-menu-troca28");
});

$imageMenu28.addEventListener("mouseleave", () => {
	const $element28 = document.querySelector(".imagem-menu");
	const $style28 = getComputedStyle($element28);
	$element28.classList.remove("imagem-menu-troca28");
});

// // IMAGEM 29
const $imageMenu29 = document.querySelector("#imagem-menu29");

$imageMenu29.addEventListener("mouseover", () => {
	const $element29 = document.querySelector(".imagem-menu");
	const $style29 = getComputedStyle($element29);
	$element29.classList.add("imagem-menu-troca29");
});

$imageMenu29.addEventListener("mouseleave", () => {
	const $element29 = document.querySelector(".imagem-menu");
	const $style29 = getComputedStyle($element29);
	$element29.classList.remove("imagem-menu-troca29");
});

// // IMAGEM 30
const $imageMenu30 = document.querySelector("#imagem-menu30");

$imageMenu30.addEventListener("mouseover", () => {
	const $element30 = document.querySelector(".imagem-menu");
	const $style30 = getComputedStyle($element30);
	$element30.classList.add("imagem-menu-troca30");
});

$imageMenu30.addEventListener("mouseleave", () => {
	const $element30 = document.querySelector(".imagem-menu");
	const $style30 = getComputedStyle($element30);
	$element30.classList.remove("imagem-menu-troca30");
});

// // IMAGEM 31
const $imageMenu31 = document.querySelector("#imagem-menu31");

$imageMenu31.addEventListener("mouseover", () => {
	const $element31 = document.querySelector(".imagem-menu");
	const $style31 = getComputedStyle($element31);
	$element31.classList.add("imagem-menu-troca31");
});

$imageMenu31.addEventListener("mouseleave", () => {
	const $element31 = document.querySelector(".imagem-menu");
	const $style31 = getComputedStyle($element31);
	$element31.classList.remove("imagem-menu-troca31");
});

// // IMAGEM 32
const $imageMenu32 = document.querySelector("#imagem-menu32");

$imageMenu32.addEventListener("mouseover", () => {
	const $element32 = document.querySelector(".imagem-menu");
	const $style32 = getComputedStyle($element32);
	$element32.classList.add("imagem-menu-troca32");
});

$imageMenu32.addEventListener("mouseleave", () => {
	const $element32 = document.querySelector(".imagem-menu");
	const $style32 = getComputedStyle($element32);
	$element32.classList.remove("imagem-menu-troca32");
});
























$imageMenu33.addEventListener("mouseleave", () => {
	const $element33 = document.querySelector(".imagem-menu");
	const $style33 = getComputedStyle($element33);
	$element33.classList.remove("imagem-menu-troca33");
});

// MENU FILTRO LATERAL

// $(document).ready(function () {
//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar').toggleClass('active');
//     });
// });
