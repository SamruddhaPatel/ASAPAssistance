 const firebaseConfig = {
  apiKey: "AIzaSyCdoubbT2qARS47TGdpWmA3LUZ8cx09YzQ",
  authDomain: "asap-assistance-mxiblm.firebaseapp.com",
  databaseURL: "https://asap-assistance-mxiblm.firebaseio.com",
  projectId: "asap-assistance-mxiblm",
  storageBucket: "asap-assistance-mxiblm.appspot.com",
  messagingSenderId: "580727106052",
  appId: "1:580727106052:web:0f1dc5fbff38520b1f2351"
};

var database = firebase.database().ref().child('users');
database.once('value', function(snapshot){
	if(snapshot.exists()){
		var content = '';

		snapshot.forEach(function(data){
			var Name = data.val().UserName;
			var Age = data.val().Age;
			var Mood = data.val().Mood;
			var Time = data.val().Time;
			var Location = data.val().Location;
			var Assisstance = data.val().AssisstanceRequired;
			var Phone = data.val().PhoneNumber;
			content += '<tr>';
			content += '<td>' + Name + '</td>';         //column1
			content += '<td>' + Age + '</td>';  	    //column2
			content += '<td>' + Mood + '</td>';	 	    //column3
			content += '<td>' + Time + '</td>';	    	//column4
			content += '<td>' + Location + '</td>';	    //column5
			content += '<td>' + Assisstance + '</td>';  //column6
			content += '<td>' + Phone + '</td>';		//column7
			content += '</tr>';
		});

		$('#ex-table').append(content);
	}
});