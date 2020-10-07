var screens = {
	log: document.getElementById("log"),
	browser: document.getElementById("browser")
}

function screen(screen_name) {
	let keys = Object.keys(screens)
	let length = keys.length;

	for (let i=0; i<length; i++) {
		if (screen_name != keys[i]) {
			screens[keys[i]].style.display = 'none';
		}
	}

	screens[screen_name].style.display = 'flex';
}

function log(t) {
	type.text = t.split(/(?:\r\n|\r|\n)/g);;
	type.timer = 0;
	type.line = 0;

	type.area.innerHTML = "";
	typer();
}

var type = {
	text: [],
	timer: 0,
	line: 0,
	speed: 40,
	cursor: "_",
	cursor_visible: false,
	break_timer: 0,
	break_length: 9, //must be an odd number
	end_of_line: false,
	area: document.getElementById("logtext")
}
function typer() {
	let { text, timer, line, speed, cursor, cursor_visible, break_timer, break_length, end_of_line, area } = type;

	if (end_of_line) {
		if (cursor_visible) {
			area.innerHTML = area.innerHTML.slice(0,-1);
		} else {
			area.innerHTML += cursor;
		}
		type.cursor_visible = !cursor_visible;

		if (break_timer >= break_length) {
			type.break_timer = 0;
			type.timer = 0;
			type.line++;
			type.end_of_line = false;
			area.innerHTML += "<br />"

			if (type.line >= text.length) { return }
		} else {
			type.break_timer++;
		}

		setTimeout(typer, speed)
	}

	if (timer <= text[line].length) {
		area.innerHTML += text[line].charAt(timer);
		type.timer++;
		if (timer == text[line].length) { type.end_of_line = true }
		setTimeout(typer, speed)
	}
}

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
var search_history = ["necromancy.club"];
var sh_value = 0;
var links = {
	necromancy_club: "necromancy.club",
	email: "email.com",
	freq: "/freq"
}

var apples = 'apples';

function search() {
	let s = search_bar.value;
	if (s.trim() == "") {
		search_bar.value = "";
		return
	}

	if (s != search_history[search_history.length-1]) {
		search_history.push(s);
	}

	let link_key = Object.keys(links).find(key => links[key] === s);

	if (!link_key) {
		frame.src = "websites/error.html";
		return
	}

	frame.src = "websites/"+link_key+".html";
}

function load_update() {
	let s = frame.contentWindow.location.href;
	s = s.split("/");
	s = s[s.length-1];
	s = s.replace(".html", "");

	search_bar.value = links[s];
}

function scroll_history() {
	search_bar.value = search_history[search_history.length-1-sh_value];
}