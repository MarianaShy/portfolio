`use strict`


//--------------navbar---------------


//-------------header----------------
	const sideMenu = document.getElementById("my-nav-menu");
	const burger = document.getElementById("burger");
	const main = document.getElementById("main");


burger.addEventListener("click", ()=>{(sideMenu.classList.contains('hidden')) ? sideMenu.classList.remove('hidden'):  sideMenu.classList.add('hidden')});
main.addEventListener("click", ()=>{ if (!sideMenu.classList.contains('hidden')) {sideMenu.classList.add('hidden')}});
sideMenu.addEventListener("click", ()=>sideMenu.classList.add('hidden'));


//--------------bio-------------

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-content");


function openTab(event, tabName) {
	for(tabLink of tabLinks) {
		tabLink.classList.remove("active-link")

	}
	for(tabContent of tabContents) {
		tabContent.classList.remove("active-tab")
		
	}
	event.currentTarget.classList.add("active-link")
	document.getElementById(tabName).classList.add("active-tab")
}
//------------------contact us

const noteForm = document.getElementById("contact-form");
const noteName = document.getElementById("contact-name");
const noteEmail = document.getElementById("contact-email");
const noteMessage = document.getElementById("form-message");
const hiMessage = document.getElementById("hi-message");

const noteSubmit = document.getElementById("contact-submit");
const notes = document.getElementById("information-output");




let notesStorage =  [];

   noteForm.addEventListener("submit", (e) => {
	e.preventDefault();
	notesStorage.push({ name: noteName.value, email: noteEmail.value, message: noteMessage.value });

	localStorage.setItem("notes", JSON.stringify(notesStorage));
	postData(noteName.value, noteEmail.value, noteMessage.value);
	noteEmail.value = "";
	noteName.value = "";
	noteMessage.value = "";
 });
function postData(name, mail, mess) {
	fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    name: name,
    mail: mail,
    message: mess
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => listBuilder(json.name, json.mail, json.mess));

}

const listBuilder = (name, email, message) => {
	const note = document.createElement("li");
	note.innerHTML = `<div class="text-style-admin">${name} wrote: "${message}". Use this email address to reach out to ${name}: <a href="mailto:${email}" class="">${email}</a></div> <button onclick=deleteNote(this) class="btn" >Delete message</button>`;
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


function fetchPassword(callback) {
	fetch('./generated.json').then((response) => {
	  response.json().then((data) => {
		 let passwordData = data[0].password;
		 callback(passwordData);
		 
	  });
	})
	
 }
 const logInButton = document.getElementById("log-in");
 const adminDashboard = document.getElementById("admin-dashboard");
 const passwordInput = document.getElementById("password-input");
 const logInForm = document.getElementById("log-in-form");
 const logOutForm = document.getElementById("log-out");

function hideDashboard (){ 
	adminDashboard.style.display = 'none';
		logInForm.innerHTML = `<input id="password-input" type="password" value="" class="form-field"  placeholder="Password">
	<button class="btn" id="log-in">Log in</button>`;
};


function authorizeAdmin(password) {
	if(passwordInput.value === password) { 
		adminDashboard.style.display = 'block';
		logInForm.innerHTML = `<button class="btn" id="log-out" onclick="hideDashboard()">Log out</button>`;
	}
		
	else {
		alert("Password is not correct. Please try again.");
		adminDashboard.style.display = 'none';
	}
}

logInButton.addEventListener("click", function () {
	fetchPassword(authorizeAdmin);
 });

 

	
//-----------------gitHub API-----------
/*
const accessToken = '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';
const username = 'marianashy';

fetch(`https://api.github.com/users/${username}`, {
  headers: {
    Authorization: `Bearer  ${accessToken}`
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(user => {
  displayFromGitHub(user);
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});
function displayFromGitHub(infoFromApi){
	const email = document.getElementById('git-sours-email')
	const emailLink = document.getElementsByClassName('git-sours-email-link')
	emailLink.href = "mailto:" + infoFromApi.login;
	
	email.innerHTML = infoFromApi.login;
	console.log(infoFromApi.login)
}*/