// A FAIRE:
	// Ouverture panneau choix de langues:
		// enlever la possibilité de scroll quand div ouverte
		// border lorsque drapeau selectionné
	//Datepicker + copies dans les cases du panneau de gauche
	//Copie des gares selectionnées dans les cases du panneau de gauche
	//selection des passagers


// onclick ouverture panneaux
function gareDepart(){
	var newDiv = document.querySelector(".station");
	newDiv.style.display = "inline-block";
}

function gareRetour(){
	var newBackDiv = document.querySelector(".stationBack");
	newBackDiv.style.display = "inline-block";
}

function dateDepart(){
	var newDateDiv = document.querySelector(".date");
	newDateDiv.style.display = "inline-block";
}

function dateRetour(){
	var newDateBackDiv = document.querySelector(".dateBack");
	newDateBackDiv.style.display = "inline-block";
}

function passenger(){
	var newPassDiv = document.querySelector(".selectPass");
	newPassDiv.style.display = "inline-block";
}

// Déroulage des tweets A AMÉLIORER !!!!!!
function tweets(){
	var tweet = document.querySelectorAll('.hide');
	tweet.forEach(function(tweet){
		tweet.classList.remove('hide');
		tweet.classList.add('unhide');
	})
}