var dialog = {};
dialog.START = `<b onclick="clear_log();log(dialog.LOG0)">log me in, boss</b>`;
dialog.LOG0 = `you are <b onclick="log(dialog.LOG1)">unemployed</b>.`;
dialog.LOG1 =
`you used to be a researcher at <a onclick="screen('browser');hyperlink('spark.inc/genetics')">Spark Genetics</a>. you studied rice, mainly, but had a foot in various plant-related projects. all those projects fell apart when the new management took over. <b onclick="log(dialog.LOG2)">years of work and funding down the drain</b>.`;
dialog.LOG2 =
`but you aren't as bitter as you are bored. and when you're bored, your thoughts begin to drift towards <b onclick="log(dialog.LOG3)">your high school days</b>.`;
dialog.LOG3 =
`<a onclick="hyperlink('necromancy.club')">the club</a>.`;

var nc = {
	locked: true,
	admin_emails: ["rosebirdman@email.com", "d@spark.inc"],
	password: "iwillnotpracticenecromancy"
}

var mail = {};
mail.contacts = {
	player: {
		address: "rosebirdman@email.com",
		icon: "icons/d.png"
	},
	D: {
		address: "d@spark.inc",
		icon: "icons/d.png"
	},
	SparkTech_Service: {
		address: "noreply@spark.inc",
		icon: "icons/spark.png"
	}
}

dialog.MAIL1 =
`dear rosie,
<br /><br />
come to <a onclick="parent.hyperlink('spark.inc/map')">HS</a> next thursday, six pm, at the benches behind the courtyard. our founder has passed away. it won't be the funeral; the bayers have requested to hold it privately. but i hope we can come together once again in memory of the person that brought us together.
<br /><br />
- d`;
dialog.MAIL2 =
`hello! this email is registered as (one of) the administrator email(s). you have requested the password to your locked website, <a onclick="parent.hyperlink('necromancy.club')">necromancy.club</a>.
<br /><br />
password: iwillnotpracticenecromancy
<br /><br />
if you did not make this password request, too bad! just kidding. try improving your security by limiting the number of people you share your email password with, or by not leaving your account logged in when you leave an internet device.`;