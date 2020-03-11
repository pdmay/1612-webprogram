function getParams() {
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1) {
		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++) {
			nameVal = pairs[i].split('=');
			params[nameVal[0]] = nameVal[1];
		}
   }
	return params;
}

window.onload = loginLoad;
var username, password

function loginLoad(){
  // วิธีใช้ getParams()
  
  var form = document.getElementById("myLogin");
  form.onsubmit  = checkLogin;

  var parameter = getParams()
  username = parameter["username"]
  password = parameter["password1"]
  console.log(username + password)
  
}

function checkLogin(){
	var username = document.forms["myLogin"]["username"].value;
	var password = document.forms["myLogin"]["password"].value;

	return validate(username,password)
}
function validate(user, pass){
	if(user == username && pass == password){
		alert("Login")
		return true
	}else{
		alert("fail")
		return false
	}
}