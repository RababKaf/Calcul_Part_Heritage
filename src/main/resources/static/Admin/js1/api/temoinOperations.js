// recuperer les infos de temoin

function loadTemoinInfos(event){
	event.preventDefault();
   var id = $("#liste_temoins_info").val();
  $.ajax({
		type: "GET",
		url: "consulterDossier/Temoin/"+id,
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
		success: function (data){
			
			$('#field_temoin_info').css('display', 'block');
		
			$("#cni_temoin_info").val(data["temoin"]["cin"]);
			$("#prenom_temoin_info").val(data["temoin"]["prenom"]);
			$("#nom_temoin_info").val(data["temoin"]["nom"]);
			$("#job_temoin_info").val(data["temoin"]["profession"]);
			$("#sexe_temoin_info").val(data["temoin"]["sexe"]);
			$("#date_naissance_temoin_info").val(data["dateNaissance"]);
			$("#date_expiration_carte_info").val(data["dateExpiration"]);
			$("#pere_temoin_info").val(data["temoin"]["nomPere"]);
			$("#addresse_temoin_info").val(data["temoin"]["adresse"]);
			$("#id_info").val(data["temoin"]["id"]);
			
			
			$("#cni_temoin_up").val(data["temoin"]["cin"]);
			$("#prenom_temoin_up").val(data["temoin"]["prenom"]);
			$("#nom_temoin_up").val(data["temoin"]["nom"]);
			$("#date_expiration_carte_up").val(data["dateExpiration"]);
			$("#job_temoin_up").val(data["temoin"]["profession"]);
			$("#sexe_temoin_up").val(data["temoin"]["sexe"]);
			$("#date_naissance_temoin_up").val(data["dateNaissance"]);
			$("#addresse_temoin_up").val(data["temoin"]["adresse"]);
			$("#pere_temoin_up").val(data["temoin"]["nomPere"]);
			$("#id_up").val(data["temoin"]["id"]);
			
			
		},
		error: function (e){

		}
	});
}

function formatDate(date) {
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

// recuperer les infos de heritier

function loadheritierInfos(event){
	event.preventDefault();
   var id = $("#liste_heritier_info").val();
  $.ajax({
		type: "GET",
		url: "consulterDossier/Heritier/"+id,
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
		success: function (data){
			
			$('#field_heritier_info').css('display', 'block');
		
			console.log(data["dateNaissanceH"]);
			console.log(data);
			 var dateNaissance = new Date(data["heritier"]["date_de_naissance"]);
      
      
      console.log(dateNaissance);
      
      
      // Formater les dates dans le format "yyyy-MM-dd"
      var formattedDateNaissance = formatDate(dateNaissance);
      
      
      console.log(formattedDateNaissance);
     
      
      // Utiliser les dates formatées dans les champs de formulaire
      $("#date_naissance_temoin").val(formattedDateNaissance);
      
    		     
			$("#prenom_heritier_info").val(data["heritier"]["prenom"]);
			$("#nom_heritier_info").val(data["heritier"]["nom"]);
			$("#date_naissance_heritier_info").val(formattedDateNaissance);
			$("#id_heritier_info").val(data["heritier"]["id"]);
			
			
			
			$("#prenom_heritier_up").val(data["heritier"]["prenom"]);
			$("#nom_heritier_up").val(data["heritier"]["nom"]);
			$("#date_naissance_heritier_up").val(formattedDateNaissance);
			$("#id_heritier_up").val(data["heritier"]["id"]);
			
			
		},
		error: function (e){

		}
	});
}

// modifier l'heritier


function updateheritier(event){
		event.preventDefault();
		var formData = new FormData();
		
		
		formData.append("prenom_heritier", $("#prenom_heritier_up").val());
		formData.append("nom_heritier",$("#nom_heritier_up").val());
		formData.append("date_naissance_heritier",$("#date_naissance_heritier_up").val());
		formData.append("id_heritier",$("#id_heritier_up").val());
		
		
		$.ajax({
			type: "POST",
			url: "consulterDossier/updateHeritier",
			processData: false,
			contentType: false,
			cache: false,
			data : formData,
			timeout: 600000,
			success: function (data){
			console.log(data["message"]);
			
			    $("#updateheritierModalBody").empty();
				$("#updateheritierModalBody").append("تم تعديل الوريت بنجاح");
					
				var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
					$("#updateheritierModalBtn").empty();
					$("#updateheritierModalBtn").append(btn);	
			
			
	             if(data["message"]== "success"){
	             	
					$("#prenom_heritier_info").val(data["heritier"]["prenom"]);
					$("#nom_heritier_info").val(data["heritier"]["nom"]);
					$("#date_naissance_heritier_info").val(data["dateNaissance"]);
					
					console.log(data["message"]["message"]);
					var success = data["message"]["message"];
					
		            $("#updateheritierModalBody").empty();
					$("#updateheritierModalBody").append("تم تعديل الوريث بنجاح");
					
					var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
					$("#updateheritierModalBtn").empty();
					$("#updateheritierModalBtn").append(btn);
					
	             } else if(  data["message"]=="error"){
	             	var error = data["message"]["message"];
		            $("#updateheritierModalBody").empty();
					$("#updateheritierModalBody").append(error);
					 
					var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
					$("#updateheritierModalBtn").empty();
					$("#updateheritierModalBtn").append(btn);
	             }
				
			},
			error: function (e){
	
			}
		})
}




// modifier le temoin


function updateTemoin(event){
		event.preventDefault();
		var formData = new FormData();
		
		formData.append("cni_temoin", $("#cni_temoin_up").val());
		formData.append("prenom_temoin", $("#prenom_temoin_up").val());
		formData.append("nom_temoin",$("#nom_temoin_up").val());
		formData.append("job_temoin",$("#job_temoin_up").val());
		formData.append("sexe_temoin",$("#sexe_temoin_up").val());
		formData.append("date_naissance_temoin",$("#date_naissance_temoin_up").val());
		formData.append("date_expiration_carte_temoin",$("#date_expiration_carte_up").val());
		formData.append("pere_temoin",$("#pere_temoin_up").val());
		formData.append("addresse_temoin",$("#addresse_temoin_up").val());
		formData.append("id_temoin",$("#id_up").val());
		$.ajax({
			type: "POST",
			url: "consulterDossier/updateTemoin",
			processData: false,
			contentType: false,
			cache: false,
			data : formData,
			timeout: 600000,
			success: function (data){
			console.log(data["message"]);
			
		
	             
	             	
					$("#prenom_temoin_info").val(data["temoin"]["prenom"]);
					$("#nom_temoin_info").val(data["temoin"]["nom"]);
					$("#job_temoin_info").val(data["temoin"]["profession"]);
					$("#sexe_temoin_info").val(data["temoin"]["sexe"]);
					$("#date_naissance_temoin_info").val(data["dateNaissance"]);
					$("#date_expiration_carte_info").val(data["dateExpiration"]);
					$("#pere_temoin_info").val(data["temoin"]["nomPere"]);
					$("#addresse_temoin_info").val(data["temoin"]["adresse"]);
					console.log(data["message"]);
					var success = data["message"];
		            $("#updateTemoinModalBody").empty();
					$("#updateTemoinModalBody").append("تم تعديل الشاهد بنجاح");
					
					var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
					$("#updateTemoinModalBtn").empty();
					$("#updateTemoinModalBtn").append(btn);
					
	             
	             	var error = data["message"]["message"];
		            $("#updateTemoinModalBody").empty();
					$("#updateTemoinModalBody").append(error);
					 
					var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
					$("#updateTemoinModalBtn").empty();
					$("#updateTemoinModalBtn").append(btn);
	             
				
			},
			error: function (e){
	
			}
		})
}

// Supprimer un heritier

function deleteheritier(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("id_heritier", $("#id_heritier_info").val());
   formData.append("numero_dossier", $("#numero_dossier").val());
   
   $.ajax({
		type: "POST",
		url: "consulterDossier/deleteHeritier",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data["error"]=="success"){
		    
             var success = data["message"];
             $("#deleteheritierModalBody").empty();
			$("#deleteheritierModalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
			$("#deleteheritierModalBtn").empty();
			$("#deleteheritierModalBtn").append(btn);
			
             } else{
             
             var error = data["message"];
             $("#deleteheritierModalBody").empty();
			 $("#deleteheritierModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
			 $("#deleteheritierModalBtn").empty();
			 $("#deleteheritierModalBtn").append(btn);
             
             }
		},
		error: function (e){
		//	alert("Error");
		}
	});
}







// ajouter un temoin

function addTemoin(event){
		event.preventDefault();
		var formData = new FormData();
		
		formData.append("cni_temoin", $("#cni_temoin").val());
		formData.append("prenom_temoin", $("#prenom_temoin").val());
		formData.append("nom_temoin",$("#nom_temoin").val());
		formData.append("etat_social_temoin",$("#etat_social_temoin").val());
		formData.append("job_temoin",$("#job_temoin").val());
		formData.append("sexe_temoin",$(".sexe_temoin:checked").val());
		formData.append("date_naissance_temoin",$("#date_naissance_temoin").val());
		formData.append("lieu_naissance_temoin",$("#lieu_naissance_temoin").val());
		formData.append("pere_temoin",$("#pere_temoin").val());
		formData.append("mere_temoin",$("#mere_temoin").val());
		formData.append("addresse_temoin",$("#addresse_temoin").val());
		formData.append("numero_dossier",$("#numero_dossier").val());
		
		for (var value of formData.values()) {
		   console.log(value);
		}
		
		$.ajax({
			type: "POST",
			url: "consulterDossier/addTemoin",
			processData: false,
			contentType: false,
			cache: false,
			data : formData,
			timeout: 600000,
			success: function (data){
	             if(data["message"]["error"]=="success"){
	             	console.log("helo1");
	             	console.log(data["temoin"]);
	             	console.log("helo2");
	             	$("#cni_temoin").val(data["temoin"]["cinTemoin"]);
					$("#prenom_temoin").val(data["temoin"]["prenom"]);
					$("#nom_temoin").val(data["temoin"]["nom"]);
					$("#etat_social_temoin").val(data["temoin"]["situation"]);
					$("#job_temoin").val(data["temoin"]["proffession"]);
					$("#sexe_temoin").val(data["temoin"]["sexe"]);
					$("#date_naissance_temoin").val(data["dateNaissance"]);
					$("#lieu_naissance_temoin").val(data["temoin"]["lieuNaissance"]);
					$("#pere_temoin").val(data["temoin"]["prenomPere"]);
					$("#mere_temoin").val(data["temoin"]["prenomMere"]);
					$("#addresse_temoin").val(data["temoin"]["addresse"]);
					
	             } else if(data[0]["error"]=="error"){
	             
	             }
				
			},
			error: function (e){
	
			}
		})
}






// Supprimer un temoin

function deleteTemoin(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("id_temoin", $("#id_info").val());
   formData.append("numero_dossier", $("#numero_dossier").val());
   
   $.ajax({
		type: "POST",
		url: "consulterDossier/deleteTemoin",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data["error"]=="success"){
		    
             var success = data["message"];
             $("#deleteTemoinModalBody").empty();
			$("#deleteTemoinModalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
			$("#deleteTemoinModalBtn").empty();
			$("#deleteTemoinModalBtn").append(btn);
			
             } else{
             
             var error = data["message"];
             $("#deleteTemoinModalBody").empty();
			 $("#deleteTemoinModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
			 $("#deleteTemoinModalBtn").empty();
			 $("#deleteTemoinModalBtn").append(btn);
             
             }
		},
		error: function (e){
			//alert("Error");
		}
	});
}



function updateArgent(event){
		event.preventDefault();
		var formData = new FormData();
		
		formData.append("sommeArgent", $("#sommeArgent_info").val());
		formData.append("id_argent", $("#id_argent").val());
		
		$.ajax({
			type: "POST",
			url: "consulterDossier/updateArgent",
			processData: false,
			contentType: false,
			cache: false,
			data : formData,
			timeout: 600000,
			success: function (data){
			
			 
	             if(data.error == "success"){
	             	
					var success = data.message;
					$("#updateArgentModalBody").empty();
					$("#updateArgentModalBody").append(success);
					
					var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
					$("#updateArgentModalBtn").empty();
					$("#updateArgentModalBtn").append(btn);
					
	             } else if( data.error=="error"){
	             	var error = data.message;
		            $("#updateArgentModalBody").empty();
					$("#updateArgentModalBody").append(error);
					 
					var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
					$("#updateArgentModalBtn").empty();
					$("#updateArgentModalBtn").append(btn);
	             }
				
			},
			error: function (e){
	
			}
		})
}

function deleteArgent(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("id", $("#id_argent").val());
   
   
   $.ajax({
		type: "POST",
		url: "consulterDossier/deleteArgent",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data["error"]=="success"){
		    
             var success = data["message"];
             $("#deleteArgentModalBody").empty();
			$("#deleteArgentModalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
			$("#deleteArgentModalBtn").empty();
			$("#deleteArgentModalBtn").append(btn);
			
             } else{
             
             var error = data["message"];
             $("#deleteArgentModalBody").empty();
			 $("#deleteArgentModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
			 $("#deleteArgentModalBtn").empty();
			 $("#deleteArgentModalBtn").append(btn);
             
             }
		},
		error: function (e){
			//alert("Error");
		}
	});
}


function deleteTijari(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("id", $("#id_tijari").val());
   
   
   $.ajax({
		type: "POST",
		url: "consulterDossier/deleteTijari",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data.error=="success"){
		    
             var success = data["message"];
             $("#deleteTijariModalBody").empty();
			$("#deleteTijariModalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
			$("#deleteTijariModalBtn").empty();
			$("#deleteTijariModalBtn").append(btn);
			
             } else{
             
             var error = data["message"];
             $("#deleteTijariModalBody").empty();
			 $("#deleteTijariModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
			 $("#deleteTijariModalBtn").empty();
			 $("#deleteTijariModalBtn").append(btn);
             
             }
		},
		error: function (e){
			//alert("Error");
		}
	});
}

function deleteAred(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("id", $("#id_ared").val());
   
   
   $.ajax({
		type: "POST",
		url: "consulterDossier/deleteAred",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data["error"]=="success"){
		    
             var success = data["message"];
             $("#deleteAredModalBody").empty();
			$("#deleteAredModalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
			$("#deleteAredModalBtn").empty();
			$("#deleteAredModalBtn").append(btn);
			
             } else{
             
             var error = data["message"];
             $("#deleteAredModalBody").empty();
			 $("#deleteAredModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
			 $("#deleteAredModalBtn").empty();
			 $("#deleteAredModalBtn").append(btn);
             
             }
		},
		error: function (e){
			//alert("Error");
		}
	});
}

function deleteAutre(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("id", $("#id_autre").val());
   
   
   $.ajax({
		type: "POST",
		url: "consulterDossier/deleteAutre",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data["error"]=="success"){
		    
             var success = data["message"];
             $("#deleteAutreModalBody").empty();
			$("#deleteAutreModalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
			$("#deleteAutreModalBtn").empty();
			$("#deleteAutreModalBtn").append(btn);
			
             } else{
             
             var error = data["message"];
             $("#deleteAutreModalBody").empty();
			 $("#deleteAutreModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
			 $("#deleteAutreModalBtn").empty();
			 $("#deleteAutreModalBtn").append(btn);
             
             }
		},
		error: function (e){
			//alert("Error");
		}
	});
}

function deletePrelevement(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("id", $("#id_prele").val());
   
   
   $.ajax({
		type: "POST",
		url: "consulterDossier/deletePrelevement",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data["error"]=="success"){
		    
             var success = data["message"];
             $("#deletePrelevementModalBody").empty();
			$("#deletePrelevementModalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
			$("#deletePrelevementModalBtn").empty();
			$("#deletePrelevementModalBtn").append(btn);
			
             } else{
             
             var error = data["message"];
             $("#deletePrelevementModalBody").empty();
			 $("#deletePrelevementModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
			 $("#deletePrelevementModalBtn").empty();
			 $("#deletePrelevementModalBtn").append(btn);
             
             }
		},
		error: function (e){
			//alert("Error");
		}
	});
}


function deleteWasiya(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("id", $("#id_wasiya").val());
   
   
   $.ajax({
		type: "POST",
		url: "consulterDossier/deleteWasiya",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data["error"]=="success"){
		    
             var success = data.message;
             $("#deleteWasiyaModalBody").empty();
			$("#deleteWasiyaodalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
			$("#deleteWasiyaModalBtn").empty();
			$("#deleteWasiyaModalBtn").append(btn);
			
             } else{
             
             var error = data.message;
             $("#deleteWasiyaModalBody").empty();
			 $("#deleteWasiyaModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
			 $("#deleteWasiyaModalBtn").empty();
			 $("#deleteWasiyaModalBtn").append(btn);
             
             }
		},
		error: function (e){
			//alert("Error");
		}
	});
}





function updatePrelevement(event){
		event.preventDefault();
		var formData = new FormData();
		
		formData.append("doyon", $("#doyon_info").val());
		formData.append("tajhez", $("#tajhez_info").val());
		formData.append("id_prele", $("#id_prele").val());
		$.ajax({
			type: "POST",
			url: "consulterDossier/updatePrelevement",
			processData: false,
			contentType: false,
			cache: false,
			data : formData,
			timeout: 600000,
			success: function (data){
			console.log(data["message"]);
			
			 $("#updateTemoinModalBody").empty();
	             if(data.error == "success"){
	             	var success = data.message;
                    $("#updatePrelevementModalBody").empty();
                    $("#updatePrelevementModalBody").append(success);
					
					
					var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
					$("#updatePrelevementModalBtn").empty();
					$("#updatePrelevementModalBtn").append(btn);
					
	             } else if(  data.error=="error"){
	             	var error = data.message;
		            $("#updatePrelevementModalBody").empty();
					$("#updatePrelevementModalBody").append(error);
					 
					var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
					$("#updatePrelevementModalBtn").empty();
					$("#updatePrelevementModalBtn").append(btn);
	             }
				
			},
			error: function (e){
	
			}
		})
}



function updateWasiya(event){
		event.preventDefault();
		var formData = new FormData();
		
		formData.append("cni", $("#cni_wasiya_info").val());
		formData.append("prnom", $("#prenom_wasiya_info").val());
		formData.append("nom", $("#nom_wasiya_info").val());
		formData.append("indeminite", $("#wasiya_info").val());
		formData.append("id_wasiya", $("#id_wasiya").val());
		
		$.ajax({
			type: "POST",
			url: "consulterDossier/updateWasiya",
			processData: false,
			contentType: false,
			cache: false,
			data : formData,
			timeout: 600000,
			success: function (data){
			
			
	             if(data.error == "success"){
	             	var success = data.message;
                    $("#updateWasiyaModalBody").empty();
                    $("#updateWasiyaModalBody").append(success);
					
					
					var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
					$("#updateWasiyaModalBtn").empty();
					$("#updateWasiyaModalBtn").append(btn);
					
	             } else if(  data.error=="error"){
	             	var error = data.message;
		            $("#updateWasiyaModalBody").empty();
					$("#updateWasiyaModalBody").append(error);
					 
					var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
					$("#updateWasiyaModalBtn").empty();
					$("#updateWasiyaModalBtn").append(btn);
	             }
				
			},
			error: function (e){
	
			}
		})
}







function loadAredInfos(event){
	event.preventDefault();
   var id = $("#liste_areds_info").val();
  $.ajax({
		type: "GET",
		url: "consulterDossier/Ared/"+id,
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
		success: function (data){
			
			$('#ared1').css('display', 'block');
		
			$("#qima_malia_ared1_info").val(data["ared"]["prix"]);
			$("#surface_ared1_info").val(data["ared"]["surface"]);
			$("#adresse_ared1_info").val(data["ared"]["adresse"]);
			$("#id_ared").val(data["ared"]["id"]);
			
			
		},
		error: function (e){

		}
	});
}
function updateAred(event){
		event.preventDefault();
		var formData = new FormData();
		
		formData.append("prix", $("#qima_malia_ared1_info").val());
		formData.append("surface", $("#surface1_ared1_info").val());
		formData.append("adresse", $("#adresse_ared1_info").val());
		formData.append("id", $("#id_ared").val());
		$.ajax({
			type: "POST",
			url: "consulterDossier/updateAred",
			processData: false,
			contentType: false,
			cache: false,
			data : formData,
			timeout: 600000,
			success: function (data){
			console.log(data["message"]);
			
	             if(data.error == "success"){
	             	var success = data.message;
                    $("#updateAredModalBody").empty();
                    $("#updateAredModalBody").append(success);
					
					
					var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
					$("#updateAredModalBtn").empty();
					$("#updateAredModalBtn").append(btn);
					
	             } else if(  data.error=="error"){
	             	var error = data.message;
		            $("#updateAredModalBody").empty();
					$("#updateAredModalBody").append(error);
					 
					var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
					$("#updateAredModalBtn").empty();
					$("#updateAredModalBtn").append(btn);
	             }
				
			},
			error: function (e){
	
			}
		})
}

function loadAutreInfos(event){
	event.preventDefault();
   var id = $("#liste_autres_info").val();
  $.ajax({
		type: "GET",
		url: "consulterDossier/Autre/"+id,
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
		success: function (data){
			
			$('#liste_autre').css('display', 'block');
		
			$("#qima_autre1_info").val(data["autre"]["prix"]);
			$("#type1_info").val(data["autre"]["type"]);
			$("#id_autre").val(data["autre"]["id"]);
			
			
		},
		error: function (e){

		}
	});
}


function updateAutre(event){
		event.preventDefault();
		var formData = new FormData();
		
		formData.append("prix", $("#qima_autre1_info").val());
		formData.append("type", $("#type1_info").val());
		formData.append("id", $("#id_autre").val());
		$.ajax({
			type: "POST",
			url: "consulterDossier/updateAutre",
			processData: false,
			contentType: false,
			cache: false,
			data : formData,
			timeout: 600000,
			success: function (data){
			console.log(data["message"]);
			
	             if(data.error == "success"){
	             	var success = data.message;
                    $("#updateAutreModalBody").empty();
                    $("#updateAutreModalBody").append(success);
					
					
					var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
					$("#updateAutreModalBtn").empty();
					$("#updateAutreModalBtn").append(btn);
					
	             } else if(  data.error=="error"){
	             	var error = data.message;
		            $("#updateAutreModalBody").empty();
					$("#updateAutreModalBody").append(error);
					 
					var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
					$("#updateAutreModalBtn").empty();
					$("#updateAutreModalBtn").append(btn);
	             }
				
			},
			error: function (e){
	
			}
		})
}

function loadTijariInfos(event){
	event.preventDefault();
   var id = $("#liste_tijari_info").val();
  $.ajax({
		type: "GET",
		url: "consulterDossier/Tijari/"+id,
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
		success: function (data){
			
			$('#tijari1').css('display', 'block');
		
			$("#qima_malia1_info").val(data["tijari"]["prix"]);
			$("#surface1_info").val(data["tijari"]["surface"]);
			$("#addressetijari1_info").val(data["tijari"]["adresse"]);
			$("#id_tijari").val(data["tijari"]["id"]);
			
			
		},
		error: function (e){

		}
	});
}

function updateTijari(event){
		event.preventDefault();
		var formData = new FormData();
		
		formData.append("prix", $("#qima_malia1_info").val());
		formData.append("surface", $("#surface1_info").val());
		formData.append("adresse", $("#addressetijari1_info").val());
		formData.append("id", $("#id_tijari").val());
		$.ajax({
			type: "POST",
			url: "consulterDossier/updateTijari",
			processData: false,
			contentType: false,
			cache: false,
			data : formData,
			timeout: 600000,
			success: function (data){
			console.log(data["message"]);
			
	             if(data.error == "success"){
	             	var success = data.message;
                    $("#updateTijariModalBody").empty();
                    $("#updateTijariModalBody").append(success);
					
					
					var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">حفظ</a>";
					$("#updateTijariModalBtn").empty();
					$("#updateTijariModalBtn").append(btn);
					
	             } else if(  data.error=="error"){
	             	var error = data.message;
		            $("#updateTijariModalBody").empty();
					$("#updateTijariModalBody").append(error);
					 
					var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">اعادة المحاولة</a>";
					$("#updateTijariModalBtn").empty();
					$("#updateTijariModalBtn").append(btn);
	             }
				
			},
			error: function (e){
	
			}
		})
}
