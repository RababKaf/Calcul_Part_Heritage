function afficheAvocatVictime() {
	if (document.getElementById('inputAvocatVictime').checked == true) {
		document.getElementById('field_avocat_victime').style.display = 'block';
	} else {
		document.getElementById('field_avocat_victime').style.display = 'none';
	}
}

function afficheDawi() {
	if (document.getElementById('inputVive').checked == true) {
		document.getElementById('field_dawi_show').style.display = 'none';
	} else if (document.getElementById('inputMort').checked) {
		document.getElementById('field_dawi_show').style.display = 'block';
	}
}


function countDawi() {
	var liste = document.getElementById("liste_dawi");
	liste.innerHTML = "";
	for (i = 0; i < document.getElementById("number_dawi").value; i++) {
		var element = document.getElementById('element_dawi').innerHTML
			.replaceAll("dawi_numero", "dawi_numero" + (i + 1))
			.replaceAll("relation_dawi", "relation_dawi" + (i + 1))
			.replaceAll("droit_compensation",
				"droit_compensation" + (i + 1)).replaceAll(
					"cni_famille_victime",
					"cni_famille_victime" + (i + 1)).replaceAll(
						"nomfam_famille_victime",
						"nomfam_famille_victime" + (i + 1)).replaceAll(
							"prenom_famille_victime",
							"prenom_famille_victime" + (i + 1)).replaceAll(
								"naissance_famille_victime",
								"naissance_famille_victime" + (i + 1))
			.replaceAll("etat_sociale_famille_victime",
				"etat_sociale_famille_victime" + (i + 1))
			.replaceAll("job_famille_victime",
				"job_famille_victime" + (i + 1)).replaceAll(
					"addresse_famille_victime",
					"addresse_famille_victime" + (i + 1))
			.replaceAll("dawiModalDiv", "dawiModalDiv" + (i + 1))
			.replaceAll("dawiModalBody", "dawiModalBody" + (i + 1))
			.replaceAll("dawiModalBtn", "dawiModalBtn" + (i + 1))
			.replaceAll("XXYYXX", (i + 1)).replaceAll(
				"dawi_parameter_value", (i + 1));

		liste.innerHTML += element;
	}
}

function afficheAvocatAccuse() {
	if (document.getElementById('inputAvocatAccuse').checked == true) {
		document.getElementById('field_avocat_accuse').style.display = 'block';
	} else {
		document.getElementById('field_avocat_accuse').style.display = 'none';
	}
}

function afficheOfficierCivil() {
	if (document.getElementById('inputOfficierCivil').checked == true) {
		document.getElementById('field_officier_civil').style.display = 'block';
	} else {
		document.getElementById('field_officier_civil').style.display = 'none';
	}
}

function nombreEnfantsVictime() {
	if (document.getElementById('etat_social_victime').value != "عازب") {
		document.getElementById('nombre_enfants_victime').disabled = false;
		document.getElementById('nombre_enfants_victime').value = "1";
		document.getElementById('nombre_enfants_victime').placeholder = "";
	} else {
		document.getElementById('nombre_enfants_victime').disabled = true;
		document.getElementById('nombre_enfants_victime').value = "";
		document.getElementById('nombre_enfants_victime').placeholder = "لا يمكن اضافة الاطفال للعازبين";
	}
}

function nombreEnfantsAccuse() {
	if (document.getElementById('etat_social_accuse').value != "عازب") {
		document.getElementById('nombre_enfants_accuse').disabled = false;
		document.getElementById('nombre_enfants_accuse').value = "1";
		document.getElementById('nombre_enfants_accuse').placeholder = "";
	} else {
		document.getElementById('nombre_enfants_accuse').disabled = true;
		document.getElementById('nombre_enfants_accuse').value = "";
		document.getElementById('nombre_enfants_accuse').placeholder = "لا يمكن اضافة الاطفال للعازبين";
	}
}

// new functions

function afficheVictimeInput() {
	if (document.getElementById('check_victime').checked == true) {
		document.getElementById('field_victime').style.display = 'block';
		document.getElementById('liste_victimes').disabled = true;
	} else {
		document.getElementById('field_victime').style.display = 'none';
		document.getElementById('liste_victimes').disabled = false;
	}
}

// previous button

function goToPreviousDiv(){
    // Récupérer les éléments div
    var tijari1 = document.getElementById('tijari1');
    var tijari2 = document.getElementById('tijari5');
    var tijari3 = document.getElementById('tijari3');
    
    // Vérifier l'état d'affichage des div
    if (tijari3.style.display === 'block') {
        // Passer de la div 3 à la div 2
        tijari3.style.display = 'none';
        tijari2.style.display = 'block';
    } else if (tijari2.style.display === 'block') {
        // Passer de la div 2 à la div 1
        tijari2.style.display = 'none';
        tijari1.style.display = 'block';
    }
    // Vous pouvez ajouter des conditions supplémentaires si nécessaire pour d'autres div
    
    // Scroll vers le haut de la page pour la visibilité du bouton précédent
    //window.scrollTo(0, 0);
}


// previous button Ared

function goToPreviousDivAred(){
    // Récupérer les éléments div
    var ared1 = document.getElementById('ared1');
    var ared2 = document.getElementById('ared2');
    var ared3 = document.getElementById('ared3');
    
    // Vérifier l'état d'affichage des div
    if (ared3.style.display === 'block') {
        // Passer de la div 3 à la div 2
        ared3.style.display = 'none';
        ared2.style.display = 'block';
    } else if (ared2.style.display === 'block') {
        // Passer de la div 2 à la div 1
        ared2.style.display = 'none';
        ared1.style.display = 'block';
    }
    // Vous pouvez ajouter des conditions supplémentaires si nécessaire pour d'autres div
    
    
}


// previous button Autre

function goToPreviousDivAutre(){
    // Récupérer les éléments div
    var autre1 = document.getElementById('autre1');
    var autre2 = document.getElementById('autre2');
    var autre3 = document.getElementById('autre3');
    
    // Vérifier l'état d'affichage des div
    if (autre3.style.display === 'block') {
        // Passer de la div 3 à la div 2
        autre3.style.display = 'none';
        autre2.style.display = 'block';
    } else if (autre2.style.display === 'block') {
        // Passer de la div 2 à la div 1
        autre2.style.display = 'none';
        autre1.style.display = 'block';
    }
    // Vous pouvez ajouter des conditions supplémentaires si nécessaire pour d'autres div
    
   
}


// next Tijari 1

function addTijariScript(){
	
		document.getElementById('tijari1').style.display = 'none';
		document.getElementById('tijari5').style.display = 'block';
		
	
}

// next Tijari 2

function addTijariScript2(){
	
		document.getElementById('tijari5').style.display = 'none';
		document.getElementById('tijari3').style.display = 'block';
		
	
}


// next autre 1

function addAutreScript1(){
	
		document.getElementById('autre1').style.display = 'none';
		document.getElementById('autre2').style.display = 'block';
		
	
}

// next autre 2

function addAutreScript2(){
	
		document.getElementById('autre2').style.display = 'none';
		document.getElementById('autre3').style.display = 'block';
		
	
}




// next Ared 1

function addAredScript(){
	
		document.getElementById('ared1').style.display = 'none';
		document.getElementById('ared2').style.display = 'block';
		
	
}

// next Ared 2

function addAredScript2(){
	
		document.getElementById('ared2').style.display = 'none';
		document.getElementById('ared3').style.display = 'block';
		
	
}


// next Ared 3

function addAredScript(){
	
		document.getElementById('ared1').style.display = 'none';
		document.getElementById('ared2').style.display = 'block';
		
	
}

/**
function afficheDawiInput() {
	if (document.getElementById('check_dawi').checked == true) {
		document.getElementById('field_dawi').style.display = 'block';
		document.getElementById('liste_dawis').disabled = true;
	} else {
		document.getElementById('field_dawi').style.display = 'none';
		document.getElementById('liste_dawis').disabled = false;
	}
}
**/

function afficheAvocatVictimeInput() {
	if (document.getElementById('check_avocat_victime').checked == true) {
		document.getElementById('field_avocat_victime').style.display = 'block';
		document.getElementById('liste_avocats_victime').disabled = true;
	} else {
		document.getElementById('field_avocat_victime').style.display = 'none';
		document.getElementById('liste_avocats_victime').disabled = false;
	}
}

function afficheAccuseInput() {
	if (document.getElementById('check_accuse').checked == true) {
		document.getElementById('field_accuse').style.display = 'block';
		document.getElementById('liste_accuses').disabled = true;
	} else {
		document.getElementById('field_accuse').style.display = 'none';
		document.getElementById('liste_accuses').disabled = false;
	}
}

function afficheOfficierCivilInput() {
	if (document.getElementById('check_officier_civil').checked == true) {
		document.getElementById('field_officier_civil').style.display = 'block';
		document.getElementById('liste_officier_civils').disabled = true;
	} else {
		document.getElementById('field_officier_civil').style.display = 'none';
		document.getElementById('liste_officier_civils').disabled = false;
	}
}

function afficheAvocatAccuseInput() {
	if (document.getElementById('check_avocat_accuse').checked == true) {
		document.getElementById('field_avocat_accuse').style.display = 'block';
		document.getElementById('liste_avocats_accuse').disabled = true;
	} else {
		document.getElementById('field_avocat_accuse').style.display = 'none';
		document.getElementById('liste_avocats_accuse').disabled = false;
	}
}

function afficheTemoinInput(){
	if (document.getElementById('check_temoin').checked == true) {
		document.getElementById('field_temoin').style.display = 'block';
		document.getElementById('liste_temoins').disabled = true;
	} else {
		document.getElementById('field_temoin').style.display = 'none';
		document.getElementById('liste_temoins').disabled = false;
	}
}

function affichePropInput(){
console.log("prop");
	if (document.getElementById('check_prop').checked == true) {
		document.getElementById('field_prop').style.display = 'block';
		
	} else {
		document.getElementById('field_prop').style.display = 'none';
		
	}
}



// tribunal

function checkTypeTribunal() {
	var typeTribunal = document.getElementById("type_tribunal");
	if (typeTribunal.value == "PREMIERE_INSTANCE") {
		document.getElementById("tribunal_premiere_instance").disabled = false;
	} else if (typeTribunal.value == "COUR_APPEL") {
		document.getElementById("tribunal_premiere_instance").disabled = true;
	}
}

