// screens

var screens = {
	log: document.getElementById("log"),
	browser: document.getElementById("browser")
}
var current_screen;

function screen(screen_name) {
	if (current_screen == screen_name) {
		return
	}

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
var links = ["necromancy.club", "email.com", "spark.inc", "freq"];
var links_children = {
	necromancyclub: ["contact", "faq", "index", "members", "password-recovery", "password-recovery-done"],
	emailcom: ["index"],
	sparkinc: ["genetics", "index", "map"],
	freq: ["index"]
};

function search() {
	let s = search_bar.value;
	if (s.trim() == "") {
		search_bar.value = "";
		return
	}

	hyperlink(s);
}

//a function for other sites to use to go to different sites
//and for hyperlinks in log
function hyperlink(link) {
	screen('browser');

	link = link.split("/");

	let page = link[1];
	link = link[0];

	let page_not_found = false;
	if (!links.includes(link)) {
		page_not_found = true
	} else if (page) {
		if (!links_children[link.replace(/\./g, "")].includes(page)) {
			page_not_found = true
		}
	}

	if (!page_not_found) {
		//change search bar value
		search_bar.value = link;
		if (page) {
			search_bar.value += "/"+page;
		}

		search_type.textContent = 'link>'
		if (link == "freq") {
			search_type.textContent = 'ctrl>'
		}
	}

	//add search bar value to search history
	if (search_bar.value != search_history[search_history.length-1]) {
		search_history.push(search_bar.value);
	}

	//change frame source
	let source = "websites/"+link;
	if (!page) {
		source += "/index.html"
	} else {
		source += "/"+page+".html"
	}

	if (page_not_found) {
		source = "websites/404/index.html"
	}
	frame.src = source;

	console.log("hyperlinked: "+source);
}

function scroll_history() {
	search_bar.value = search_history[search_history.length-1-sh_value];
}

// dialogs

var log_area = document.getElementById("logtext");

function log(t) {
	if (current_screen != 'log') {
		screen('log');
	}

	//remove previous log tags
	let b = document.getElementsByTagName('b');
	while (b.length) {
		let parent = b[0].parentNode;
		while (b[0].firstChild) {
			parent.insertBefore(b[0].firstChild, b[0])
		}
		parent.removeChild(b[0])
	}

	if (log_area.innerHTML != "") {
		log_area.innerHTML += "<br /><br />" + t;
	} else {
		log_area.innerHTML = t;
	}
}

function clear_log() {
	log_area.innerHTML = "";
}

// sites

mail.inbox = [];
mail.trash = [];
mail.starred = [];

mail.create = function(sender, title, content, read) {
	let email = {};

	email.sender = sender || "Spark Tech _ Service";
	email.title = title || "[untitled]";
	email.content = content || "[unwritten]";
	email.read = read || false;

	let contact = mail.contacts[sender.replace(/\s/g, "")];
	let player_contact = mail.contacts.player;

	email.sender_address = contact.address;
	email.sender_icon = contact.icon;
	email.receiver = "me";
	email.receiver_address = player_contact.address;
	email.receiver_icon = player_contact.icon;

	mail.inbox.push(email);
};

mail.move = function(i, a, b) {
	mail[b].push(mail.inbox[i]);
	mail[a].splice(i,1)
}