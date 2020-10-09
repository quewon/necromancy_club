var dialog = {};
dialog.START = `<b onclick="clear_log();log(dialog.LOG0)">log me in, boss</b>`;
dialog.LOG0 = `you are <b onclick="log(dialog.LOG1)">unemployed</b>.`;
dialog.LOG1 =
`you used to be a researcher at <a onclick="screen('browser');hyperlink('spark', 'genetics')">Spark Genetics</a>. you studied rice, mainly, but had a foot in various plant-related projects. all those projects fell apart when the new management took over. <b onclick="log(dialog.LOG2)">years of work and funding down the drain</b>.`;
dialog.LOG2 =
`but you aren't as bitter as you are bored. and when you're bored, your thoughts begin to drift towards <b onclick="log(dialog.LOG3)">your high school days</b>.`;
dialog.LOG3 =
`<a onclick="screen('browser');hyperlink('necromancy_club')">the club</a>.`;

var nc = {
	locked: true,
	admin_emails: ["rosebirdman@email.com", "d@spark.inc"],
	password: "iwillnotpracticenecromancy"
}

var mail = {};
mail.contacts = {
	player: {
		address: "rosebirdman@email.com",
		icon: "icons/d.jpg"
	},
	D: {
		address: "d@spark.inc",
		icon: "icons/d.jpg"
	},
	SparkTech_Service: {
		address: "noreply@spark.inc",
		icon: "icons/spark.jpg"
	}
}

dialog.MAIL1 =
`dear rosie,
<br /><br />
come to the middle school next thursday, six pm, at the benches behind the courtyard. our founder has passed away. it won't be the funeral; the bayers have requested to hold it privately. but i hope we can come together once again in memory of the person that brought us together.
<br /><br />
- d`;