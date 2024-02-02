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
const noteMessage = document.getElementById("form-message");
const hiMessage = document.getElementById("hi-message");

const noteSubmit = document.getElementById("contact-submit");
const notes = document.getElementById("information-output");




let notesStorage = localStorage.getItem("notes")
? JSON.parse(localStorage.getItem("notes"))
: [];

   noteForm.addEventListener("submit", (e) => {
	e.preventDefault();
	notesStorage.push({ name: noteName.value, email: noteEmail.value, message: noteMessage.value });

	localStorage.setItem("notes", JSON.stringify(notesStorage));
	listBuilder(noteName.value, noteEmail.value, noteMessage.value);
	noteEmail.value = "";
	noteName.value = "";
	noteMessage.value = "";
 });


 //Display the information from the reguest
const listBuilder = (name, email, message) => {
  const note = document.createElement("li");
  note.innerHTML = `<button onclick=deleteNote(this) class="btn" >Delete message</button> ${name} wrote: "${message}". Use this email address to reach out: <a href="meilto:${email}" class="">${email}</a> `;
  notes.appendChild(note);
  if(note){hiMessage.innerHTML = "Hi, dear admin. You have received some messages." }
  return note;
};


//loop over all requests that have been sent
const getNotes = JSON.parse(localStorage.getItem("notes")) || [];
getNotes.forEach((note) => {
  listBuilder(note.name, note.email, note.message);
});



// delete the note
const deleteNote = (btn, note) => {
  let el = btn.parentNode;
  const index = [...el.parentElement.children].indexOf(el);
  notesStorage.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
  el.remove();
  if(!note){hiMessage.innerHTML = "Hi, dear admin. You haven't received any new messages." }
};


//--------------------admin-----------

function authorizeAdmin() {
const adminDashboard = document.getElementById("admin-dashboard");
const passwordInput = document.getElementById("password-input");
const adminPassword = 21;
	if(passwordInput.value) { 
		alert("hi");
	}
	else{alert("no")}
}

