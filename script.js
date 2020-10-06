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
	var k = event.keyCode;

	if (k=='13') { search() }
}

var search_bar = document.getElementById("search_input");
var frame = document.getElementById("frame");
function search() {
	let s = search_bar.textContent;
	console.log(s);
	search_bar.textContent = "";
	//frame.src = 
}