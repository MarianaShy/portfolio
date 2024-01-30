`use strict`


//navbar


	const sideMenu = document.getElementById("my-nav-menu");
	const burger = document.getElementById("burger");
	const main = document.getElementById("main");


	
	function toggleSideMenu() {
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
	}
burger.addEventListener("click", toggleSideMenu) 
main.addEventListener("click", closeSideMenu)
	

