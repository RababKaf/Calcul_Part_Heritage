// gerer les btns 

window.dossierBtn = false;
window.defuntBtn = false;
window.amlakBtn = false;
window.temoinBtn = false;
















// Déclarez temoinAjoute en tant que variable globale en dehors des fonctions
let temoinAjoute = false;



// next btn temoin

// Écouteur d'événement beforeunload
window.addEventListener('beforeunload', function() {
  // Réinitialiser la valeur de temoinCounter à null
  localStorage.removeItem('temoinCounter');
});

function addTemoinScript(){

  // Récupérer la valeur actuelle de temoinCounter à partir du stockage local
  let temoinCounter = localStorage.getItem('temoinCounter');
  console.log(temoinCounter);
  // Vérifier si temoinCounter n'est pas null (première exécution ou stockage local vide)
  // Si temoinCounter est null, initialiser sa valeur à 1
  if (temoinCounter === null) {
    temoinCounter = 1;
  } 
  
  const cni = document.getElementById('cni_temoin');
  const dateExpiration = document.getElementById('date_expiration_carte');
  const prenom = document.getElementById('prenom_temoin');
  const nom = document.getElementById('nom_temoin');
  const dateNaissance = document.getElementById('date_naissance_temoin');
  const job = document.getElementById('job_temoin');
  const sexe = document.getElementsByName('sexe_temoin');
  const pere = document.getElementById('pere_temoin');
  const adresse = document.getElementById('addresse_temoin');
  const bodyModal1 = document.getElementById('temoinModalBody1');
  const btnAjouter = document.getElementById('ajouterTemoin');
  
  const temoinLabel1 = document.getElementById('labelTemoin1');
  const temoinLabel2 = document.getElementById('labelTemoin2');
  const temoinliste= document.getElementById('liste_temoins');
  
  //const nextBtnTemoin = document.getElementById('nextBtnTemoin');
  
  //nextBtnTemoin.addEventListener('click', function() {
    const bodyModal = document.getElementById('temoinModalBody');
    const textBodyModal = bodyModal.textContent.trim();
    
    if (textBodyModal === "تم إضافة الشاهد بنجاح") {
      cni.value = '';
      dateExpiration.value = '';
      prenom.value = '';
      nom.value = '';
      dateNaissance.value = '';
      job.value = '';
      sexe.forEach(input => {
        input.checked = false;
      });
      pere.value = '';
      adresse.value = '';
      temoinliste.value= '';
      if (parseInt(temoinCounter) === 12) {
         bodyModal1.textContent = " تم اضافة 12 شاهد بنجاح يرجى النقر على التالي " ;
         btnAjouter.disabled = true;
        
		document.getElementById('field_temoin').style.display = 'block';
		
         
      }else{
      temoinCounter = parseInt(temoinCounter) + 1;
      bodyModal1.textContent = " اضف الشاهد التالي: " + temoinCounter;

      temoinLabel1.textContent = 'اختر الشاهد ' + temoinCounter;
      temoinLabel2.textContent = 'االشاهد ' + temoinCounter + ' ليس  في القائمة؟';
      }
      // Enregistrer la nouvelle valeur de temoinCounter dans le stockage local
      localStorage.setItem('temoinCounter', temoinCounter.toString());
      
    }
    else{
    bodyModal1.textContent = " لم يتم إضافة الشاهد السابق ، المرجوا إعادة المحاولة " ;

    }
  

}







// Recuperer les tribunals

function loadTribunalInfos(event) {
  event.preventDefault();

  var typeTribunal = $("#type_tribunal").val();
  var idTribunal = $("#cour_appel").val();

  if (typeTribunal == "PREMIERE_INSTANCE") {
    loadPremieres(idTribunal);
  } else if (typeTribunal == "COUR_APPEL") {
    var formData = new FormData();
    formData.append("typeTribunal", $("#type_tribunal").val());
    formData.append("idTribunal", $("#cour_appel").val());
    loadJuges(formData);
  }
}

function loadJugesAjax() {
  var formData = new FormData();
  formData.append("typeTribunal", $("#type_tribunal").val());
  formData.append("idTribunal", $("#tribunal_premiere_instance").val());
  loadJuges(formData);
}

function loadPremieres(val) {
  $.ajax({
    type: "GET",
    url: "ClientProfessionnel/ajouterDossier/CourAppel/" + val,
    processData: false,
    contentType: false,
    cache: false,
    timeout: 600000,
    success: function (data) {
      var premier = data["premiereInstances"];
      var html = "<option disabled selected>اختر محكمة ابتدائية</option>";
      for (const key in premier) {
        html =
          html +
          '<option value="' +
          premier[key]["id"] +
          '">' +
          premier[key]["nom"] +
          "</option>";
      }
      $("#tribunal_premiere_instance").empty();
      $("#tribunal_premiere_instance").append(html);
    },
    error: function () {},
  });
}

function loadJuges(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/listeJuges",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      var juges = data["juges"];
      var html = "<option disabled selected>اختر القاضي</option>";
      for (const key in juges) {
        html =
          html +
          "<option value=" +
          juges[key]["matriculeJuge"] +
          "> " +
          juges[key]["prenom"] +
          " " +
          juges[key]["nom"] +
          " </option >";
      }
      $("#liste_juges").empty();
      $("#liste_juges").append(html);
    },
    error: function () {},
  });
}








// Ajout d'un dossier

function addFolderEvent(event){
  event.preventDefault();
  var formData = new FormData();
  console.log("entrer : num "+$("#numero_dossier1").val());
  console.log($("#numero_dossier1").val());
  formData.append("date_dossier", $("#date_dossier").val());
  formData.append("nom_dossier", $("#nom_dossier").val());
  formData.append("numero_dossier1", $("#numero_dossier1").val());
  formData.append("logged_in_user", $("#logged_in_user").val());
  
  window.dossierBtn = true;
  $("#btnDossierError").hide();
  
   
  $.ajax({
    url: "ClientProfessionnel/ajouterDossier/dossier",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function(data) {
    if (data.error == "success") {
    console.log(data.error);
        var success = data.message;
        $("#dossierModalBody").empty();
        $("#dossierModalBody").append(success);
        
        var btn = '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#dossierModalBtn").empty();
        $("#dossierModalBtn").append(btn);
        document.getElementById('btnDossier').disabled = true;
        
        } else if (data.error == "error") {
        var error = data.message;
        $("#dossierModalBody").empty();
        $("#dossierModalBody").append(error);

        var btn = '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#dossierModalBtn").empty();
        $("#dossierModalBtn").append(btn);
        }
    
    
    },
    error: function () {
      // Gérer l'erreur de la requête AJAX
    }
  });
}





//Ajouter defunt 


function addDefuntEvent(event){
  window.defuntBtn = true;
  $("#btnDefuntError").hide();
  
  
  console.log("khikhi");
  event.preventDefault();
  var formData = new FormData();
  formData.append("numero_dossier1", $("#numero_dossier1").val());
  formData.append("sexe_defunt", $(".sexe_defunt:checked").val());
  console.log($("#numero_dossier1").val());   
  $.ajax({
    url: "ClientProfessionnel/ajouterDossier/defunt",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function(data) {
     if (data.error == "success") {
    console.log(data.error);
        var success = data.message;
        $("#defuntModalBody").empty();
        $("#defuntModalBody").append(success);
        
        var btn = '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#defuntModalBtn").empty();
        $("#defuntModalBtn").append(btn);
        
        document.getElementById('btnDefunt').disabled = true;
        } else if (data.error == "error") {
        var error = data.message;
        $("#defuntModalBody").empty();
        $("#defuntModalBody").append(error);

        var btn = '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#defuntModalBtn").empty();
        $("#defuntModalBtn").append(btn);
        }
    
    
    },
    error: function () {
      // Gérer l'erreur de la requête AJAX
    }
  });
}




// Ajout Temoin 

function addTemoinhEvent(event){
  window.temoinBtn = true;
  $("#btnTemoinError").hide();
  
  
  event.preventDefault();
  temoinAjoute = false;
  var formData = new FormData();
  
 formData.append("numero_dossier1", $("#numero_dossier1").val());
   
   console.log("temoin");

    
    console.log("entrer");
    console.log($("#cni_temoin").val());
    formData.append("cni_temoin", $("#cni_temoin").val());
    
    formData.append("prenom_temoin", $("#prenom_temoin").val());
    formData.append("nom_temoin", $("#nom_temoin").val());
    formData.append("job_temoin", $("#job_temoin").val());
    formData.append("date_expiration_carte", $("#date_expiration_carte").val());
    formData.append("date_naissance_temoin", $("#date_naissance_temoin").val());
    
    formData.append("sexe_temoin", $(".sexe_temoin:checked").val());
    formData.append("pere_temoin", $("#pere_temoin").val());
    formData.append("addresse_temoin", $("#addresse_temoin").val());
    formData.append("personne_id", $("#personne_id").val());
   
  $.ajax({
    url: "ClientProfessionnel/ajouterDossier/temoin",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function(data) {
      if (data.error == "success") {
        
        var temoin_element =
          "<tr><td>" +
          data.cin +
          "</td><td>" +
          data.prenom +
          "</td><td>" +
          data.nom +
          "</td ><td>" +
          data.profession +
          '</td><td class="text-right"></td></tr>';
          console.log("elm tem:"+temoin_element);
        $("#table_temoin_body1").append(temoin_element);

        let temoinCounter = localStorage.getItem('temoinCounter');
        console.log(temoinCounter);
        
		if (temoinCounter === null) {
        temoinCounter = 1;
        }

		const cni = document.getElementById('cni_temoin');
        const dateExpiration = document.getElementById('date_expiration_carte');
        const prenom = document.getElementById('prenom_temoin');
        const nom = document.getElementById('nom_temoin');
        const dateNaissance = document.getElementById('date_naissance_temoin');
        const job = document.getElementById('job_temoin');
        const sexe = document.getElementsByName('sexe_temoin');
        const pere = document.getElementById('pere_temoin');
        const adresse = document.getElementById('addresse_temoin');
        const bodyModal1 = document.getElementById('temoinModalBody1');
        const btnAjouter = document.getElementById('ajouterTemoin');
        const id=document.getElementById('personne_id');
  
        const labelTemoin1 = document.getElementById('labelTemoin1');
        
        id.value= '';
		cni.value = '';
        dateExpiration.value = '';
        prenom.value = '';
        nom.value = '';
        dateNaissance.value = '';
        job.value = '';
        sexe.forEach(input => {
          input.checked = false;
        });
        pere.value = '';
        adresse.value = '';
        
        //alert(temoinCounter);
        
		if (parseInt(temoinCounter) === 12) {
		
		//alert(temoinCounter);
         success1 = "تم اضافة 12 شاهد بنجاح يرجى النقر على التالي" ;
        
		 $("#temoinModalBody").empty();
         $("#temoinModalBody").append(success1);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);
		
        
		document.getElementById('field_temoin').style.display = 'block';
		document.getElementById('btnTemoin').disabled = true;
         
        }else{
        temoinCounter = parseInt(temoinCounter) + 1;
        //alert(temoinCounter);
        success2=" اضف الشاهد التالي: " + temoinCounter;   
		$("#temoinModalBody").empty();
        $("#temoinModalBody").append(success2);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);
        

        
        labelTemoin1.textContent = 'االشاهد   ' + temoinCounter + ' :  ';
        }

		// Enregistrer la nouvelle valeur de temoinCounter dans le stockage local
        localStorage.setItem('temoinCounter', temoinCounter.toString());
       // alert(temoinCounter);
        
      } else if (data.error == "error") {
        var error = data.message;
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);
        
        console.log($("#temoinModalBody"));
        console.log($("#temoinModalBody").textContent.trim());
		
        
        
      }
      
    },
    error: function () {
      // Gérer l'erreur de la requête AJAX
    }
  });
}



        

































// Ajout Temoin 

function addTemghjoinhEvent(event){
  event.preventDefault();
  temoinAjoute = false;
  var formData = new FormData();
  
 formData.append("numero_dossier1", $("#numero_dossier1").val());
   
   console.log("temoin");

    
    console.log("entrer");
    console.log($("#cni_temoin").val());
    formData.append("cni_temoin", $("#cni_temoin").val());
    
    formData.append("prenom_temoin", $("#prenom_temoin").val());
    formData.append("nom_temoin", $("#nom_temoin").val());
    formData.append("job_temoin", $("#job_temoin").val());
    formData.append("date_expiration_carte", $("#date_expiration_carte").val());
    formData.append("date_naissance_temoin", $("#date_naissance_temoin").val());
    
    formData.append("sexe_temoin", $(".sexe_temoin:checked").val());
    formData.append("pere_temoin", $("#pere_temoin").val());
    formData.append("addresse_temoin", $("#addresse_temoin").val());
    
    Ajouter_fire_ajax_temoin(formData);
   
  //} else {
   // formData.append("liste_temoins", $("#liste_temoins").val());
    //formData.append("numero_dossier1", $("#numero_dossier1").val());
    //insererTemoin(formData);
    
  //}
  
}

//AJouter temoin par check temoin

function Ajouter_fire_ajax_temoin(formData){
   temoinAjoute = false;
   
  $.ajax({
    url: "ClientProfessionnel/ajouterDossier/temoin",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function(data) {
      if (data.error == "success") {
      
        // Définir la variable temoinAjoute à true
        temoinAjoute = true;
        
        
        var success = data.message;
        console.log(success);
        console.log("data:");
        console.log(data);
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);
        
        console.log(data);
        console.log(data.cin);
        cin=data.cin;
        console.log(cin);
        console.log(data.nom);
        var temoin_element =
          "<tr><td>" +
          data.cin +
          "</td><td>" +
          data.prenom +
          "</td><td>" +
          data.nom +
          "</td ><td>" +
          data.profession +
          '</td><td class="text-right"><div class="btn-group"><button class="btn-white btn btn-xs">إطلاع</button><button class="btn-white btn btn-xs">حذف</button></div></td></tr>';
          console.log("elm tem:"+temoin_element);
        $("#table_temoin_body1").append(temoin_element);
        
        setTimeout(function() {
      $("#temoinModalBody").empty();
      $("#temoinModalBtn").empty();
       // Réinitialiser la variable temoinAjoute à false
      temoinAjoute = false;
      }, 6000);
      
     
        
      } else if (data.error == "error") {
        var error = data.message;
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);
        
        console.log($("#temoinModalBody"));
        console.log($("#temoinModalBody").textContent.trim());
        
        
        
      }
      
    },
    error: function () {
      // Gérer l'erreur de la requête AJAX
    }
  });
}



//inserer Temoin (nv)

function insererTemoin(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/insererTemoin",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data.error == "success") {
      
      
        // Définir la variable temoinAjoute à true
         temoinAjoute = true;
         
         
        var success = data.message;
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);

        var temoin_element =
          "<tr><td>" +
          data.cin +
          "</td><td>" +
          data.prenom +
          "</td><td>" +
          data.nom +
          "</td ><td>" +
          data.profession+
          '</td><td class="text-right"></td></tr>';
        $("#table_temoin_body1").append(temoin_element);
        setTimeout(function() {
        $("#temoinModalBody").empty();
        $("#temoinModalBtn").empty();
         // Réinitialiser la variable temoinAjoute à false
         temoinAjoute = false;
        }, 6000);
      } else if (data.error == "error") {
        var error = data.message;
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);
        
        console.log($("#temoinModalBody"));
        console.log($("#temoinModalBody").textContent.trim());
      }
      
    },
    error: function () {},
  });
}


//Ajouter Temoin

function addTemoinEvent(event) {
  event.preventDefault();
  var formData = new FormData();

  if ($("#check_temoin").prop("checked") == true) {
    formData.append("cni_temoin", $("#cni_temoin").val());
    formData.append("date_expiration_carte", $("#date_expiration_carte").val());
    formData.append("prenom_temoin", $("#prenom_temoin").val());
    formData.append("nom_temoin", $("#nom_temoin").val());
    
    formData.append("date_naissance_temoin", $("#date_naissance_temoin").val());
    formData.append("job_temoin", $("#job_temoin").val());
    
    formData.append("sexe_temoin", $(".sexe_temoin:checked").val());
    formData.append("pere_temoin", $("#pere_temoin").val());
    
    formData.append("addresse_temoin", $("#addresse_temoin").val());

    

    fire_ajax_temoin(formData);
  } else {
    formData.append("cni_temoin", $("#liste_temoins").val());
    formData.append("numero_dossier", $("#numero_dossier").val());

    insert_temoin(formData);
  }
}

function fire_ajax_temoin(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajohuterDossier/dojjssier",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data[0]["error"] == "success") {
        var success = data[0]["message"];
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);

        var temoin_element =
          "<tr><td>" +
          data[1]["cinTemoin"] +
          "</td><td>" +
          data[1]["prenom"] +
          "</td><td>" +
          data[1]["nom"] +
          "</td ><td>" +
          data[1]["proffession"] +
          '</td><td class="text-right"><div class="btn-group"><button class="btn-white btn btn-xs">إطلاع</button><button class="btn-white btn btn-xs">حذف</button></div></td></tr>';
        $("#table_temoin_body").append(temoin_element);
      } else if (data[0]["error"] == "error") {
        var error = data[0]["message"];
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

function insert_temoin(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/insertTemoin",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data[0]["error"] == "success") {
        var success = data[0]["message"];
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);

        var temoin_element =
          "<tr><td>" +
          data[1]["cinTemoin"] +
          "</td><td>" +
          data[1]["prenom"] +
          "</td><td>" +
          data[1]["nom"] +
          "</td ><td>" +
          data[1]["proffession"] +
          '</td><td class="text-right"><div class="btn-group"><button class="btn-white btn btn-xs">إطلاع</button><button class="btn-white btn btn-xs">حذف</button></div></td></tr>';
        $("#table_temoin_body").append(temoin_element);
      } else if (data[0]["error"] == "error") {
        var error = data[0]["message"];
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

// ajouter Argent 

function addArgentEvent(event){

 window.amlakBtn = true;
 $("#btnAmlakError").hide();
 
  event.preventDefault();
  
  console.log("amlak");
  var formData = new FormData();
  console.log("entrer : num "+$("#numero_dossier1").val());
  console.log($("#numero_dossier1").val());
  
  formData.append("numero_dossier1", $("#numero_dossier1").val());
  formData.append("sommeArgent", $("#sommeArgent").val());
  
  // tijari 1
   
  
   formData.append("qima_malia1", $("#qima_malia1").val());
   formData.append("surface1", $("#surface1").val());
   formData.append("addressetijari1", $("#addressetijari1").val()); 
  
   
   // tijari 2
   

 
  console.log('Le bouton a été cliqué !');
  formData.append("qima_malia2", $("#qima_malia2").val());
   formData.append("surface2", $("#surface2").val());
   formData.append("addressetijari2", $("#addressetijari2").val()); 
  

  
   
   
   // tijari 3
  //if (isButtonClicked1) {
   formData.append("qima_malia3", $("#qima_malia3").val());
   formData.append("surface3", $("#surface3").val());
   formData.append("addressetijari3", $("#addressetijari3").val()); 
   
   
   formData.append("autre", $("#autre").val());
   
    // ARED 1
   
  
   formData.append("qima_malia_ared1", $("#qima_malia_ared1").val());
   formData.append("surface_ared1", $("#surface_ared1").val());
   formData.append("adresse_ared1", $("#adresse_ared1").val()); 
  
   
   // ARED 2
   
  
  console.log('Le bouton a été cliqué !');
  formData.append("qima_malia_ared2", $("#qima_malia_ared2").val());
   formData.append("surface_ared2", $("#surface_ared2").val());
   formData.append("adresse_ared2", $("#adresse_ared2").val()); 
  
   
   // ARED 3
  
   formData.append("qima_malia_ared3", $("#qima_malia_ared3").val());
   formData.append("surface_ared3", $("#surface_ared3").val());
   formData.append("adresse_ared3", $("#adresse_ared3").val()); 
   
   
   
   
   // Autre 1
   
  
   formData.append("type1", $("#type1").val());
    formData.append("qima_autre1", $("#qima_autre1").val()); 
  
   
   // Autre 2
   
  
  console.log('Le bouton a été cliqué !');
  formData.append("type2", $("#type2").val());
     formData.append("qima_autre2", $("#qima_autre2").val()); 
  
   
   // Autre 3
  
   formData.append("type3", $("#type3").val());
   formData.append("qima_autre3", $("#qima_autre3").val()); 
   
   
  
  $.ajax({
    url: "ClientProfessionnel/ajouterDossier/argent",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function(data) {
    if (data.error == "success") {
    console.log(data.error);
        var success = data.message;
        $("#argentModalBody").empty();
        $("#argentModalBody").append(success);
        
        var btn = '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#argentModalBtn").empty();
        $("#argentModalBtn").append(btn);
        
        document.getElementById('btnAmlak').disabled = true;
        
        } else if (data.error == "error") {
        var error = data.message;
        $("#argentModalBody").empty();
        $("#argentModalBody").append(error);

        var btn = '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#argentModalBtn").empty();
        $("#argentModalBtn").append(btn);
        }
    
        var boutonParler = document.getElementById("btn_amlak");
        boutonParler.setAttribute("disabled", "disabled");
    },
    error: function () {
      // Gérer l'erreur de la requête AJAX
    }
  });
}



//Ajouter Prelevement


function addPrelevementEvent(event){
  console.log("khikhi");
  event.preventDefault();
  var formData = new FormData();
  formData.append("numero_dossier1", $("#numero_dossier1").val());
  formData.append("doyon", $("#doyon").val());
  formData.append("tajhez", $("#tajhez").val());
  console.log($("#numero_dossier1").val());   
  $.ajax({
    url: "ClientProfessionnel/ajouterDossier/prelevement",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function(data) {
     if (data.error == "success") {
    console.log(data.error);
        var success = data.message;
        $("#prelevementModalBody").empty();
        $("#prelevementModalBody").append(success);
        
        var btn = '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#prelevementModalBtn").empty();
        $("#prelevementModalBtn").append(btn);
        
        
        } else if (data.error == "error") {
        var error = data.message;
        $("#prelevementModalBody").empty();
        $("#prelevementModalBody").append(error);

        var btn = '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#prelevementModalBtn").empty();
        $("#prelevementModalBtn").append(btn);
        }
    
    
    },
    error: function () {
      // Gérer l'erreur de la requête AJAX
    }
  });
}


// Ajout d'un wasiya

function addWasiyaEvent(event){
  event.preventDefault();
  var formData = new FormData();
  console.log("entrer : num "+$("#numero_dossier1").val());
  console.log($("#numero_dossier1").val());
 
  
  formData.append("nom_wasiya", $("#nom_wasiya").val());
  formData.append("prenom_wasiya", $("#prenom_wasiya").val());
  formData.append("cin_wasiya", $("#cin_wasiya").val());
  formData.append("numero_dossier1", $("#numero_dossier1").val());
  formData.append("wasiya", $("#wasiya").val());
   
  $.ajax({
    url: "ClientProfessionnel/ajouterDossier/wasiya",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function(data) {
    if (data.error == "success") {
    console.log(data.error);
        var success = data.message;
        $("#wasiyaModalBody").empty();
        $("#wasiyaModalBody").append(success);
        
        var btn = '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#wasiyaModalBtn").empty();
        $("#wasiyaModalBtn").append(btn);
        
        
        } else if (data.error == "error") {
        var error = data.message;
        $("#wasiyaModalBody").empty();
        $("#wasiyaModalBody").append(error);

        var btn = '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#wasiyaModalBtn").empty();
        $("#wasiyaModalBtn").append(btn);
        }
    
    
    },
    error: function () {
      // Gérer l'erreur de la requête AJAX
    }
  });
}





function fire_ajax_dossier(formData, fullNumber) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/dossier",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data["error"] == "success") {
        var success = data["message"];
        $("#dossierModalBody").empty();
        $("#dossierModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#dossierModalBtn").empty();
        $("#dossierModalBtn").append(btn);

        var numDoss = "رقم الملف : " + fullNumber;
        $("#numero_dossier").empty();
        $("#numero_dossier").append(numDoss);
        $("#numero_dossier").val(fullNumber);
      } else {
        var error = data["message"];
        $("#dossierModalBody").empty();
        $("#dossierModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#dossierModalBtn").empty();
        $("#dossierModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}


// ajout d'un victime

function addVictimeEvent(event) {
  event.preventDefault();
  var formData = new FormData();

  if ($("#check_victime").prop("checked") == true) {
    formData.append("cni_victime", $("#cni_victime").val());
    formData.append("prenom_victime", $("#prenom_victime").val());
    formData.append("nom_victime", $("#nom_victime").val());
    formData.append("etat_social_victime", $("#etat_social_victime").val());
    formData.append(
      "nombre_enfants_victime",
      $("#nombre_enfants_victime").val()
    );
    formData.append(
      "salaire_annuel_victime",
      $("#salaire_annuel_victime").val()
    );
    formData.append(
      "date_naissance_victime",
      $("#date_naissance_victime").val()
    );
    formData.append("job_victime", $("#job_victime").val());
    formData.append(
      "lieu_naissance_victime",
      $("#lieu_naissance_victime").val()
    );
    formData.append("sexe_victime", $(".sexe_victime:checked").val());
    formData.append("pere_victime", $("#pere_victime").val());
    formData.append("mere_victime", $("#mere_victime").val());
    formData.append("addresse_victime", $("#addresse_victime").val());
    formData.append("numero_dossier", $("#numero_dossier").val());
    formData.append("montantDemande", $("#montantDemande").val());

    fire_ajax_victime(formData);
  } else {
    formData.append("id_victime", $("#liste_victimes").val());
    formData.append("numero_dossier", $("#numero_dossier").val());
    insert_victime(formData);
  }
}


function fire_ajax_victime(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/victime",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data[0]["error"] == "success") {
        var success = data[0]["message"];
        $("#victimeModalBody").empty();
        $("#victimeModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#victimeModalBtn").empty();
        $("#victimeModalBtn").append(btn);

        var etatVict =
          "2 - وضعية الضحية [" +
          $("#prenom_victime").val() +
          " " +
          $("#nom_victime").val() +
          "]";
        $("#etatVictime").empty();
        $("#etatVictime").append(etatVict);
        $("#etatVictime").val(data[1]["id"]);

        var avocatVict =
          "3 - محامي الضحية [" +
          $("#prenom_victime").val() +
          " " +
          $("#nom_victime").val() +
          "]";
        $("#avocatVictime").empty();
        $("#avocatVictime").append(avocatVict);
        $("#avocatVictime").val(data[1]["id"]);

        var victime_element =
          "<tr><td>" +
          data[1]["cin"] +
          "</td><td>" +
          data[1]["prenom"] +
          "</td > <td>" +
          data[1]["nom"] +
          "</td> <td>" +
          data[1]["proffession"] +
          '</td><td class="text-right"><div class="btn-group"><button class="btn-white btn btn-xs">إطلاع</button><button class="btn-white btn btn-xs">حذف</button></div></td></tr>';
        $("#table_victime_body").append(victime_element);
      } else if ((data[0]["error"] = "error")) {
        var error = data[0]["message"];
        $("#victimeModalBody").empty();
        $("#victimeModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#victimeModalBtn").empty();
        $("#victimeModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

function insert_victime(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/insertVictime",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data[0]["error"] == "success") {
        var success = data[0]["message"];
        $("#victimeModalBody").empty();
        $("#victimeModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#victimeModalBtn").empty();
        $("#victimeModalBtn").append(btn);

        var etatVict = "2 - وضعية الضحية [" + data[1]["prenom"] + " " + data[1]["nom"] + "]";
        var addDawitittle = "إضافة ذي حقوق جديد للضحية   [" + data[1]["prenom"] + " " + data[1]["nom"] + "]";
        $("#etatVictime").empty();
        $("#etatVictime").append(etatVict);
        $("#addDawiTittle").empty();
        $("#addDawiTittle").append(addDawitittle);
        $("#etatVictime").val(data[1]["id"]);

        var avocatVict =
          "3 - محامي الضحية [" + data[1]["prenom"] + " " + data[1]["nom"] + "]";
        $("#avocatVictime").empty();
        $("#avocatVictime").append(avocatVict);
        $("#avocatVictime").val(data[1]["id"]);

        var victime_element =
          "<tr><td>" +
          data[1]["cin"] +
          "</td><td>" +
          data[1]["prenom"] +
          "</td > <td>" +
          data[1]["nom"] +
          "</td> <td>" +
          data[1]["proffession"] +
          '</td><td class="text-right"><div class="btn-group"><button class="btn-white btn btn-xs">إطلاع</button><button class="btn-white btn btn-xs">حذف</button></div></td></tr>';
        $("#table_victime_body").append(victime_element);
      } else if ((data[0]["error"] = "error")) {
        var error = data[0]["message"];
        $("#victimeModalBody").empty();
        $("#victimeModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#victimeModalBtn").empty();
        $("#victimeModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

function updateEtatVictime() {
  var formData = new FormData();
  formData.append("id_victime", $("#etatVictime").val());
  formData.append("etat_victime", $(".etat_victime:checked").val());

  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/updateVictime",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data[0]["error"] == "success") {
      } else if (data[0]["error"] == "error") {
      }
    },
    error: function () {},
  });
}

// switcher entre les rubriques dans Modal d'ajout et de modification'
function openTab(evt, tabName) {
	evt.preventDefault();
	  var i, tabcontent, tablinks;
	  tabcontent = document.getElementsByClassName("tabcontent");
	  for (i = 0; i < tabcontent.length; i++) {
	    tabcontent[i].style.display = "none";
	  }
	  
	  tablinks = document.getElementsByClassName("tablinks");
	  for (i = 0; i < tablinks.length; i++) {
	    tablinks[i].className = tablinks[i].className.replace(" active", "");
	  }
	  document.getElementById(tabName).style.display = "block";
	  evt.currentTarget.className += " active";
	}


// calcule age
/*
function calculerAge(dateNaiss){

  var birthDate = new Date(dateNaiss.toString());
  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
*/

// l'ajout d'un dawi


// initialiser la form apres l'jout et la modification d'un dawi
function initialiserForme(){
	
	$("#relation_dawi").prop('selectedIndex',0);
	$("#cni_famille_victime").val("");
    $("#nomfam_famille_victime").val("");
    $("#prenom_famille_victime").val("");
    /*
    $('#naissance_famille_victime').datepicker({
        "setDate": new Date(),
        "autoclose": true
	});
	*/
    $("#etat_sociale_famille_victime").prop('selectedIndex',0);
    $("#job_famille_victime").prop('selectedIndex',0);
    $("#addresse_famille_victime").val("");

    $("#addDawiTittle").text("");

}

function addEditDawiEvent(event) {
    event.preventDefault();
    var val = $("#addEditDawiBtn").text();
	var formData = new FormData();
	formData.append("relation_avec_victime", $("#relation_dawi").val());
	formData.append("droit_compensation", $(".droit_compensation:checked").val());
	formData.append("id_victime", $("#etatVictime").val());
	formData.append("cni", $("#cni_famille_victime").val());
	formData.append("nom", $("#nomfam_famille_victime").val());
	formData.append("prenom", $("#prenom_famille_victime").val());
	formData.append("date_naissance", $("#naissance_famille_victime").val());
	formData.append("etat_sociale", $("#etat_sociale_famille_victime").val());
	formData.append("job", $("#job_famille_victime").val());
	formData.append("addresse", $("#addresse_famille_victime").val());
	
  if(val === "تعديل"){
	console.log("modification de : "+formData.get("nom"));
    fire_ajax_modifier_dawi(formData);
    $("#addEditDawiBtn").text("إضافة ذي الحقوق");
  }else{
	console.log("l'ajout de : "+formData.get("nom"));
    fire_ajax_dawi(formData);
	
  }


  /** else {
    formData.append("id_victime", $("#etatVictime").val());
    formData.append("id_dawi", $("#liste_dawis").val());

    formData.append("relation_avec_victime", $("#relation_dawi").val());
    formData.append(
      "droit_compensation",
      $(".droit_compensation:checked").val()
    );

    //insert_dawi(formData);
  }*/
}

// la confirmation de la suppression

function supprimerDawi(event,idDawi, idVictime){
	event.preventDefault();
  	var formData = new FormData();
    formData.append("idDawi", ""+idDawi);
    formData.append("idVictime", ""+idVictime);
	console.log("ID dawi a supprimer : "+idDawi);
	  if (confirm("تأكيد الحذف") == true) {
		fire_ajax_delete_dawi(formData);
	  }
  
}

// declanchement de la suppression d'un Dawi avec ajax

function fire_ajax_delete_dawi(formData){
	$.ajax({
			    type: "POST",
			    url: "ClientProfessionnel/ajouterDossier/supprimerDawi",
			    processData: false,
			    contentType: false,
			    cache: false,
			    data: formData,
			    timeout: 600000,
			    success: function (data) {
				//	alert("تم حذف ذي الحقوق بنجاح");
					fillTable(data,0);
					console.log(data);
			    },
			    error: function () {
					//alert("حدث خطأ أثناء الحذف");
				
			},
		  });
}


// charger la forme avec les information de Dawi pour que l'utilisateur peut les modifier

function modifierDawi(event,nom, prenom, relation,cin,dateNaissance,
 situationFamilialle, proffession, ta3wid, addresse ){
	event.preventDefault();
	openTab(event, 'tab1');
    console.log("ta3wid: "+ta3wid);
    
    if(ta3wid === "نعم")
    	$("#droit_compensation_oui").prop("checked", true);
    else
    	$("#droit_compensation_non").prop("checked", true);
    	
	$("#relation_dawi").val(relation);
	$("#cni_famille_victime").val(cin);
    $("#nomfam_famille_victime").val(nom);
    $("#prenom_famille_victime").val(prenom);
    console.log("data type of this date is : "+dateNaissance);
    $("#naissance_famille_victime").val(dateNaissance);
    $("#etat_sociale_famille_victime").val(situationFamilialle);
    $("#job_famille_victime").val(proffession);
    $("#addresse_famille_victime").val(addresse);
    
    $("#addEditDawiBtn").text("تعديل");
    $("#addDawiTittle").text("");
    $("#addDawiTittle").text("تعديل ذي حقوق");

	
}

// l'envoi des nouvelles infos de Dawi a modifier

function fire_ajax_modifier_dawi(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/modifierDawi",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data[0]["message"]==="تم تحديث ذي الحقوق بنجاح."){
		console.log(data);
        $("#dawiModalBody").empty();
        $("#dawiModalBody").append(data[0]["message"]);
		
        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#dawiModalBtn").empty();
        $("#dawiModalBtn").append(btn);
        fillTable(data,1);
        initialiserForme();
      } else {
		console.log(data[0]["error"]);
        var error = data[0]["error"];
        $("#dawiModalBody").empty();
        $("#dawiModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#dawiModalBtn").empty();
        $("#dawiModalBtn").append(btn);
        
      }
    },
    error: function () {},
  });
}

// remplissage de la table des Dawis selon un victime
function fillTable(data, n){
	
        var dawi_element ="";
		for (var i =n ; i < data.length; i++) {
    		dawi_element+=
	          "<tr><td>" +
	          data[i]["nom"] +
	          "</td><td>" +
	          data[i]["prenom"] +
	          "</td > <td>" +
	          data[i]["relation"] +
	          "</td><td>" +
	          data[i]["ta3wid"] +
	          '</td><td class="text-right"><div class="btn-group"><button onclick="modifierDawi(event,\'' + data[i]["nom"] + '\',\'' + data[i]["prenom"] + '\',\'' + data[i]["relation"] + '\',\'' + data[i]["cin"] + '\',\'' + data[i]["dateNaissance"] + '\',\'' + data[i]["situationFamilialle"] + '\',\'' + data[i]["proffession"] + '\',\'' + data[i]["ta3wid"] + '\',\'' + data[i]["addresse"] + '\');" class="btn-white btn btn-xs">تعديل</button><button onclick="supprimerDawi(event,'+data[i]["idDawi"]+','+data[i]["idVictime"]+');" class="btn-white btn btn-xs">حذف</button></div></td></tr>';
	        
		}
		$("#table_dawi_body").empty();
		$("#table_dawi_body").append(dawi_element);
        
}

// l'envoi des infos d'un Dawi pour l'ajout

function fire_ajax_dawi(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/dawi",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data[0]["message"]==="تم إضافة ذي الحقوق بنجاح"){
		console.log(data);
        var success = "تم إضافة ذي الحقوق بنجاح";
        $("#dawiModalBody").empty();
        $("#dawiModalBody").append(success);
		
        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#dawiModalBtn").empty();
        $("#dawiModalBtn").append(btn);
        fillTable(data,1);
        initialiserForme();
      } else {
		console.log(data[0]["error"]);
        var error = data[0]["error"];
        $("#dawiModalBody").empty();
        $("#dawiModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#dawiModalBtn").empty();
        $("#dawiModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

/*
function insert_dawi(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/insertDawi",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data["error"] == "success") {
        var success = data["message"];
        $("#dawiModalBody").empty();
        $("#dawiModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#dawiModalBtn").empty();
        $("#dawiModalBtn").append(btn);
      } else {
        var error = data["message"];
        $("#dawiModalBody").empty();
        $("#dawiModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#dawiModalBtn").empty();
        $("#dawiModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}
*/


// verification de la relation entre le victime et le titulaire du droit s'elle s'est precise
function isSetQaraba(){
	var val = document.getElementById("relation_dawi").selectedIndex;
	console.log(val);
	if(val > 0){
		$("#liste_dawi").show();
	}else{
		$("#liste_dawi").hide();
		
	}
}
// l'ajout d'un avocat pour un victime

function addAvocatVictimeEvent(event) {
  event.preventDefault();
  var formData = new FormData();

  if ($("#check_avocat_victime").prop("checked") == true) {
    formData.append("cni_avocat_victime", $("#cni_avocat_victime").val());
    formData.append("prenom_avocat_victime", $("#prenom_avocat_victime").val());
    formData.append("nom_avocat_victime", $("#nom_avocat_victime").val());
    formData.append("barreau_victime", $("#barreau_victime").val());
    formData.append(
      "addresse_avocat_victime",
      $("#addresse_avocat_victime").val()
    );

    formData.append("id_victime", $("#etatVictime").val());

    fire_ajax_avocat_victime(formData);
  } else {
    formData.append("cni_avocat_victime", $("#liste_avocats_victime").val());
    formData.append("id_victime", $("#etatVictime").val());

    insert_avocat_victime(formData);
  }
}

function fire_ajax_avocat_victime(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/avocatVictime",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data["error"] == "success") {
        var success = data["message"];
        $("#avocatVictimeModalBody").empty();
        $("#avocatVictimeModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#avocatVictimeModalBtn").empty();
        $("#avocatVictimeModalBtn").append(btn);
      } else {
        var error = data["message"];
        $("#avocatVictimeModalBody").empty();
        $("#avocatVictimeModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#avocatVictimeModalBtn").empty();
        $("#avocatVictimeModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

function insert_avocat_victime(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/insertAvocatVictime",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data["error"] == "success") {
        var success = data["message"];
        $("#avocatVictimeModalBody").empty();
        $("#avocatVictimeModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#avocatVictimeModalBtn").empty();
        $("#avocatVictimeModalBtn").append(btn);
      } else {
        var error = data["message"];
        $("#avocatVictimeModalBody").empty();
        $("#avocatVictimeModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#avocatVictimeModalBtn").empty();
        $("#avocatVictimeModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

// ajout d'un accuse

function addAccuseEvent(event) {
  event.preventDefault();
  var formData = new FormData();

  if ($("#check_accuse").prop("checked") == true) {
    formData.append("cni_accuse", $("#cni_accuse").val());
    formData.append("prenom_accuse", $("#prenom_accuse").val());
    formData.append("nom_accuse", $("#nom_accuse").val());
    formData.append("etat_social_accuse", $("#etat_social_accuse").val());
    formData.append("nombre_enfants_accuse", $("#nombre_enfants_accuse").val());
    formData.append("assurance_accuse", $("#assurance_accuse").val());
    formData.append("date_naissance_accuse", $("#date_naissance_accuse").val());
    formData.append("job_accuse", $("#job_accuse").val());
    formData.append("lieu_naissance_accuse", $("#lieu_naissance_accuse").val());
    formData.append("sexe_accuse", $(".sexe_accuse:checked").val());
    formData.append("pere_accuse", $("#pere_accuse").val());
    formData.append("mere_accuse", $("#mere_accuse").val());
    formData.append("addresse_accuse", $("#addresse_accuse").val());

    formData.append("numero_dossier", $("#numero_dossier").val());
    formData.append("charge_accuse", $("#charge_accuse").val());

    fire_ajax_accuse(formData);
  } else {
    formData.append("id_accuse", $("#liste_accuses").val());
    formData.append("numero_dossier", $("#numero_dossier").val());
    formData.append("charge_accuse", $("#charge_accuse").val());

    insert_accuse(formData);
  }
}

function fire_ajax_accuse(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/accuse",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data[0]["error"] == "success") {
        var success = data[0]["message"];
        $("#accuseModalBody").empty();
        $("#accuseModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#accuseModalBtn").empty();
        $("#accuseModalBtn").append(btn);

        var offCivil =
          "2 - المسؤول المدني [" +
          $("#prenom_accuse").val() +
          " " +
          $("#nom_accuse").val() +
          "]";
        $("#officierCivil").empty();
        $("#officierCivil").append(offCivil);
        $("#officierCivil").val(data[1]["id"]);

        var avocatAcc =
          "3 - محامي المتهم [" +
          $("#prenom_accuse").val() +
          " " +
          $("#nom_accuse").val() +
          "]";
        $("#avocatAccuse").empty();
        $("#avocatAccuse").append(avocatAcc);
        $("#avocatAccuse").val(data[1]["id"]);

        var accuse_element =
          "<tr><td>" +
          data[1]["cin"] +
          "</td><td>" +
          data[1]["prenom"] +
          "</td > <td>" +
          data[1]["nom"] +
          "</td> <td>" +
          data[1]["proffession"] +
          '</td><td class="text-right"><div class="btn-group"><button class="btn-white btn btn-xs">إطلاع</button><button class="btn-white btn btn-xs">حذف</button></div></td></tr>';
        $("#table_accuse_body").append(accuse_element);
      } else if (data[0]["error"] == "error") {
        var error = data[0]["message"];
        $("#accuseModalBody").empty();
        $("#accuseModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#accuseModalBtn").empty();
        $("#accuseModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

function insert_accuse(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/insertAccuse",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data[0]["error"] == "success") {
        var success = data[0]["message"];
        $("#accuseModalBody").empty();
        $("#accuseModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#accuseModalBtn").empty();
        $("#accuseModalBtn").append(btn);

        var offCivil =
          "2 - المسؤول المدني [" +
          data[1]["prenom"] +
          " " +
          data[1]["nom"] +
          "]";
        $("#officierCivil").empty();
        $("#officierCivil").append(offCivil);
        $("#officierCivil").val(data[1]["id"]);

        var avocatAcc =
          "3 - محامي المتهم [" + data[1]["prenom"] + " " + data[1]["nom"] + "]";
        $("#avocatAccuse").empty();
        $("#avocatAccuse").append(avocatAcc);
        $("#avocatAccuse").val(data[1]["id"]);

        var accuse_element =
          "<tr><td>" +
          data[1]["cin"] +
          "</td><td>" +
          data[1]["prenom"] +
          "</td > <td>" +
          data[1]["nom"] +
          "</td> <td>" +
          data[1]["proffession"] +
          '</td><td class="text-right"><div class="btn-group"><button class="btn-white btn btn-xs">إطلاع</button><button class="btn-white btn btn-xs">حذف</button></div></td></tr>';
        $("#table_accuse_body").append(accuse_element);
      } else if (data[0]["error"] == "error") {
        var error = data[0]["message"];
        $("#accuseModalBody").empty();
        $("#accuseModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#accuseModalBtn").empty();
        $("#accuseModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

// Ajout d'un officier civil pour victime

function addOfficierCivilEvent(event) {
  event.preventDefault();
  var formData = new FormData();

  if ($("#check_officier_civil").prop("checked") == true) {
    formData.append("cni_officier_civil", $("#cni_officier_civil").val());
    formData.append("prenom_officier_civil", $("#prenom_officier_civil").val());
    formData.append("nom_officier_civil", $("#nom_officier_civil").val());
    formData.append(
      "assurance_officier_civil",
      $("#assurance_officier_civil").val()
    );
    formData.append(
      "addresse_officier_civil",
      $("#addresse_officier_civil").val()
    );

    formData.append("id_accuse", $("#officierCivil").val());

    fire_ajax_officier_civil(formData);
  } else {
    formData.append("cni_officier_civil", $("#liste_officier_civils").val());
    formData.append("id_accuse", $("#officierCivil").val());

    insert_officier_civil(formData);
  }
}

function fire_ajax_officier_civil(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/officierCivil",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data["error"] == "success") {
        var success = data["message"];
        $("#officierCivilModalBody").empty();
        $("#officierCivilModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#officierCivilModalBtn").empty();
        $("#officierCivilModalBtn").append(btn);
      } else {
        var error = data["message"];
        $("#officierCivilModalBody").empty();
        $("#officierCivilModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#officierCivilModalBtn").empty();
        $("#officierCivilModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

function insert_officier_civil(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/insertOfficierCivil",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data["error"] == "success") {
        var success = data["message"];
        $("#officierCivilModalBody").empty();
        $("#officierCivilModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#officierCivilModalBtn").empty();
        $("#officierCivilModalBtn").append(btn);
      } else {
        var error = data["message"];
        $("#officierCivilModalBody").empty();
        $("#officierCivilModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#officierCivilModalBtn").empty();
        $("#officierCivilModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

// Ajout d'un avocat pour accuse

function addAvocatAccuseEvent(event) {
  event.preventDefault();
  var formData = new FormData();

  if ($("#check_avocat_accuse").prop("checked") == true) {
    formData.append("cni_avocat_accuse", $("#cni_avocat_accuse").val());
    formData.append("prenom_avocat_accuse", $("#prenom_avocat_accuse").val());
    formData.append("nom_avocat_accuse", $("#nom_avocat_accuse").val());
    formData.append("barreau_accuse", $("#barreau_accuse").val());
    formData.append(
      "addresse_avocat_accuse",
      $("#addresse_avocat_accuse").val()
    );

    formData.append("id_accuse", $("#avocatAccuse").val());

    fire_ajax_avocat_accuse(formData);
  } else {
    formData.append("cni_avocat_accuse", $("#liste_avocats_accuse").val());
    formData.append("id_accuse", $("#officierCivil").val());

    insert_avocat_accuse(formData);
  }
}

function fire_ajax_avocat_accuse(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/avocatAccuse",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data["error"] == "success") {
        var success = data["message"];
        $("#avocatAccuseModalBody").empty();
        $("#avocatAccuseModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#avocatAccuseModalBtn").empty();
        $("#avocatAccuseModalBtn").append(btn);
      } else {
        var error = data["message"];
        $("#avocatAccuseModalBody").empty();
        $("#avocatAccuseModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#avocatAccuseModalBtn").empty();
        $("#avocatAccuseModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

function insert_avocat_accuse(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/insertAvocatAccuse",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data["error"] == "success") {
        var success = data["message"];
        $("#avocatAccuseModalBody").empty();
        $("#avocatAccuseModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#avocatAccuseModalBtn").empty();
        $("#avocatAccuseModalBtn").append(btn);
      } else {
        var error = data["message"];
        $("#avocatAccuseModalBody").empty();
        $("#avocatAccuseModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#avocatAccuseModalBtn").empty();
        $("#avocatAccuseModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

// ajout d'un temoin

function FaddTemoinEvent(event) {
  event.preventDefault();
  var formData = new FormData();

  if ($("#check_temoin").prop("checked") == true) {
    formData.append("cni_temoin", $("#cni_temoin").val());
    formData.append("prenom_temoin", $("#prenom_temoin").val());
    formData.append("nom_temoin", $("#nom_temoin").val());
    formData.append("etat_sociale_temoin", $("#etat_sociale_temoin").val());
    formData.append("date_naissance_temoin", $("#date_naissance_temoin").val());
    formData.append("job_temoin", $("#job_temoin").val());
    formData.append("lieu_naissance_temoin", $("#lieu_naissance_temoin").val());
    formData.append("sexe_temoin", $(".sexe_temoin:checked").val());
    formData.append("pere_temoin", $("#pere_temoin").val());
    formData.append("mere_temoin", $("#mere_temoin").val());
    formData.append("addresse_temoin", $("#addresse_temoin").val());

    formData.append("numero_dossier", $("#numero_dossier").val());

    fire_ajax_temoin(formData);
  } else {
    formData.append("cni_temoin", $("#liste_temoins").val());
    formData.append("numero_dossier", $("#numero_dossier").val());

    insert_temoin(formData);
  }
}

function Ffire_ajax_temoin(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/temoin",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data[0]["error"] == "success") {
        var success = data[0]["message"];
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);

        var temoin_element =
          "<tr><td>" +
          data[1]["cinTemoin"] +
          "</td><td>" +
          data[1]["prenom"] +
          "</td><td>" +
          data[1]["nom"] +
          "</td ><td>" +
          data[1]["proffession"] +
          '</td><td class="text-right"><div class="btn-group"><button class="btn-white btn btn-xs">إطلاع</button><button class="btn-white btn btn-xs">حذف</button></div></td></tr>';
        $("#table_temoin_body").append(temoin_element);
      } else if (data[0]["error"] == "error") {
        var error = data[0]["message"];
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}

function Finsert_temoin(formData) {
  $.ajax({
    type: "POST",
    url: "ClientProfessionnel/ajouterDossier/insertTemoin",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
      if (data[0]["error"] == "success") {
        var success = data[0]["message"];
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(success);

        var btn =
          '<button type="button" class="btn btn-primary" data-dismiss="modal">حفظ</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);

        var temoin_element =
          "<tr><td>" +
          data[1]["cinTemoin"] +
          "</td><td>" +
          data[1]["prenom"] +
          "</td><td>" +
          data[1]["nom"] +
          "</td ><td>" +
          data[1]["proffession"] +
          '</td><td class="text-right"><div class="btn-group"><button class="btn-white btn btn-xs">إطلاع</button><button class="btn-white btn btn-xs">حذف</button></div></td></tr>';
        $("#table_temoin_body").append(temoin_element);
      } else if (data[0]["error"] == "error") {
        var error = data[0]["message"];
        $("#temoinModalBody").empty();
        $("#temoinModalBody").append(error);

        var btn =
          '<button type="button" class="btn btn-danger" data-dismiss="modal">إعادة المحاولة</button>';
        $("#temoinModalBtn").empty();
        $("#temoinModalBtn").append(btn);
      }
    },
    error: function () {},
  });
}









 function handleChange(element){
         element.blur();
         var selectedCIN = $('#cni_temoin').val();
         var selectedPersonId = $('#personnes [value="' + selectedCIN + '"]').data('value');
         //alert(selectedPersonId);
         findPersonne(selectedPersonId);
                
         
         
       } 
       
       
       function formatDate(date) {
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}
      
      function findPersonne(selectedPersonId){
    	  //var formData = new FormData();
    	  //formData.append("id", selectedPersonId);
    	  $.ajax({
    		    url: "ClientProfessionnel/findPersonne/"+selectedPersonId,
    		    type: "GET",
    		   // data: formData,
    		    processData: false,
    		    contentType: false,
    		    cache: false,
		        timeout: 600000,
    		    success: function(data) {
    		    
    		    var dateNaissance = new Date(data["personne"]["date_de_naissance"]);
      var dateExpiration = new Date(data["personne"]["date_expiration_cin"]);
      
      console.log(dateNaissance);
      console.log(dateExpiration);
      
      // Formater les dates dans le format "yyyy-MM-dd"
      var formattedDateNaissance = formatDate(dateNaissance);
      var formattedDateExpiration = formatDate(dateExpiration);
      
      console.log(formattedDateNaissance);
      console.log(formattedDateExpiration);
      
      // Utiliser les dates formatées dans les champs de formulaire
      $("#date_naissance_temoin").val(formattedDateNaissance);
      $("#date_expiration_carte").val(formattedDateExpiration);
    		     

    		       console.log(data);
    		       
    		    	
    		    	console.log(data["personne"]["id"]);
    		    	console.log(data["personne"]);
    		    	console.log(data["personne"]["prenom"]);
    		    	
    	
    		    	$('#personne_id').val(data["personne"]["id"]);
          
           $('#prenom_temoin').val(data["personne"]["prenom"]);
           $('#nom_temoin').val(data["personne"]["nom"]);
           $('#job_temoin').val(data["personne"]["profession"]);
           $('#sexe_temoin').val(data["personne"]["sexe"]);
           $('#pere_temoin').val(data["personne"]["nomPere"]);
           $('#addresse_temoin').val(data["personne"]["adresse"]);
           
            	
    		    },
    		    error: function () {
    		      // Gérer l'erreur de la requête AJAX
    		    }
    		  });
    		}
      

      












