var global2aadrar = "";
var globalis2aatarSayi2a ="";
var globalNissbatL3ajz =0;
var globalNumeroDossier="";
var globalID_VIT = 0;
var globalALAM_JISMANI  ="";
var globaleATAR_SAYIA="";
var globalCOMPENSATION_MEDICAL =0;
var globalIn9ita3 ="";
var globalIsti3anaBichghss ="";
var globalNA9S_MIHANI ="";
var globalNB_JOUR_PERDE =0;
var globalPOURCENTAGE_ACCUSE=0.0 ;
var globalPOURCENTAGE_DEFICIT=0.0;
var globalTACHWIH ="";
var globaltaawidat_m2 =0;
var globaltaawidat_m1="";
var globaltaawidat_m3 =0;
function taawidat(event){

  var etat= $("#etat_victime_info").val();
	
  if (etat == "ميت") {
   	 mort_icvtime();
  } 
  else  
  {
    vivant();
  }
}


function vivant(){
	var nDossier = $("#numero_dossier option:selected").val();
	var idVictime = $("#liste_victimes_info").val();
	globalID_VIT = idVictime;
	location.href = "/Client/Taawidat/"+idVictime+"/"+nDossier;

}

function TreterVivant(event){
	$('#taawidatClcule').css('display', 'block');
	calcule_ta3widate_Victime(event);
}
$(document).ready(function(){
    $("#taxwihKHil9a").on("change",function() {
       var val = $("input[name='taxwih']:checked").val()
		if(val){
			global2aadrar = "";
			global2aadrar = val;
			
			$("#TAXWIH").css('display', 'block');
			$("#ADRAR").css('display', 'none');
		}
    });
     $("#adrarKhass").on("change",function() {
       var val = $("input[name='taxwih']:checked").val()
		if(val){
			global2aadrar = "";
			global2aadrar = val;
			$("#TAXWIH").css('display', 'none');
			$("#ADRAR").css('display', 'block');
		}
    });
    $("#atar_isoui").on("change",function() {
       var val = $("input[name='atar']:checked").val()
		if(val){
			globalis2aatarSayi2a = "";
			globalis2aatarSayi2a = val;
			globalNissbatL3ajz=$("#porcentage_3ajz").val();
			if(globalis2aatarSayi2a == "نعم" && globalNissbatL3ajz >=	10){
						$("#drarGlo").css('display', 'block');
			}
		}
    });
     $("#atar_isnon").on("change",function() {
       var val = $("input[name='atar']:checked").val()
		if(val){
			globalis2aatarSayi2a = "";
			globalis2aatarSayi2a = val;
			globalNissbatL3ajz=$("#porcentage_3ajz").val();
			
		}
    });
    $("#in9ita3_0").on("change",function() {
       var val = $("input[name='in9ita3']:checked").val()
		if(val){
			globalIn9ita3 = "";
			globalIn9ita3 = val;
			
		}
    });
    $("#in9ita3_1").on("change",function() {
       var val = $("input[name='in9ita3']:checked").val()
		if(val){
			globalIn9ita3 = "";
			globalIn9ita3 = val;
		}
    });
    
    /*$("#rasMalMo3_1").on("change",function() {
       var val = $("input[name='rasMalMo3']:checked").val()
		if(val){
			alert('val : '+rasMalMo3_1);
			/*console.log("val :"+rasMalMo3_1);
			globaltaawidat_m1 = val;
			globaltaawidat_m2 = 0;
			globaltaawidat_m3 =0;
		}
    });
      $("#rasMalMo3_2").on("change",function() {
       var val = $("input[name='rasMalMo3']:checked").val()
		if(val){
			console.log("val :"+val);
			globaltaawidat_m1 = val;
			globaltaawidat_m2 = 0;
			globaltaawidat_m3 =0;
		}
    });*/
   
       
});

//comment recuperez la valeur de radio button
/*function affichRadio(){
	var val = $("input[name='in9ita3']:checked").val()
					  if(val){
				            alert("votre langage de programmation préféré est : " + val);
				          }
}
*/
function calcule_ta3widate_Victime(event){
	event.preventDefault();
	  $.ajax({
		type: "GET",
		url: "/Client/Taawidat/calculeVictime",
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
		success: function (data){
			
			$("#name_vic").text(data["victime"]["nom"]+" "+data["victime"]["prenom"]);
			$("#numero_dossier").text(data["numerDossier"]);
			$("#numero_dossier").val(data["numerDossier"]);
			if(data["ghibra"] === null){
				$('#ghibra_btn').css('display', 'none');
				if(data["isRassLmalMo3tamad"] == false){
					$('#Ra2ssLmal').css('display', 'none');
					$('#calculeRa2ssLmal').css('display', 'block');
					if(data["victime"]["proffession"] == "وظيفة أخرى"){
						$('#jours3jz').css('display', 'block');
						$('#atarSayi2a').css('display', 'block');
						
						
					}
					if(data["victime"]["proffession"] =="موظف"){
						$('#atarSayi2a').css('display', 'block');
						
					}
					if(data["victime"]["proffession"] =="طالب بسلك 1 أو 2" ||data["victime"]["proffession"] =="طالب بسلك 3"||data["victime"]["proffession"] =="تلميذ بسلك الثانوي أو بالتأهيل المهني"){
						$('#in9ita3_dirassa').css('display', 'block')
						
					}
					
					
				}
				else if(data["isRassLmalMo3tamad"] == true){
					$('#Ra2ssLmal').css('display', 'block');
					$('#calculeRa2ssLmal').css('display', 'none');
					$('#raasLmal').val(data["rassLmalMo3tamad"]);
					if(data["victime"]["proffession"] == "وظيفة أخرى"){
						$('#jours3jz').css('display', 'block');
						$('#atarSayi2a').css('display', 'block');
						
						
					}
					if(data["victime"]["proffession"] =="موظف"){
						$('#atarSayi2a').css('display', 'block');
						
					}
					if(data["victime"]["proffession"] =="طالب بسلك 1 أو 2" ||data["victime"]["proffession"] =="طالب بسلك 3"||data["victime"]["proffession"] =="تلميذ بسلك الثانوي أو بالتأهيل المهني"){
						$('#in9ita3_dirassa').css('display', 'block');
						
					}
					
				}
			}
			else{
				$('#Ra2ssLmal').css('display', 'block');
				$('#calculeRa2ssLmal').css('display', 'none');
				$('#raasLmal').val(data["rassLmalMo3tamad"]);
				$('#porcentage_3ajz').val(data["ghibra"]["pourcentageDeficit"]);
				$('#ttachwih option:selected').text(data["ghibra"]["tachwih"]);
				$('#aalam_jismanya option:selected').text(data["ghibra"]["alamJismani"]);
				$('#masrif_tibia').val(data["ghibra"]["compensationMedical"]);
				$('#masaolia_motaham').val(data["ghibra"]["pourcentageAccuse"]);
				if(data["ghibra"]["istiana"]=="true"){
					 document.getElementById("isti3ana").checked = true;
				}
				
				if(data["victime"]["proffession"] == "وظيفة أخرى"){
					$('#jours3jz').css('display', 'block');
					$('#atarSayi2a').css('display', 'block');
					$('#jour_3ajz').val(data["ghibra"]["nombreJourPerde"]);
					if(data["ghibra"]["atarSayia"] == "نعم"){
						$('input[name="atar"][id="atar_isoui"]').attr('checked', true);
					}
					if(data["ghibra"]["atarSayia"] == "لا"){
						$('input[name="atar"][id="atar_isnon"]').attr('checked', true);
					}
					
				}
				if(data["victime"]["proffession"] =="موظف"){
					$('#atarSayi2a').css('display', 'block');
					if(data["ghibra"]["atarSayia"] == "نعم"){
						$('input[name="atar"][id="atar_isoui"]').attr('checked', true);
					}
					if(data["ghibra"]["atarSayia"] == "لا"){
						$('input[name="atar"][id="atar_isnon"]').attr('checked', true);
					}
					
				}
				if(data["victime"]["proffession"] =="طالب بسلك 1 أو 2" ||data["victime"]["proffession"] =="طالب بسلك 3"||data["victime"]["proffession"] =="تلميذ بسلك الثانوي أو بالتأهيل المهني"){
					$('#in9ita3_dirassa').css('display', 'block');
					
					if(data["ghibra"]["in9ita3"] == "انقطاع شبه نهائي"){
						$('input[name="in9ita3"][id="in9ita3_0"]').attr('checked', true);
					}
					if(data["ghibra"]["in9ita3"] == "انقطاع نهائي"){
						$('input[name="in9ita3"][id="in9ita3_1"]').attr('checked', true);
					}
					
				}
			}	
		}
		,
		error: function (e){

		}
	});
}




//methode decalcule 
function afficheMethode1() {
	if (document.getElementById('check_methode1').checked == true) {
			var nameMethode = "methode1";
			var html = "<option disabled selected>----اختر رأس المال المعتمد----</option>";
			//var html=""
			  $.ajax({
						type: "GET",
						url: "/Client/Taawidat/calculeRa2sslmalLmo3tamad/"+nameMethode,
						processData: false,
						contentType: false,
						cache: false,
						timeout: 600000,
						success: function (data){
							html = html +'<option value="' + data["rassLmalMo3tamad"][0] +'">' + data["rassLmalMo3tamad"][0] +
						          "</option>" +
						          '<option value="' +data["rassLmalMo3tamad"][1] +'">' +data["rassLmalMo3tamad"][1] +"</option>";
							
                             /*html = html +"<span>"+data["rassLmalMo3tamad"][0]+"</span><br>"+
                            			 '<input type="radio" class="form" name="rasMalMo3" id="rasMalMo3_1" value="' + data["rassLmalMo3tamad"][0] +'">'+
                                       	"<br><span>"+data["rassLmalMo3tamad"][1]+"</span>"+
                                        '<input type="radio" class="form" name="rasMalMo3" id="rasMalMo3_2" value="' + data["rassLmalMo3tamad"][1] +'">';*/
                                         
							$("#Ra2ssLmal_Methode_1").empty();
							$("#Ra2ssLmal_Methode_1").append(html);
							
						}
						,
						error: function (e){
				
						}
					});
		document.getElementById('field_methode1').style.display = 'block';
		document.getElementById('check_methode2').style.display = 'none';
		document.getElementById('check_methode3').style.display = 'none';
		//check_methode1
		
		
	} else {
		document.getElementById('field_methode1').style.display = 'none';
		document.getElementById('check_methode2').style.display = 'block';
		document.getElementById('check_methode3').style.display = 'block';
	}
}
function afficheMethode2() {
	if (document.getElementById('check_methode2').checked == true) {
			var nameMethode = "methode2";
			var html = "";
			  $.ajax({
						type: "GET",
						url: "/Client/Taawidat/calculeRa2sslmalLmo3tamad/"+nameMethode,
						processData: false,
						contentType: false,
						cache: false,
						timeout: 600000,
						success: function (data){
							var line1 ="الرأس المال المعتمد الموافق لأجرة  "+data["rassLmalMo3tamaInf"]+" هو "+data["salaireInf"]; 
							var line2 = "الرأس المال المعتمد الموافق لأجرة  "+data["rassLmalMo3tamaSup"]+" هو "+data["salaireSup"]; 
							var moy = (data["salaireInf"]+ data["salaireSup"])/2;
							var line3="القيمة الوسطية :"+moy;
							var line4 = "";
							var line5 = "";
							var rassl_m2=0;
							if(data["salireAnne"] < moy){
								line4 =line4+ data["salireAnne"] +"<"+ moy;
								line5 = "الرأسمال المعتمد :"+data["rassLmalMo3tamaInf"];
								rassl_m2 =data["rassLmalMo3tamaInf"];
								globaltaawidat_m1 = "0";
								globaltaawidat_m2 = data["rassLmalMo3tamaInf"];
								globaltaawidat_m3 =0;
							}
							if(data["salireAnne"] > moy){
								line4 =line4+ data["salireAnne"] +">"+ moy;
								line5 = "الرأسمال المعتمد :"+data["rassLmalMo3tamaSup"];
								rassl_m2 =data["rassLmalMo3tamaSup"];
								globaltaawidat_m1 = "0";
								globaltaawidat_m2 = data["rassLmalMo3tamaSup"];
								globaltaawidat_m3 =0;
							}
							html = html + "<label>"+line1+"</label><br><label>"+line2+
							 				"</label><br><label>"+ line3+"</label><br><label>"+
							 				 line4+'</label><br><label id="rass_m2" value ="'+rassl_m2+'">'+ line5+"</label><br>";
							
							$("#resulta_meth_2").empty();
							$("#resulta_meth_2").append(html);
						}
						,
						error: function (e){
				
						}
					});
		document.getElementById('field_methode2').style.display = 'block';
		document.getElementById('check_methode1').style.display = 'none';
		document.getElementById('check_methode3').style.display = 'none';
		
	} else {
		document.getElementById('field_methode2').style.display = 'none';
		document.getElementById('check_methode1').style.display = 'block';
		document.getElementById('check_methode3').style.display = 'block';
	}
}
function afficheMethode3() {
		if (document.getElementById('check_methode3').checked == true) {
				var nameMethode = "methode3";
			var html = "";
			  $.ajax({
						type: "GET",
						url: "/Client/Taawidat/calculeRa2sslmalLmo3tamad/"+nameMethode,
						processData: false,
						contentType: false,
						cache: false,
						timeout: 600000,
						success: function (data){
							var line0 =data["salaireSup"]+" الأجرة السنوية  بين "+data["salaireInf"]  +" و ";
							var line1 ="الرأس المال المعتمد الموافق لأجرة  "+data["rassLmalMo3tamaInf"]+" هو "+data["salaireInf"]; 
							var line2 = "الرأس المال المعتمد الموافق لأجرة  "+data["rassLmalMo3tamaSup"]+" هو "+data["salaireSup"]; 
					
							var line4 = "النسبة المضافة الى الرأس المال المعتمد لأصغر أجر هي :12.29 ";
							var	line5 = "الرأسمال المعتمد :"+data["rassLmalMo3tamad"];
							globaltaawidat_m1="0";
							globaltaawidat_m2 =0;
							globaltaawidat_m3 = data["rassLmalMo3tamad"];
							html = html + "<label>"+line0+"</label><br><label>"+line1+
							 				"</label><br><label>"+ line2+"</label><br><label>"+
							 				 line4+'</label><br><label id="rass_m3" value ="'+data["rassLmalMo3tamad"]+'">'+ line5+"</label><br>";
							
							$("#resulta_meth_3").empty();
							$("#resulta_meth_3").append(html);
						}
						,
						error: function (e){
				
						}
					});
		document.getElementById('field_methode3').style.display = 'block';
		document.getElementById('check_methode1').style.display = 'none';
		document.getElementById('check_methode2').style.display = 'none';
	} else {
		document.getElementById('field_methode3').style.display = 'none';
		document.getElementById('check_methode1').style.display = 'block';
		document.getElementById('check_methode2').style.display = 'block';
	}
}

function value_meth_vive_1(){
	taawidat_m1 =$("#Ra2ssLmal_Methode_1  option:selected").val()
	globaltaawidat_m1 = taawidat_m1;
	globaltaawidat_m2 = 0;
	globaltaawidat_m3 = 0;
}

function calculeTotaleDeTa3widate(event){
  event.preventDefault();
  	taawidat_m1 = undefined;
  var formData = new FormData();
	var taawidat_Cal = $('#raasLmal').val();
	console.log("globaltaawidat_m1 : "+globaltaawidat_m1);
	console.log("globaltaawidat_m2 : "+globaltaawidat_m2);
	console.log("globaltaawidat_m3 : "+globaltaawidat_m3);
	$('#enregistre').css('display', 'block');
	$('#imprimer').css('display', 'none');
	globalNissbatL3ajz=$("#porcentage_3ajz").val();
	var jours3azj = $("#jour_3ajz").val();
	var isti3ana =document.getElementById('isti3ana').checked;
	var ttachwih= $("#ttachwih option:selected").text();
	var adrar_khasa=$("#adrar_khasa option:selected").text();
	var aalam_jismanya = $("#aalam_jismanya option:selected").text();
	var massrif_tbib = $("#masrif_tibia").val();
	var masaolia_motaham = $("#masaolia_motaham").val();
	formData.append("taawidat_Cal",taawidat_Cal);
	formData.append("globalNissbatL3ajz",globalNissbatL3ajz);
	formData.append("globalis2aatarSayi2a",globalis2aatarSayi2a);
	formData.append("globaltaawidat_m1",globaltaawidat_m1);
	formData.append("globaltaawidat_m2",globaltaawidat_m2);
	formData.append("globaltaawidat_m3",globaltaawidat_m3);
	formData.append("jours3azj",jours3azj);
	formData.append("isti3ana",isti3ana);
	formData.append("ttachwih",ttachwih);
	formData.append("adrar_khasa",adrar_khasa);
	formData.append("aalam_jismanya",aalam_jismanya);
	formData.append("massrif_tbib",massrif_tbib);
	formData.append("masaolia_motaham",masaolia_motaham);
	formData.append("globalIn9ita3",globalIn9ita3);
	fire_ajax_calculeTotaleDeTa3widate(formData);

}
function fire_ajax_calculeTotaleDeTa3widate(formData) {
	var html = "";
  $.ajax({
    type: "POST",
    url: "/Client/Taawidat/calculeTotaleDeTa3widate",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
		var line1 ="عن العجز الكلي الؤقت : ";
		var line2 ="عن العجز البدني الدائم : ";
		var line3 ="عن الاستعانة بشخص اخر :	";
		var line4 ="عن النقص المهني :	";
		var line5 ="عن الآلم الجسماني :	";
		var line6 ="عن تشويه الخلقة :	";
		var line7 ="عن المصاريف الطبية :	";
		var line8 ="التعويض الاجمالي :	";
		var line9 ="الملغ المطلوب :	";
		
		$("#ta3widateL2ijamlya").css('display', 'block');
		/*html = html+ "<label>"+line1+"</label><br><label>"+line2+
					"</label><br><label>"+ line3+"</label><br><label>"+
					line4+"</label><br><label>"+ line5+"</label><br><label>"+
					line6+"</label><br><label>"+ line7+"</label><br><br><br><h3>"+
					line8+"</h3><br><h3>"+ line9+"</h3><br>"+
					"<div class='float-left'> <div class='row'>"+
					"<div class='col-md-2'> <button type='button' class='btn btn-primary' onClick='addGhibra(event)' >حفظ</button> </div>"+
					" <div class='col-md-2'><button type='button' class='btn btn-primary' >طبع</button> </div>"+
					" <div class='col-md-2'><button type='button' class='btn btn-primary' >الرجوع</button> </div>"+
					"</div></div>"*/
			html = html+'<tr><td>' + line1 + '</td><td>' + data["AJZkOLI"] + '</td ></tr>'+
						'<tr><td>' + line2 + '</td><td>' + data["AJZBADANI"] + '</td ></tr>'+
						'<tr><td>' + line3 + '</td><td>' + data["ISTA3ABICHAKHSE"] + '</td ></tr>'+
						'<tr><td>' + line4 + '</td><td>' + data["NA9SSMIHANI"] + '</td ></tr>'+
						'<tr><td>' + line5 + '</td><td>' + data["ALAMJISMANI"] + '</td ></tr>'+
						'<tr><td>' + line6 + '</td><td>' + data["TAXWIHKHIL9A"] + '</td ></tr>'+
						'<tr><td>' + line7 + '</td><td>' + data["MASSRIFTIBYA"] + '</td ></tr>'+
						'<tr><td><h3>' + line8 + '</h3></td><td><h3>' + data["TA3WIDIJMALI"] + '</h3></td ></tr>'+
						'<tr><td><h3>' + line9 + '</h3></td><td><h3>' + data["MABLAGHMATLOB"] + '</h3></td ></tr>';

		$("#ta3widateL2ijamlyaBody").empty();
		$("#ta3widateL2ijamlyaBody").append(html);
		
      /*if (data["error"] == "success") {
        var success = data["message"];
        console.log("success :"+success);
      } else {
        var error = data["message"];
        console.log("error :"+error);
      }*/
    },
    error: function () {},
  });
}
function addGhibra(event){
		event.preventDefault();
	  $.ajax({
		type: "GET",
		url: "/Client/Taawidat/addGhibra",
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
		success: function (data){
			if (data["error"] == "success") {
				$('#enregistre').css('display', 'none');
				$('#imprimer').css('display', 'block');
				$('#victime_vive_message').css('display', 'block');
				var html = '<br><div class="alert alert-success alert-dismissable"><button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button><span >' + data["message"] + '</span></div>';
				$("#victime_vive_message").empty();
				$("#victime_vive_message").append(html);
		        var success = data["message"];
		        console.log("success :"+success);
		     } else {
				$('#victime_vive_message').css('display', 'block');

				var html = '<br><div class="alert alert-danger alert-dismissable"><button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button><span >' + data["message"] + '</span></div>';
				$("#victime_vive_message").empty();
				$("#victime_vive_message").append(html);
		        var error = data["message"];
		        console.log("error :"+error);
		     }
		}
		,
		error: function (e){

		}
	});
}
function ghibraVisualiser(){
		var line1 ="عن العجز الكلي الؤقت : ";
		var line2 ="عن العجز البدني الدائم : ";
		var line3 ="عن الاستعانة بشخص اخر :	";
		var line4 ="عن النقص المهني :	";
		var line5 ="عن الآلم الجسماني :	";
		var line6 ="عن تشويه الخلقة :	";
		var line7 ="عن المصاريف الطبية :	";
		var line8 ="التعويض الاجمالي :	";
		var line9 ="الملغ المطلوب :	";
	modal = "<div class='modal-dialog modal-lg'>"+
										"<div class='modal-content'>"+
											"<div class='modal-header'>"+
												"<button type='button' class='close' data-dismiss='modal'>"+
													"<span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span>"+
												"</button>"+
												"<h4 class='modal-title'>التعويضات</h4>"+
											"</div>"+
											"<div class='modal-body' id='updateVictimeModalBody'>"+
												"<div class='field_form' id='field_victime' style='display: block'>"+
													"<label>"+line1+"</label><br><label>"+line2+
													"</label><br><label>"+ line3+"</label><br><label>"+
													line4+"</label><br><label>"+ line5+"</label><br><label>"+
													line6+"</label><br><label>"+ line7+"</label><br><br><br><h3>"+
													line8+"</h3><br><h3>"+ line9+"</h3><br>"+
													"<div class='float-left'> <div class='row'>"+
													" <div class='col-md-2'><button type='button' class='btn btn-primary' >طبع</button> </div>"+
													"</div></div>"+
														
												"</div>"+
												"<div id='tabel_resulte'></div>"+
											"</div>"+
											"<div class='modal-footer' id='updateVictimeModalBtn'>"+
												
											"</div>"+
											"<div id='validationmodal'></div>"+
										"</div>"+
								"</div>"
				
	$("#ghibra").empty();
	$("#ghibra").append(modal);
}

//###################################################### PARTIE DE MORT #################################
function mort_icvtime(){
	var nDossier = $("#numero_dossier option:selected").val();
	var idVictime = $("#liste_victimes_info").val();
	console.log("id : "+idVictime);
	globalID_VIT = idVictime;
	location.href = "/Client/TaawidatMort/"+idVictime+"/"+nDossier;
}
function TreterMort(event){
	$('#taawidatClcule').css('display', 'block');
	calcule_ta3widate_Victime_mort(event);
}
function value_meth_mort_1(){
	taawidat_m1 =$("#Ra2ssLmal_Methode_1  option:selected").val()
	globaltaawidat_m1 = taawidat_m1;
	globaltaawidat_m2 = 0;
	globaltaawidat_m3 = 0;
}
function calculeTotaleDeTa3widateMort(event){
  event.preventDefault();
  var formData = new FormData();
	var taawidat_Cal = $('#raasLmal').val();
	console.log("globaltaawidat_m1 : "+globaltaawidat_m1);
	console.log("globaltaawidat_m2 : "+globaltaawidat_m2);
	console.log("globaltaawidat_m3 : "+globaltaawidat_m3);
	$('#enregistre').css('display', 'block');
	$('#imprimer').css('display', 'none');
	var masaolia_motaham = $("#masaolia_motaham").val();
	formData.append("taawidat_Cal",taawidat_Cal);
	formData.append("globaltaawidat_m1",globaltaawidat_m1);
	formData.append("globaltaawidat_m2",globaltaawidat_m2);
	formData.append("globaltaawidat_m3",globaltaawidat_m3);
	formData.append("masaolia_motaham",masaolia_motaham);
	fire_ajax_calculeTotaleDeTa3widateMort(formData);

}

function fire_ajax_calculeTotaleDeTa3widateMort(formData) {
	var html = "";
  $.ajax({
    type: "POST",
    url: "/Client/TaawidatMort/calculeTotaleDeTa3widateMot",
    processData: false,
    contentType: false,
    cache: false,
    data: formData,
    timeout: 600000,
    success: function (data) {
	
	for(var i=0;i<data.length;i++){
		console.log(data[i]);
		html = html+'<tr><td>' + data[i]["prenom"] + '</td><td>' + data[i]["nom"] + '</td ><td>'+
				 data[i]["relation"] + '</td><td>' + data[i]["TA3WID_MA3NAWI"] + '</td ><td>' + data[i]["TA3WID_DAWI"] + '</td ></tr>';
	}
	$("#ta3widateL2ijamlya").css('display', 'block')
	$("#ta3widateL2ijamlyaBody").empty();
	$("#ta3widateL2ijamlyaBody").append(html);

		
    },
    error: function () {},
  });
}
function addMort(event){
		event.preventDefault();
	  $.ajax({
		type: "GET",
		url: "/Client/TaawidatMort/decede",
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
		success: function (data){
			if (data["error"] == "success") {
				$('#enregistre').css('display', 'none');
				$('#imprimer').css('display', 'block');
				$('#victime_mort_message').css('display', 'block');
				var html = '<br><div class="alert alert-success alert-dismissable"><button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button><span >' + data["message"] + '</span></div>';
				$("#victime_mort_message").empty();
				$("#victime_mort_message").append(html);
		        var success = data["message"];
		        console.log("success :"+success);
		     } else {
				$('#victime_mort_message').css('display', 'block');

				var html = '<br><div class="alert alert-danger alert-dismissable"><button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button><span >' + data["message"] + '</span></div>';
				$("#victime_mort_message").empty();
				$("#victime_mort_message").append(html);
		        var error = data["message"];
		        console.log("error :"+error);
		     }
		}
		,
		error: function (e){

		}
	});
}
function calcule_ta3widate_Victime_mort(event){
	event.preventDefault();
	  $.ajax({
		type: "GET",
		url: "/Client/TaawidatMort/calculeVictimeMort",
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
		success: function (data){
			console.log(data["victime"]["nom"])
			$("#name_vic").text(data["victime"]["nom"]+" "+data["victime"]["prenom"]);
			$("#numero_dossier").text(data["numerDossier"]);
			$("#numero_dossier").val(data["numerDossier"]);
			if(data["isRassLmalMo3tamad"] == false){
					$('#Ra2ssLmal').css('display', 'none');
					$('#calculeRa2ssLmal').css('display', 'block');
				
				}
			else if(data["isRassLmalMo3tamad"] == true){
					$('#Ra2ssLmal').css('display', 'block');
					$('#calculeRa2ssLmal').css('display', 'none');
					$('#raasLmal').val(data["rassLmalMo3tamad"]);
				
			}
			
		}
		,
		error: function (e){

		}
	});
}
//methode decalcule 
function afficheMethodeMort1() {
	if (document.getElementById('check_methode1').checked == true) {
			var nameMethode = "methode1";
			var html = "<option disabled selected>----اختر رأس المال المعتمد----</option>";
			//var html=""
			  $.ajax({
						type: "GET",
						url: "/Client/TaawidatMort/calculeRa2sslmalLmo3tamad/"+nameMethode,
						processData: false,
						contentType: false,
						cache: false,
						timeout: 600000,
						success: function (data){
							html = html +'<option value="' + data["rassLmalMo3tamad"][0] +'">' + data["rassLmalMo3tamad"][0] +
						          "</option>" +
						          '<option value="' +data["rassLmalMo3tamad"][1] +'">' +data["rassLmalMo3tamad"][1] +"</option>";
							
                             /*html = html +"<span>"+data["rassLmalMo3tamad"][0]+"</span><br>"+
                            			 '<input type="radio" class="form" name="rasMalMo3" id="rasMalMo3_1" value="' + data["rassLmalMo3tamad"][0] +'">'+
                                       	"<br><span>"+data["rassLmalMo3tamad"][1]+"</span>"+
                                        '<input type="radio" class="form" name="rasMalMo3" id="rasMalMo3_2" value="' + data["rassLmalMo3tamad"][1] +'">';*/
                                         
							$("#Ra2ssLmal_Methode_1").empty();
							$("#Ra2ssLmal_Methode_1").append(html);
							
						}
						,
						error: function (e){
				
						}
					});
		document.getElementById('field_methode1').style.display = 'block';
		document.getElementById('check_methode2').style.display = 'none';
		document.getElementById('check_methode3').style.display = 'none';
		//check_methode1
		
		
	} else {
		document.getElementById('field_methode1').style.display = 'none';
		document.getElementById('check_methode2').style.display = 'block';
		document.getElementById('check_methode3').style.display = 'block';
	}
}
function afficheMethodeMort2() {
	if (document.getElementById('check_methode2').checked == true) {
			var nameMethode = "methode2";
			var html = "";
			  $.ajax({
						type: "GET",
						url: "/Client/TaawidatMort/calculeRa2sslmalLmo3tamad/"+nameMethode,
						processData: false,
						contentType: false,
						cache: false,
						timeout: 600000,
						success: function (data){
							var line1 ="الرأس المال المعتمد الموافق لأجرة  "+data["rassLmalMo3tamaInf"]+" هو "+data["salaireInf"]; 
							var line2 = "الرأس المال المعتمد الموافق لأجرة  "+data["rassLmalMo3tamaSup"]+" هو "+data["salaireSup"]; 
							var moy = (data["salaireInf"]+ data["salaireSup"])/2;
							var line3="القيمة الوسطية :"+moy;
							var line4 = "";
							var line5 = "";
							var rassl_m2=0;
							if(data["salireAnne"] < moy){
								line4 =line4+ data["salireAnne"] +"<"+ moy;
								line5 = "الرأسمال المعتمد :"+data["rassLmalMo3tamaInf"];
								rassl_m2 =data["rassLmalMo3tamaInf"];
								globaltaawidat_m1 = 0;
								globaltaawidat_m2 = data["rassLmalMo3tamaInf"];
								globaltaawidat_m3 =0;
							}
							if(data["salireAnne"] > moy){
								line4 =line4+ data["salireAnne"] +">"+ moy;
								line5 = "الرأسمال المعتمد :"+data["rassLmalMo3tamaSup"];
								rassl_m2 =data["rassLmalMo3tamaSup"];
								globaltaawidat_m1 = 0;
								globaltaawidat_m2 = data["rassLmalMo3tamaSup"];
								globaltaawidat_m3 =0;
							}
							html = html + "<label>"+line1+"</label><br><label>"+line2+
							 				"</label><br><label>"+ line3+"</label><br><label>"+
							 				 line4+'</label><br><label id="rass_m2" value ="'+rassl_m2+'">'+ line5+"</label><br>";
							
							$("#resulta_meth_2").empty();
							$("#resulta_meth_2").append(html);
						}
						,
						error: function (e){
				
						}
					});
		document.getElementById('field_methode2').style.display = 'block';
		document.getElementById('check_methode1').style.display = 'none';
		document.getElementById('check_methode3').style.display = 'none';
		
	} else {
		document.getElementById('field_methode2').style.display = 'none';
		document.getElementById('check_methode1').style.display = 'block';
		document.getElementById('check_methode3').style.display = 'block';
	}
}
function afficheMethodeMort3() {
		if (document.getElementById('check_methode3').checked == true) {
				var nameMethode = "methode3";
			var html = "";
			  $.ajax({
						type: "GET",
						url: "/Client/TaawidatMort/calculeRa2sslmalLmo3tamad/"+nameMethode,
						processData: false,
						contentType: false,
						cache: false,
						timeout: 600000,
						success: function (data){
							var line0 =data["salaireSup"]+" الأجرة السنوية  بين "+data["salaireInf"]  +" و ";
							var line1 ="الرأس المال المعتمد الموافق لأجرة  "+data["rassLmalMo3tamaInf"]+" هو "+data["salaireInf"]; 
							var line2 = "الرأس المال المعتمد الموافق لأجرة  "+data["rassLmalMo3tamaSup"]+" هو "+data["salaireSup"]; 
					
							var line4 = "النسبة المضافة الى الرأس المال المعتمد لأصغر أجر هي :12.29 ";
							var	line5 = "الرأسمال المعتمد :"+data["rassLmalMo3tamad"];
							globaltaawidat_m1=0;
							globaltaawidat_m2 =0;
							globaltaawidat_m3 = data["rassLmalMo3tamad"];
							html = html + "<label>"+line0+"</label><br><label>"+line1+
							 				"</label><br><label>"+ line2+"</label><br><label>"+
							 				 line4+'</label><br><label id="rass_m3" value ="'+data["rassLmalMo3tamad"]+'">'+ line5+"</label><br>";
							
							$("#resulta_meth_3").empty();
							$("#resulta_meth_3").append(html);
						}
						,
						error: function (e){
				
						}
					});
		document.getElementById('field_methode3').style.display = 'block';
		document.getElementById('check_methode1').style.display = 'none';
		document.getElementById('check_methode2').style.display = 'none';
	} else {
		document.getElementById('field_methode3').style.display = 'none';
		document.getElementById('check_methode1').style.display = 'block';
		document.getElementById('check_methode2').style.display = 'block';
	}
}















/*<div class="modal inmodal fade" id="ghibra1"
															tabindex="-1" role="dialog" aria-hidden="true">
															<div class="modal-dialog modal-lg">
																<div class="modal-content">
																	<div class="modal-header">
																		
																	</div>
																	<div class="modal-body" id="updateVictimeModalBody">
												
																	</div>
																	
																</div>
															</div>
														</div>
function loadVictimeTaawidateInfos(event){
	event.preventDefault();
   var idVictime = $("#liste_victimes_info").val();
   console.log("id victime : "+idVictime);
   var wadifa = "";
  $.ajax({
		type: "GET",
		url: "consulterDossier/Victime/"+idVictime,
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
		success: function (data){
			 wadifa = data["victime"]["proffession"];
			console.log("alwadifa **********************: "+wadifa);
			
			
			$('#field_victime_info').css('display', 'block');
		
			$("#cni_victime_info").val(data["victime"]["cin"]);
			$("#nom_victime_info").val(data["victime"]["nom"]);
			$("#prenom_victime_info").val(data["victime"]["prenom"]);
			$("#etat_social_victime_info").val(data["victime"]["situationFamiliale"]);
			$("#nombre_enfants_victime_info").val(data["victime"]["nombreEnfant"]);
			$("#salaire_annuel_victime_info").val(data["victime"]["salaire"]);
			$("#date_naissance_victime_info").val(data["dateNaissance"]);
			$("#job_victime_info").val(data["victime"]["proffession"]);
			$("#lieu_naissance_victime_info").val(data["victime"]["lieuNaissance"]);
			$("#sexe_victime_info").val(data["victime"]["sexe"]);
			$("#pere_victime_info").val(data["victime"]["prenomPere"]);
			$("#mere_victime_info").val(data["victime"]["prenomMere"]);
			$("#addresse_victime_info").val(data["victime"]["addresse"]);
			$("#etat_victime_info").val(data["victime"]["etat"]);
			

			
		},
		error: function (e){

		}
	});
}

function mort(){
	modal = " <div class='modal inmodal fade' id='victime_mortModal'>"+
								"<div class='modal-dialog modal-lg'>"+
										"<div class='modal-content'>"+
											"<div class='modal-header'>"+
												"<button type='button' class='close' data-dismiss='modal'>"+
													"<span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span>"+
												"</button>"+
												"<h4 class='modal-title'>التعويضات</h4>"+
											"</div>"+
											"<div class='modal-body' id='updateVictimeModalBody'>"+
												"<div class='field_form' id='field_victime' style='display: block'>"+
													"<br>"+
														"<div class='row-6' >"+
															"<label>نسبة مسؤولية المتهم:</label><input type='text' placeholder='' class='form-control' name='prenom_victime_up' id='prenom_victime_up'>"+
														"</div> <br>"+
														
														"<a style='color: white' type='button' class='btn btn-primary' data-toggle='modal' data-target='#validationModal' >التعويضات المستحقة</a>"+
												"</div>"+
												"<div id='tabel_resulte'></div>"+
											"</div>"+
											"<div class='modal-footer' id='updateVictimeModalBtn'>"+
												
											"</div>"+
											"<div id='validationmodal'></div>"+
										"</div>"+
								"</div>"+
				"</div>"
				
	$("#mort").empty();
	$("#mort").append(modal);
}
function modalValidation(event){
			console.log("validation");
			modalvalide = "<div class='modal inmodal fade' id='validationModal'>"+
										"<div class='modal-dialog modal-sm'>"+
											"<div class='modal-content'>"+
												"<div class='modal-header'>"+
													"<button type='button' class='close' data-dismiss='modal'>"+
														"<span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span>"+
													"</button>"+
												"</div>"+
											"<div class='modal-body' id='dossierModalBody'>"+
											"<p>لتعويض عن الضرر المعنوي يخضع لنسبة المسؤولية حسب ما دأب عليه المجلس الأعلى في عدة قراراته منها قراره </p></div>"+
											"<div class='modal-footer' id='dossierModalBtn'>"+
												"<button type='button' class='btn btn-white' data-toggle='modal' data-target='#victime_resultModal' data-dismiss='modal' onClick ='Result();'>نعم</button>"+
												"<button type='button' class='btn btn-white' data-dismiss='modal'>لا</button>"+
											"</div></div></div></div>";
	$("#validationmodal").empty();
	$("#validationmodal").append(modalvalide);
}
function Result(){
	modal = " <div class='modal inmodal fade' id='victime_resultModal'>"+
								"<div class='modal-dialog modal-lg'>"+
										"<div class='modal-content'>"+
											"<div class='modal-header'>"+
												"<button type='button' class='close' data-dismiss='modal'>"+
													"<span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span>"+
												"</button>"+
												"<h4 class='modal-title'>التعويضات</h4>"+
											"</div>"+
											"<div class='modal-body' id='updateVictimeModalBody'>"+
												"<div class='field_form' id='field_victime' style='display: block'>"+
													"<br>"+
														
														"<a style='color: white' type='button' class='btn btn-primary' data-toggle='modal' data-dismiss='modal' data-target='#victime_mortModal' onClick='mort(event);'>الرجوع</a>"+
												"</div>"+
												
											"</div>"+
											"<div class='modal-footer' id='updateVictimeModalBtn'>"+
												
											"</div>"+
										"</div>"+
								"</div>"+
				"</div>"
				
	$("#mort").empty();
	$("#mort").append(modal);
}
*/
