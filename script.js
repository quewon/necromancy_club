// screens

var screens = {
	log: document.getElementById("log"),
	browser: document.getElementById("browser")
}
var current_screen;

function screen(screen_name) {
	let keys = Object.keys(screens)
	let length = keys.length;

	for (let i=0; i<length; i++) {
		if (screen_name != keys[i]) {
			screens[keys[i]].style.display = 'none';
		}
	}

	screens[screen_name].style.display = 'block';
	current_screen = screen_name;
}

// browsing

function key(e) {
	let k = event.keyCode || event.which;

	if (k===13) {
		event.preventDefault();
		search();
		sh_value = 0;
	}
}

function keyd(e) {
	let k = event.keyCode || event.which;

	if (k===40) {
		event.preventDefault();
		if (sh_value>0) { sh_value--; }
		scroll_history()
	}
	if (k===38) {
		event.preventDefault();
		if (sh_value<search_history.length-1) {
			sh_value++;
		}
		scroll_history()
	}
}

var search_bar = document.getElementById("search_input");
var frame = document.getElementById("frame");
var search_type = document.getElementById("search_type");
var search_history = ["necromancy.club"];
var sh_value = 0;
var links = {
	necromancy_club: "necromancy.club",
	email: "email.com",
	freq: "freq"
}

function search() {
	let s = search_bar.value;
	if (s.trim() == "") {
		search_bar.value = "";
		return
	}

	if (s != search_history[search_history.length-1]) {
		search_history.push(s);
	}
	search_type.textContent = 'link>'
	if (s == links.freq) {
		search_type.textContent = 'ctrl>'
	}

	let link_key = Object.keys(links).find(key => links[key] === s);

	if (!link_key) {
		frame.src = "websites/error.html";
		return
	}

	frame.src = "websites/"+link_key+"/index.html";
}

function load_update() {
	let s = frame.contentWindow.location.href;
	console.log(s);
	s = s.split("/");
	s = s[s.length-2];

	if (links[s] != undefined) {
		s = links[s];
		search_bar.value = s;
		if (s != search_history[search_history.length-1]) {
			search_history.push(s);
		}
	} else {
		if (s != search_history[search_history.length-1]) {
			search_history.push(s);
		}
	}

	search_type.textContent = 'link>'
	if (s == links.freq) {
		search_type.textContent = 'ctrl>'
	}
}

function scroll_history() {
	search_bar.value = search_history[search_history.length-1-sh_value];
}

// dialogs

function log(t, link) {
	if (current_screen != 'log') {
		screen('log');
	}
	let textarea = document.getElementById("logtext");
	textarea.innerHTML = t;
}

function browse(link) {
	if (current_screen != 'browser') {
		screen('browser');
	}
	search_bar.value = link;
	search()
}