// Recuperer toutes les tribunals

function loadDosjsiers(val){

	event.preventDefault();
	var formData = new FormData();
	formData.append("numero_dossier",$("#numero_dossier").val());
	
  $.ajax({
		type: "POST",
		url: "consultejrDossier/loadDossier",
		processData: false,
		contentType: false,
		cache: false,
		data:formData,
		timeout: 600000,
		success: function (data){
		
			//infos dossier
		    $("#date_accident").val(data["dateAccident"]);
		    $("#date_dossier").val(data["dateDossier"]);
		    $("#date_seance").val(data["dateSeance"]);
		    $("#tribunal").val(data["dossier"]["tribunal"]);
		    $("#remarque").val(data["dossier"]["commentaire"]);
		    
		    //infos victimes
		    var victimes = data["victimes"];
		    var html = "<option disabled selected>اختر ضحية</option>";
		    for (const key in victimes){
            html = html +"<option value=\""+ victimes[key]["id"]+"\">"+ victimes[key]["prenom"] + " "+victimes[key]["nom"] +"</option>";
         	}
			$("#liste_victimes_info").empty();
			$("#liste_victimes_info").append(html);
			
			
			// vider les champs
			$('#field_victime_info').css('display', 'none');
			$('#field_table_dawi_info').css('display', 'none');
			$('#field_table_avocat_victime_info').css('display', 'none');
			
			
			
			//infos accuses
		    var accuses = data["accuses"];
		    var html = "<option disabled selected>اختر متهم</option>";
		    for (const key in accuses){
            html = html +"<option value=\""+ accuses[key]["id"]+"\">"+ accuses[key]["prenom"] + " "+accuses[key]["nom"] +"</option>";
         	}
			$("#liste_accuses_info").empty();
			$("#liste_accuses_info").append(html);
			
			
			// vider les champs
			$('#field_accuse_info').css('display', 'none');
			$('#field_officier_civil_info').css('display', 'none');
			$('#field_table_avocat_accuse_info').css('display', 'none');
			
			
			
			//infos temoin
		    var temoins = data["temoins"];
		    var html = "<option disabled selected>اختر شاهد</option>";
		    for (const key in temoins){
            html = html +"<option value=\""+ temoins[key]["cinTemoin"]+"\">"+ temoins[key]["prenom"] + " "+temoins[key]["nom"] +"</option>";
         	}
			$("#liste_temoins_info").empty();
			$("#liste_temoins_info").append(html);
			
			
			// vider les champs
			$('#field_temoin_info').css('display', 'none');
		    
		    
		},
		error: function (e){

		}
	});

}




// Modifier la remarque d'une dossier

function addRemarqueEvent(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("numeroDossier",$("#numero_dossier").val());
   formData.append("remarqueDossier",$("#remarque_dossier").val());
   $.ajax({
		type: "POST",
		url: "consulterDossier/ajouterRemarque",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data[0]["error"]=="success"){
		    
             var success = data[0]["message"];
             $("#rmqDossierModalBody").empty();
			$("#rmqDossierModalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
			$("#rmqDossierModalBtn").empty();
			$("#rmqDossierModalBtn").append(btn);
			
             } else{
             
             var error = data[0]["message"];
             $("#rmqDossierModalBody").empty();
			 $("#rmqDossierModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
			 $("#rmqDossierModalBtn").empty();
			 $("#rmqDossierModalBtn").append(btn);
             
             }
		},
		error: function (e){
			//alert("Error");
		}
	});
}


// load info dossier heritage 

function loadDossiersH(event){

	event.preventDefault();
	var formData = new FormData();
	formData.append("numero_dossier1",$("#numero_dossier1").val());
	
	console.log($("#numero_dossier1").val());
	
	//temoin 
	
	$('#field_temoin_info').css('display', 'none');
		
			$("#cni_temoin_info").val("");
			$("#prenom_temoin_info").val("");             
			$("#nom_temoin_info").val("");              
			$("#job_temoin_info").val("");             
			$("#sexe_temoin_info").val("");              
			$("#date_naissance_temoin_info").val("");              
			$("#date_expiration_carte_info").val("");              
			$("#pere_temoin_info").val("");              
			$("#addresse_temoin_info").val("");              
			$("#id_info").val("");              			
			
			$("#cni_temoin_up").val("");              
			$("#prenom_temoin_up").val("");              
			$("#nom_temoin_up").val("");              
			$("#date_expiration_carte_up").val("");            
			$("#job_temoin_up").val("");              
			$("#sexe_temoin_up").val("");              
			$("#date_naissance_temoin_up").val("");              
			$("#addresse_temoin_up").val("");              
			$("#pere_temoin_up").val("");             
			$("#id_up").val("");  
			
	//heritier 
	
	$('#field_heritier_info').css('display', 'none');
		
			
			$("#prenom_heritier_info").val("");       
			$("#nom_heritier_info").val("");        
			$("#date_naissance_heritier_info").val("");        
			$("#id_heritier_info").val("");        			
			
			
			$("#prenom_heritier_up").val("");     
			$("#nom_heritier_up").val("");        
			$("#date_naissance_heritier_up").val("");        
			$("#id_heritier_up").val("");        	        
			
			
	     // Argent
	     
	     $("#sommeArgent_info").val("");
		 $("#id_argent").val("");	    
	    
	    
	    //Ared
	    
	    $('#ared1').css('display', 'none');
		
			$("#qima_malia_ared1_info").val("");
			$("#surface_ared1_info").val("");
			$("#adresse_ared1_info").val("");
			$("#id_ared").val(""); 
			
	//autre
	
	$('#liste_autre').css('display', 'none');
		
			$("#qima_autre1_info").val("");
			$("#type1_info").val("");
			$("#id_autre").val("");
			
	//tijari
	 
	$('#tijari1').css('display', 'none');
		
			$("#qima_malia1_info").val("");	
			$("#surface1_info").val("");
			$("#addressetijari1_info").val("");
			$("#id_tijari").val("");		   

	
  $.ajax({
		type: "POST",
		url: "consulterDossier/loadDossier",
		processData: false,
		contentType: false,
		cache: false,
		data:formData,
		
		timeout: 600000,
		success: function (data){
		
		console.log(data);
		
			//infos dossier
			
			
		    
		    $("#date_dossier").val(data["dateDossier"]);
		//    alert(data["dossier"]["numero"]);
		    
		     $("#numero_dossier12").val(data["dossier"]["numero"]);
		      $("#nom_dossier").val(data["dossier"]["nomDossier"]);
		   
		    $("#remarque").val(data["dossier"]["commentaire"]);
		    
		    
		   
			loadTemoin( $("#numero_dossier1").val());
			loadProprieteArgent(  $("#numero_dossier1").val());
		    loadPrelevement(  $("#numero_dossier1").val());
		    loadTestament(  $("#numero_dossier1").val());
		    loadAutres(  $("#numero_dossier1").val());
		    loadTijaris(  $("#numero_dossier1").val());
		    loadAreds(  $("#numero_dossier1").val());
		    loadHeritier(  $("#numero_dossier1").val());
		    
		},
		error: function (e){

		}
	});

}


function loadTemoin( numeroDossier1){
    // alert("hi le khikhi :"+ numeroDossier1);
     
 $.ajax({
		type: "Get",
		url: "consulterDossier/loadTemoinsNN?numeroDossier1=" + numeroDossier1,
		processData: false,
		contentType: false,
		cache: false,
		
		timeout: 600000,
		success: function (data){
		console.log(data);
		
		//alert("hi"+data.lenght);
		
		  var html = "<option disabled selected>ا  ختر شاهد </option>";
		    for (var i = 0; i < data.length; i++){
		    var a=data[i];
		    var wlist=a.split("_");
		    html = html +"<option value=\""+ wlist[1]+"\">"+ wlist[0]  +"</option>";
            //html += "<option value=\"" + temoin["id"] + "\">" + temoin["prenom"] + " " + temoin["nom"] + "</option>";
         	}
			$("#liste_temoins_info").empty();
			$("#liste_temoins_info").append(html);
				    
		},
		error: function (e){

		}
	});

}

function loadHeritier( numeroDossier1){
    // alert("hi le khikhi :"+ numeroDossier1);
     
 $.ajax({
		type: "Get",
		url: "consulterDossier/loadHeritierNN?numeroDossier1=" + numeroDossier1,
		processData: false,
		contentType: false,
		cache: false,
		
		timeout: 600000,
		success: function (data){
		console.log(data);
		
		//alert("hi"+data.lenght);
		
		  var html = "<option disabled selected>ختر الوريث </option>";
		    for (var i = 0; i < data.length; i++){
		    var a=data[i];
		    var wlist=a.split("_");
		    html = html +"<option value=\""+ wlist[1]+"\">"+ wlist[0]  +"</option>";
            //html += "<option value=\"" + temoin["id"] + "\">" + temoin["prenom"] + " " + temoin["nom"] + "</option>";
         	}
			$("#liste_heritier_info").empty();
			$("#liste_heritier_info").append(html);
				    
		},
		error: function (e){

		}
	});

}


function loadAutres( numeroDossier1){
    // alert("hi le khikhi de autre  :"+ numeroDossier1);
     
 $.ajax({
		type: "Get",
		url: "consulterDossier/loadAutres?numeroDossier1=" + numeroDossier1,
		processData: false,
		contentType: false,
		cache: false,
		
		timeout: 600000,
		success: function (data){
		console.log(data);
		
		//alert("hi"+data.lenght);
		
		  var html = "<option disabled selected>اختر نوع </option>";
		    for (var i = 0; i < data.length; i++){
		    var a=data[i];
		    var wlist=a.split("_");
		    html = html +"<option value=\""+ wlist[1]+"\">"+ wlist[0]  +"</option>";
            //html += "<option value=\"" + temoin["id"] + "\">" + temoin["prenom"] + " " + temoin["nom"] + "</option>";
         	}
			$("#liste_autres_info").empty();
			$("#liste_autres_info").append(html);
				    
		},
		error: function (e){

		}
	});

}



function loadTijaris( numeroDossier1){
   //  alert("hi le khikhi de tijari :"+ numeroDossier1);
     
 $.ajax({
		type: "Get",
		url: "consulterDossier/loadTijaris?numeroDossier1=" + numeroDossier1,
		processData: false,
		contentType: false,
		cache: false,
		
		timeout: 600000,
		success: function (data){
		console.log(data);
		
	//	alert("hi"+data.lenght);
		
		  var html = "<option disabled selected>اختر نوع </option>";
		    for (var i = 0; i < data.length; i++){
		    var a=data[i];
		    var wlist=a.split("_");
		    html = html +"<option value=\""+ wlist[1]+"\">"+ wlist[0]  +"</option>";
            //html += "<option value=\"" + temoin["id"] + "\">" + temoin["prenom"] + " " + temoin["nom"] + "</option>";
         	}
			$("#liste_tijari_info").empty();
			$("#liste_tijari_info").append(html);
				    
		},
		error: function (e){

		}
	});

}


function loadAreds( numeroDossier1){
   //  alert("hi le khikhi de Ared :"+ numeroDossier1);
     
 $.ajax({
		type: "Get",
		url: "consulterDossier/loadAreds?numeroDossier1=" + numeroDossier1,
		processData: false,
		contentType: false,
		cache: false,
		
		timeout: 600000,
		success: function (data){
		console.log(data);
		
		//alert("hi"+data.lenght);
		
		  var html = "<option disabled selected>اختر نوع </option>";
		    for (var i = 0; i < data.length; i++){
		    var a=data[i];
		    var wlist=a.split("_");
		    html = html +"<option value=\""+ wlist[1]+"\">"+ wlist[0]  +"</option>";
            //html += "<option value=\"" + temoin["id"] + "\">" + temoin["prenom"] + " " + temoin["nom"] + "</option>";
         	}
			$("#liste_areds_info").empty();
			$("#liste_areds_info").append(html);
				    
		},
		error: function (e){

		}
	});

}

function loadProprieteArgent( numeroDossier1){
     //alert("hi le khikhi Argent :"+ numeroDossier1);
     
 $.ajax({
		type: "Get",
		url: "consulterDossier/loadProprieteArgent?numeroDossier1=" + numeroDossier1,
		processData: false,
		contentType: false,
		cache: false,
		
		timeout: 600000,
		success: function (data){
		console.log(data);
		
		//alert("hi"+data.lenght);
		
		     $("#sommeArgent_info").val(data["argent"]["somme"]);
		     $("#id_argent").val(data["argent"]["id"]);
			//$("#doyon_info").val(data["prelevment"]["dette"]);
			//$("#tajhez_info").val(data["prelevement"]["preparation_defunt"]);
			
			//$("#cni_wasiya_info").val(data["wasiya"]["cin"]);
			//$("#prenom_wasiya_info").val(data["wasiya"]["prenom"]);
			//$("#wasiya_info").val(data["wasiya"]["nom"]);
				    
		},
		error: function (e){

		}
	});

}

// prelevement 
function loadPrelevement( numeroDossier1){
    // alert("hi le khikhi PRLEVEMENT :"+ numeroDossier1);
     
 $.ajax({
		type: "Get",
		url: "consulterDossier/loadProprietePrelevement?numeroDossier1=" + numeroDossier1,
		processData: false,
		contentType: false,
		cache: false,
		
		timeout: 600000,
		success: function (data){
		console.log(data);
		
		//alert("hi"+data.lenght);
		
		    // $("#sommeArgent_info").val(data["argent"]["somme"]);
		 
			$("#doyon_info").val(data["prelevement"]["dette"]);
			$("#tajhez_info").val(data["prelevement"]["preparation_defunt"]);
			$("#id_prele").val(data["prelevement"]["id"]);
			
			//$("#cni_wasiya_info").val(data["wasiya"]["cin"]);
			//$("#prenom_wasiya_info").val(data["wasiya"]["prenom"]);
			//$("#wasiya_info").val(data["wasiya"]["nom"]);
				    
		},
		error: function (e){

		}
	});

}
// testament 
function loadTestament( numeroDossier1){
   //alert("hi le khikhi Testament:"+ numeroDossier1);
     
 $.ajax({
		type: "Get",
		url: "consulterDossier/loadProprieteTestament?numeroDossier1=" + numeroDossier1,
		processData: false,
		contentType: false,
		cache: false,
		
		timeout: 600000,
		success: function (data){
		console.log(data);
		
		//alert("hi"+data.lenght);
		
		     //$("#sommeArgent_info").val(data["argent"]["somme"]);
		 
			//$("#doyon_info").val(data["prelevment"]["dette"]);
			//$("#tajhez_info").val(data["prelevement"]["preparation_defunt"]);
			
			$("#cni_wasiya_info").val(data["wasiya"]["cin"]);
			$("#prenom_wasiya_info").val(data["wasiya"]["prenom"]);
			$("#nom_wasiya_info").val(data["wasiya"]["nom"]);
			$("#wasiya_info").val(data["wasiya"]["indeminite"]["parts"]);
			$("#id_wasiya").val(data["wasiya"]["id"]);
			
				    
		},
		error: function (e){

		}
	});

}


// Modifier la remarque d'une dossier

function addRemarqueEventh(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("numero_dossier1",$("#numero_dossier1").val());
   formData.append("remarqueDossier",$("#remarque_dossier").val());
   $.ajax({
		type: "POST",
		url: "consulterDossier/ajouterRemarque",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data[0]["error"]=="success"){
		    
             var success = data[0]["message"];
             $("#rmqDossierModalBody").empty();
			$("#rmqDossierModalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
			$("#rmqDossierModalBtn").empty();
			$("#rmqDossierModalBtn").append(btn);
			
			
             } else{
             
             var error = data[0]["message"];
             $("#rmqDossierModalBody").empty();
			 $("#rmqDossierModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
			 $("#rmqDossierModalBtn").empty();
			 $("#rmqDossierModalBtn").append(btn);
             
             }
		},
		error: function (e){
			//alert("Error");
		}
	});
}

// Modifier la date de seance

function addNomEvent(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("numeroDossier",$("#numero_dossier1").val());
   formData.append("nomDossier",$("#nomm_dossier").val());
   $.ajax({
		type: "POST",
		url: "consulterDossier/ajouterNomDossier",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data[0]["error"]=="success"){
		    
             var success = data[0]["message"];
             $("#dateSeanceDossierModalBody").empty();
			$("#dateSeanceDossierModalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
			$("#dateSeanceDossierModalBtn").empty();
			$("#dateSeanceDossierModalBtn").append(btn);
			
             } else{
             
             var error = data[0]["message"];
             $("#dateSeanceDossierModalBody").empty();
			 $("#dateSeanceDossierModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
			 $("#dateSeanceDossierModalBtn").empty();
			 $("#dateSeanceDossierModalBtn").append(btn);
             
             }
		},
		error: function (e){
		//	alert("Error");
		}
	});
}


//supprimer dossier
function deleteDossierEvent(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("numero_dossier", $("#numero_dossier1").val());
   
   $.ajax({
		type: "POST",
		url: "consulterDossier/deleteDossier",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data["error"]=="success"){
		    
             var success = data["message"];
             $("#deleteDossierModalBody").empty();
			$("#deleteDossierModalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">غلق</a>";
			$("#deleteDossierModalBtn").empty();
			$("#deleteDossierModalBtn").append(btn);
			
             } else{
             
             var error = data["message"];
             $("#deleteDossierModalBody").empty();
			 $("#deleteDossierModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-warning\" href=\"consulterDossier\">اعادة المحاولة</a>";
			 $("#deleteDossierModalBtn").empty();
			 $("#deleteDossierModalBtn").append(btn);
             
             }
		},
		error: function (e){
			//alert("Error");
		}
	});
}