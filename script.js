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
	freq: "freq",
	404: "404",
	spark: "spark.com"
}

function search() {
	let s = search_bar.value;
	if (s.trim() == "") {
		search_bar.value = "";
		return
	}

	s = s.split("/");
	s[0] = Object.keys(links).find(key => links[key] === s[0]);

	if (s.length == 1) {
		hyperlink(s[0])
	} else {
		hyperlink(s[0], s[1])
	}
}

//a function for other sites to use to go to different sites
//and for hyperlinks in log
//like this: parent.hyperlink('necromancy_club', 'main')
function hyperlink(link, page) {
	if (links[link] == undefined) {
		link = 404
	}

	//change search bar value
	search_bar.value = links[link];
	if (page) {
		search_bar.value += "/"+page;
	}

	search_type.textContent = 'link>'
	if (links[link] == links.freq || link == 404) {
		search_type.textContent = 'ctrl>'
	}

	//add search bar value to search history
	if (link != 404 && search_bar.value != search_history[search_history.length-1]) {
		search_history.push(search_bar.value);
	}

	//change frame source
	let source = "websites/"+link;
	if (!page) {
		source += "/index.html"
	} else {
		source += "/"+page+".html"
	}
	frame.src = source;

	console.log("hyperlinked: "+source);
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