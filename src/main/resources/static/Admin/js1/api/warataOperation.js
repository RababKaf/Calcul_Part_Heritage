/**
 * 
 */
 
 






    
    
   


 
 // Écouteur d'événement beforeunload
 window.addEventListener('beforeunload', function() {
	// Réinitialiser la valeur de cpt_zawja à null
	localStorage.removeItem('cpt_zawja');
  });
  




function zawjaModal(button){

    var nombreElement = button.parentNode.parentNode.querySelector('.nombre');
    var nb = nombreElement.textContent;
    
	var relationElement = button.parentNode.parentNode.querySelector('.relationFamiliale');
    var relation = relationElement.textContent;

	var partElement = button.parentNode.parentNode.querySelector('.part');
    var part = partElement.textContent;


    

  console.log(nb);

    if (parseInt(nb) === 1 || nb==='-') {
    var btnSave = '<button type="button" class="btn btn-primary" onclick="ajouterZawja.bind(this, \'' + nb + '\', \'' + relation + '\', \'' + part + '\')()" >حفظ</button>';
    $("#zawjaModalBtn").empty().append(btnSave);
    } else if (parseInt(nb) > 1) {
    var btnNext = '<button type="button" class="btn btn-primary " onclick="nextZawja.bind(this, \'' + nb + '\', \'' + relation + '\', \'' + part + '\')()" >التالي</button>';
    $("#zawjaModalBtn").empty().append(btnNext);
    }

	$("#nom_zawja").val("");
	$("#prenom_zawja").val("");
	$("#date_naissance").val("");
	
	
	
	const labelZawja = document.getElementById('labelZawja');
	labelZawja.textContent = relation;


	// Réinitialiser cpt_zawja et le stocker dans le stockage local
    cpt_zawja = null;
    localStorage.removeItem('cpt_zawja');
	//alert(cpt_zawja);
	
	 var numeroElement = document.getElementById("numero_dossier");
	 
	 
    var id =  numeroElement.value;
	//window.location.href= '/calcull{id}';
    
    $('#zawjaModal').modal('show');
    
}


 


function nextZawja(nb,relation,part){

event.preventDefault();
  var formData = new FormData(); 
  
    console.log(nb);
    console.log(part);
    console.log(relation);
    
    const labelZawja = document.getElementById('labelZawja');
	labelZawja.textContent = relation + "  1";
     
    var numeroElement = document.getElementById("numero_dossier");
    var numero =  numeroElement.value;
  
    var nom=document.getElementById("nom_zawja").value;

    console.log(nom);
    console.log($("#nom_zawja").val());
    formData.append("numero", numero);
    formData.append("nom_zawja", $("#nom_zawja").val());
    formData.append("prenom_zawja", $("#prenom_zawja").val());
    formData.append("date_naissance", $("#date_naissance").val());
    formData.append("part", part);
    formData.append("relation", relation);
   var params = new URLSearchParams(formData).toString();
  
  
   $.ajax({
     url: "/ajouterZawja",
    type: "GET",
    data: params,
    
    success: function(data) {
    if (data.error == "success") {
     
    const labelZawja = document.getElementById('labelZawja');
    
      
  // Récupérer la valeur actuelle de cpt_zawja à partir du stockage local
  var cpt_zawja = localStorage.getItem('cpt_zawja');
  
  // Vérifier si cpt_zawja n'est pas null (première exécution ou stockage local vide)
  // Si cpt_zawja est null, initialiser sa valeur à 1
 
  
  if (cpt_zawja === null) {
    cpt_zawja = 2;
    labelZawja.textContent =relation +' ' + cpt_zawja;
  } else {
    // Incrémenter cpt_zawja
   cpt_zawja = parseInt(cpt_zawja) + 1;
    labelZawja.textContent = relation +' ' + cpt_zawja;
    
  }
  
  // Vider les champs de saisie
  $("#nom_zawja").val("");
  $("#prenom_zawja").val("");
  $("#date_naissance").val("");
  
  // Vérifier si cpt_zawja atteint le nombre sélectionné
  if (cpt_zawja >= parseInt(nb)) {
    var btn = '<button type="button" class="btn btn-primary" onclick="ajouterZawja.bind(this, \'' + nb + '\', \'' + relation + '\', \'' + part + '\')()">حفظ</button>';
    $("#zawjaModalBtn").empty().append(btn);
    
    // Réinitialiser cpt_zawja et le stocker dans le stockage local
    cpt_zawja = null;
    localStorage.removeItem('cpt_zawja');
  } else {
    // Stocker la valeur mise à jour de cpt_zawja dans le stockage local
    localStorage.setItem('cpt_zawja', cpt_zawja);
  }
  } else if (data.error == "error") {

	cpt_zawja = null;
	localStorage.removeItem('cpt_zawja');
  
        var error = data.message;
        $("#resultatModalBody").empty();
        $("#resultatModalBody").append(error);

        var btn = '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#resultatModalBtn").empty();
        $("#resultatModalBtn").append(btn);
        
        
        
         $('#resultatModal').modal('show');
         $('#zawjaModal').modal('hide'); 
  }
  
    },
    error: function () {
      // Gérer l'erreur de la requête AJAX
    }
  });
}


function ajouterZawja(nb,relation,part){

   event.preventDefault();
  var formData = new FormData(); 
      
    var numeroElement = document.getElementById("numero_dossier");
    var numero =  numeroElement.value;
    
    const labelZawja = document.getElementById('labelZawja');
	labelZawja.textContent = relation ;
    
    console.log(part);
    console.log(relation);
          
    var nom=document.getElementById("nom_zawja").value;


    console.log(nom);
    console.log($("#nom_zawja").val());
    formData.append("numero", numero);
    formData.append("nom_zawja", $("#nom_zawja").val());
    formData.append("prenom_zawja", $("#prenom_zawja").val());
    formData.append("date_naissance", $("#date_naissance").val());
    formData.append("part", part);
    formData.append("relation", relation);
   var params = new URLSearchParams(formData).toString();
  
   $.ajax({
    url: "/ajouterZawja",
    type: "GET",
    data: params,
    
    
    success: function(data) {
    if (data.error == "success") {

		cpt_zawja = null;
         localStorage.removeItem('cpt_zawja');
		
		// alert(cpt_zawja);
      
        var success = data.message;
        $("#resultatModalBody").empty();
        $("#resultatModalBody").append(success);
        
        var btn = '<button type="button" class="btn btn-primary" data-dismiss="modal">غلق</button>';
        $("#resultatModalBtn").empty();
        $("#resultatModalBtn").append(btn);
    
         
    
    
         $('#resultatModal').modal('show'); 
         $('#zawjaModal').modal('hide');  
         
        
         
    
    } else if (data.error == "error") {
  
        var error = data.message;
        $("#resultatModalBody").empty();
        $("#resultatModalBody").append(error);

        var btn = '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#resultatModalBtn").empty();
        $("#resultatModalBtn").append(btn);
        
        
        cpt_zawja = null;
        localStorage.removeItem('cpt_zawja');

	//	alert(cpt_zawja);
        
         $('#resultatModal').modal('show');
           $('#zawjaModal').modal('hide');  
         
  }


},
    error: function () {
      // Gérer l'erreur de la requête AJAX
    }
  });
}

  
  
  

