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


	const sideMenu = document.getElementById("my-nav-menu");
	const burger = document.getElementById("burger");
	const main = document.getElementById("main");


burger.addEventListener("click", ()=>{(sideMenu.classList.contains('hidden')) ? sideMenu.classList.remove('hidden'):  sideMenu.classList.add('hidden')});
main.addEventListener("click", ()=>{ if (!sideMenu.classList.contains('hidden')) {sideMenu.classList.add('hidden')}});
	

