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
const noteForm = document.getElementById("contact-form");
const noteName = document.getElementById("contact-name");
const noteEmail = document.getElementById("contact-email");

const noteSubmit = document.getElementById("contact-submit");
const notes = document.getElementById("information-output");

let notesStorage = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

  noteForm.addEventListener("submit", (e) => {
	e.preventDefault();
	notesStorage.push({ name: noteName.value, email: noteEmail.value });
 
	localStorage.setItem("notes", JSON.stringify(notesStorage));
	listBuilder(noteName.value, noteEmail.value);
	noteEmail.value = "";
	noteName.value = "";
 });

const listBuilder = (name, email) => {
  const note = document.createElement("li");
  note.innerHTML = `<button onclick=deleteNote(this) class="btn" >Delete message</button> ${name} wrote from ${email} `;
  notes.appendChild(note);
};

const getNotes = JSON.parse(localStorage.getItem("notes")) || [];
getNotes.forEach((note) => {
  listBuilder(note.name, note.email);
});

const deleteNote = (btn) => {
  let el = btn.parentNode;
  const index = [...el.parentElement.children].indexOf(el);
  notesStorage.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
  el.remove();
};
