	
var rootRef = firebase.database.ref().child("UserName");

rootRef.on("child_changed", snap => {

	var name = snap.child("Name").val();
	var age = snap.child("Age").val();
	var mood = snap.child("Mood").val();
	var time = snap.child("Time").val();
	var location = snap.child("Location").val();
	var assisstance = snap.child("AsisstanceRequired").val();
	var phone = snap.child("PhoneNumber").val();


	$("#table_body").append("<tr><td>" + name + "</td><td>" + age + 
		"</td><td>" + mood + 
		"</td><td>" + time + 
		"</td><td>" + location + 
		"</td><td>" + assisstance + 
		"</td><td>" + phone + 
		"</td></tr>");
});