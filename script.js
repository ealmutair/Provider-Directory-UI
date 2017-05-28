function load() {
	var mydata = JSON.parse(data);
	document.getElementById("output1").innerHTML= (mydata[1].last_name),(mydata[1].first_name);
	document.getElementById("output2").innerHTML=(mydata[1].first_name),
	document.getElementById("output3").innerHTML=(mydata[1].email_address),
	document.getElementById("output4").innerHTML=(mydata[1].specialty),
	document.getElementById("output5").innerHTML=(mydata[1].practice_name);
}

data = '[{"last_name" : "Ashwin", "first_name" : "20","email_address":"mharris@updox.com","specialty": "Pediatrics", "practice_name": "Harris Pediatrics"},{"last_name" : "Abhinandan", "first_name" : "20","email_address": "bwijoyo@updox.com","specialty": "Podiatry", "practice_name": "Wijoyo Podiatry"},{"last_name": "Rose", "first_name": "Nate", "email_address": "nrose@updox.com", "specialty": "Surgery", "practice_name": "Rose Cutters"},{"last_name": "Carlson", "first_name": "Mike", "email_address": "mcarlson@updox.com", "specialty": "Orthopedics", "practice_name": "Carlson Orthopedics"},{"last_name": "Witting", "first_name": "Mike", "email_address": "mwitting@updox.com", "specialty": "Pediatrics", "practice_name": "Witting’s Well Kids Pediatrics"}, {"last_name": "Juday", "first_name": "Tobin", "email_address": "tjuday@updox.com", "specialty": "General Medicine", "practice_name": "Juday Family Practice"}]';