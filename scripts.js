  const firebaseConfig = {
    apiKey: "AIzaSyCAy0A6SwD78hgZcmqjZDipvkV-HGUkLoE",
    authDomain: "testprojectiot-bb374.firebaseapp.com",
    databaseURL: "https://testprojectiot-bb374-default-rtdb.firebaseio.com",
    projectId: "testprojectiot-bb374",
    storageBucket: "testprojectiot-bb374.appspot.com",
    messagingSenderId: "813454164335",
    appId: "1:813454164335:web:545bf9f196dd6179eb689a",
    measurementId: "G-BXST44804J"

  };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var dataRef1 = database.ref('temp');
	  var dataRef2 = database.ref('hum');
	 // var dataRef3 = database.ref('led');

  //fetch the data
	  dataRef1.on('value', function(getdata1){
	  	var temp = getdata1.val();
	  	document.getElementById('temperature').innerHTML = temp + "%";
	  })

	   dataRef2.on('value', function(getdata2){
	  	var humi = getdata2.val();
	  	document.getElementById('humidity').innerHTML = humi + "&#8451;";
	  })

	var index=0;
var btn=document.getElementById("led");

function press() {
index++;
if (index%2==1) {
	database.ref('LED').set("1");
	document.getElementById('led').innerHTML="turn off";
}
else {
database.ref('LED').set("0");
document.getElementById('led').innerHTML="turn on";
}
}