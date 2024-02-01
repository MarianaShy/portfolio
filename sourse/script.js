`use strict`


//navbar

/*function toggleSideMenu() {
		if(sideMenu.classList.contains('hidden')){
				sideMenu.classList.remove('hidden')
		}
		else{
			sideMenu.classList.add('hidden')
			}
	}
	function closeSideMenu() {
		if(!sideMenu.classList.contains('hidden')){
				sideMenu.classList.add('hidden')
		}
	}*/

//-------------header----------------
	const sideMenu = document.getElementById("my-nav-menu");
	const burger = document.getElementById("burger");
	const main = document.getElementById("main");


burger.addEventListener("click", ()=>{(sideMenu.classList.contains('hidden')) ? sideMenu.classList.remove('hidden'):  sideMenu.classList.add('hidden')});
main.addEventListener("click", ()=>{ if (!sideMenu.classList.contains('hidden')) {sideMenu.classList.add('hidden')}});
	


//--------------bio-------------

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-content");


function openTab(tabname) {
	for(tabLink of tabLinks) {
		tabLink.classList.remove("active-link")

	}
	for(tabContent of tabContents) {
		tabContent.classList.remove("active-tab")
		
	}
	event.currentTarget.classList.add("active-link")
	document.getElementById(tabname).classList.add("active-tab")
}


//--------------------contacts-----------

if (typeof(Storage) !== "undefined") {
	// Code for localStorage/sessionStorage.
 } else {
	// Sorry! No Web Storage support..
 }
 localStorage.setItem("lastname", "Smith");

 // Retrieve
 document.getElementById("result").innerHTML = localStorage.getItem("lastname");