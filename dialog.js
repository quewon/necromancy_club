var dialog = {
	LOG0:
`you are the first person to arrive at the club meeting. which is funny, because you're ten minutes late.

then again, it's been five years since the last meeting. taking a seat on a familiar plastic bench, you look around, taking in the view of your middle school campus covered in snow. you might be more nostalgic if <a onclick="log(dialog.LOG1)">the news</a> wasn't so grave.`
	,

	LOG1:
`a member of the necromancy club has <a onclick="log(dialog.LOG2)">died</a>.`
	,
	LOG2:
`another one, to be clear. it's as tragic as it is ironic. the necromancy club has never stopped haunting you, not after you moved away, not now that you're an adult. so it wasn't all that shocking, when you read <a onclick="browse('email.com')">the invitation</a>. almost like you had been anticipating something like this.`
};

var admin_emails = ["rosebirdman@email.com"];