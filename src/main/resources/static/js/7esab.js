//bnt
function handleSelectChange5() {
	const selectedValue = document.getElementById("bnt").value;



	// Check the selected option and show/hide the modal accordingly
	if (selectedValue != "non") {


		if (document.getElementById("okht").value != "non" && document.getElementById("akh1thh").style.visibility != "hidden") {

			document.getElementById("okht1").value = "non";
			document.getElementById("okht1").selectedIndex = 0;
			document.getElementById("okht1th").style.visibility = "hidden";
			document.getElementById("okht1thh").style.visibility = "hidden";
			document.getElementById("akh1").value = "non";
			document.getElementById("akh1").selectedIndex = 0;
			document.getElementById("akh1th").style.visibility = "hidden";
			document.getElementById("akh1thh").style.visibility = "hidden";

			document.getElementById("ibnakh1").selectedIndex = 0;
			document.getElementById("ibnakh1").value = "non";

			document.getElementById("3am").value = "non";
			document.getElementById("3am").selectedIndex = 0;

			document.getElementById("3am1").value = "non";
			document.getElementById("3am1").selectedIndex = 0;

			document.getElementById("ibn3am").value = "non";
			document.getElementById("ibn3am").selectedIndex = 0;

			document.getElementById("ibn3am1").value = "non";
			document.getElementById("ibn3am1").selectedIndex = 0;

			document.getElementById("ibnakh").value = "non";
			document.getElementById("ibnakh").selectedIndex = 0;

			document.getElementById("ibnakhth").style.visibility = "hidden";
			document.getElementById("ibnakhthh").style.visibility = "hidden";


			document.getElementById("ibnakh1th").style.visibility = "hidden";
			document.getElementById("ibnakh1thh").style.visibility = "hidden";

			document.getElementById("3amth").style.visibility = "hidden";
			document.getElementById("3amthh").style.visibility = "hidden";

			document.getElementById("3am1th").style.visibility = "hidden";
			document.getElementById("3am1thh").style.visibility = "hidden";


			document.getElementById("ibn3amth").style.visibility = "hidden";
			document.getElementById("ibn3amthh").style.visibility = "hidden";

			document.getElementById("ibn3am1th").style.visibility = "hidden";
			document.getElementById("ibn3am1thh").style.visibility = "hidden";


		}


		if (document.getElementById("okht1").value != "non" && document.getElementById("ibnakhthh").style.visibility != "hidden") {
			document.getElementById("ibnakh1").selectedIndex = 0;
			document.getElementById("ibnakh1").value = "non";

			document.getElementById("3am").value = "non";
			document.getElementById("3am").selectedIndex = 0;

			document.getElementById("3am1").value = "non";
			document.getElementById("3am1").selectedIndex = 0;

			document.getElementById("ibn3am").value = "non";
			document.getElementById("ibn3am").selectedIndex = 0;

			document.getElementById("ibn3am1").value = "non";
			document.getElementById("ibn3am1").selectedIndex = 0;

			document.getElementById("ibnakh").value = "non";
			document.getElementById("ibnakh").selectedIndex = 0;

			document.getElementById("ibnakhth").style.visibility = "hidden";
			document.getElementById("ibnakhthh").style.visibility = "hidden";


			document.getElementById("ibnakh1th").style.visibility = "hidden";
			document.getElementById("ibnakh1thh").style.visibility = "hidden";

			document.getElementById("3amth").style.visibility = "hidden";
			document.getElementById("3amthh").style.visibility = "hidden";

			document.getElementById("3am1th").style.visibility = "hidden";
			document.getElementById("3am1thh").style.visibility = "hidden";


			document.getElementById("ibn3amth").style.visibility = "hidden";
			document.getElementById("ibn3amthh").style.visibility = "hidden";

			document.getElementById("ibn3am1th").style.visibility = "hidden";
			document.getElementById("ibn3am1thh").style.visibility = "hidden";
		}






















		if (selectedValue == 1) {
			document.getElementById("akh2").value = "non";
			document.getElementById("akh2").selectedIndex = 0;

			document.getElementById("okht2").value = "non";
			document.getElementById("okht2").selectedIndex = 0;

			document.getElementById("okht2th").style.visibility = "hidden";
			document.getElementById("okht2thh").style.visibility = "hidden";
			document.getElementById("akh2th").style.visibility = "hidden";
			document.getElementById("akh2thh").style.visibility = "hidden";

			if (document.getElementById("ibn").value == "non") {
				document.getElementById("bnt1thh").style.visibility = "visible";
				document.getElementById("bnt1th").style.visibility = "visible";
			}

			$('#myModal6').modal('show');
		}

		else {
			document.getElementById("akh2").value = "non";
			document.getElementById("akh2").selectedIndex = 0;

			document.getElementById("okht2").value = "non";
			document.getElementById("okht2").selectedIndex = 0;

			document.getElementById("okht2th").style.visibility = "hidden";
			document.getElementById("okht2thh").style.visibility = "hidden";
			document.getElementById("akh2th").style.visibility = "hidden";
			document.getElementById("akh2thh").style.visibility = "hidden";
			if (document.getElementById("ibn1").value != "non") {

				$('#myModal6').modal('show');
			}
			else {

				document.getElementById("bnt1").value = "non";
				document.getElementById("bnt1").selectedIndex = 0;
				document.getElementById("bnt1thh").style.visibility = "hidden";
				document.getElementById("bnt1th").style.visibility = "hidden";
				$('#myModal5').modal('show');
			}
		}


	} else {
		if (document.getElementById("bnt1").value == "non" && document.getElementById("ibn").value == "non" && document.getElementById("ibn1").value == "non" && document.getElementById("ab").value == "non" && document.getElementById("jad").value == "non") {
			if (document.getElementById("akh").value == "non" && document.getElementById("akh1").value == "non") {
				if (document.getElementById("okht").value != "non") {
					document.getElementById("okht1thh").style.visibility = "visible";
					document.getElementById("okht1th").style.visibility = "visible";
				}
				document.getElementById("akh1thh").style.visibility = "visible";
				document.getElementById("akh1th").style.visibility = "visible";
				document.getElementById("ibnakh1th").style.visibility = "visible";
				document.getElementById("ibnakh1thh").style.visibility = "visible";

				document.getElementById("ibnakhth").style.visibility = "visible";
				document.getElementById("ibnakhthh").style.visibility = "visible";

				document.getElementById("3amth").style.visibility = "visible";
				document.getElementById("3amthh").style.visibility = "visible";

				document.getElementById("3am1th").style.visibility = "visible";
				document.getElementById("3am1thh").style.visibility = "visible";


				document.getElementById("ibn3amth").style.visibility = "visible";
				document.getElementById("ibn3amthh").style.visibility = "visible";

				document.getElementById("ibn3am1th").style.visibility = "visible";
				document.getElementById("ibn3am1thh").style.visibility = "visible";


				if (document.getElementById("okht").value > 1 && document.getElementById("akh1").value == "non") {
					document.getElementById("okht1thh").style.visibility = "hidden";
					document.getElementById("okht1th").style.visibility = "hidden";
				}

			}


			document.getElementById("akh2thh").style.visibility = "visible";
			document.getElementById("akh2th").style.visibility = "visible";
			document.getElementById("okht2thh").style.visibility = "visible";
			document.getElementById("okht2th").style.visibility = "visible";


		}
		if (document.getElementById("ibn").value == "non") {
			document.getElementById("bnt1thh").style.visibility = "visible";
			document.getElementById("bnt1th").style.visibility = "visible";
		}

		$('#myModal5').modal('hide');
		$('#myModal6').modal('hide');

	}
}



//bntibn



function handleSelectChange6() {



	// Check the selected option and show/hide the modal accordingly
	if (document.getElementById("bnt1").value != "non") {


		document.getElementById("akh2").value = "non";
		document.getElementById("akh2").selectedIndex = 0;

		document.getElementById("okht2").value = "non";
		document.getElementById("okht2").selectedIndex = 0;
		document.getElementById("okht2th").style.visibility = "hidden";
		document.getElementById("okht2thh").style.visibility = "hidden";
		document.getElementById("akh2th").style.visibility = "hidden";
		document.getElementById("akh2thh").style.visibility = "hidden";

		$('#myModal6').modal('show');

		if (document.getElementById("okht").value != "non" && document.getElementById("akh1th").style.visibility == "visible") {

			document.getElementById("okht1").value = "non";
			document.getElementById("okht1").selectedIndex = 0;

			document.getElementById("okht1th").style.visibility = "hidden";
			document.getElementById("okht1thh").style.visibility = "hidden";

			document.getElementById("akh1").value = "non";
			document.getElementById("akh1").selectedIndex = 0;

			document.getElementById("akh1th").style.visibility = "hidden";
			document.getElementById("akh1thh").style.visibility = "hidden";

			document.getElementById("ibnakh1").selectedIndex = 0;
			document.getElementById("ibnakh1").value = "non";

			document.getElementById("3am").value = "non";
			document.getElementById("3am").selectedIndex = 0;

			document.getElementById("3am1").value = "non";
			document.getElementById("3am1").selectedIndex = 0;

			document.getElementById("ibn3am").value = "non";
			document.getElementById("ibn3am").selectedIndex = 0;

			document.getElementById("ibn3am1").value = "non";
			document.getElementById("ibn3am1").selectedIndex = 0;

			document.getElementById("ibnakh").value = "non";
			document.getElementById("ibnakh").selectedIndex = 0;

			document.getElementById("ibnakhth").style.visibility = "hidden";
			document.getElementById("ibnakhthh").style.visibility = "hidden";


			document.getElementById("ibnakh1th").style.visibility = "hidden";
			document.getElementById("ibnakh1thh").style.visibility = "hidden";

			document.getElementById("3amth").style.visibility = "hidden";
			document.getElementById("3amthh").style.visibility = "hidden";

			document.getElementById("3am1th").style.visibility = "hidden";
			document.getElementById("3am1thh").style.visibility = "hidden";


			document.getElementById("ibn3amth").style.visibility = "hidden";
			document.getElementById("ibn3amthh").style.visibility = "hidden";

			document.getElementById("ibn3am1th").style.visibility = "hidden";
			document.getElementById("ibn3am1thh").style.visibility = "hidden";
		}


		if (document.getElementById("okht1").value != "non" && document.getElementById("ibnakhthh").style.visibility != "hidden") {
			document.getElementById("ibnakh1").selectedIndex = 0;
			document.getElementById("ibnakh1").value = "non";

			document.getElementById("3am").value = "non";
			document.getElementById("3am").selectedIndex = 0;

			document.getElementById("3am1").value = "non";
			document.getElementById("3am1").selectedIndex = 0;

			document.getElementById("ibn3am").value = "non";
			document.getElementById("ibn3am").selectedIndex = 0;

			document.getElementById("ibn3am1").value = "non";
			document.getElementById("ibn3am1").selectedIndex = 0;

			document.getElementById("ibnakh").value = "non";
			document.getElementById("ibnakh").selectedIndex = 0;

			document.getElementById("ibnakhth").style.visibility = "hidden";
			document.getElementById("ibnakhthh").style.visibility = "hidden";


			document.getElementById("ibnakh1th").style.visibility = "hidden";
			document.getElementById("ibnakh1thh").style.visibility = "hidden";

			document.getElementById("3amth").style.visibility = "hidden";
			document.getElementById("3amthh").style.visibility = "hidden";

			document.getElementById("3am1th").style.visibility = "hidden";
			document.getElementById("3am1thh").style.visibility = "hidden";


			document.getElementById("ibn3amth").style.visibility = "hidden";
			document.getElementById("ibn3amthh").style.visibility = "hidden";

			document.getElementById("ibn3am1th").style.visibility = "hidden";
			document.getElementById("ibn3am1thh").style.visibility = "hidden";
		}



	} else {
		if (document.getElementById("bnt").value == "non" && document.getElementById("ibn").value == "non" && document.getElementById("ibn1").value == "non" && document.getElementById("ab").value == "non" && document.getElementById("jad").value == "non") {
			if (document.getElementById("akh").value == "non" && document.getElementById("akh1").value == "non") {
				if (document.getElementById("okht").value != "non") {
					document.getElementById("okht1thh").style.visibility = "visible";
					document.getElementById("okht1th").style.visibility = "visible";
				}
				document.getElementById("akh1thh").style.visibility = "visible";
				document.getElementById("akh1th").style.visibility = "visible";
				document.getElementById("ibnakh1th").style.visibility = "visible";
				document.getElementById("ibnakh1thh").style.visibility = "visible";

				document.getElementById("ibnakhth").style.visibility = "visible";
				document.getElementById("ibnakhthh").style.visibility = "visible";

				document.getElementById("3amth").style.visibility = "visible";
				document.getElementById("3amthh").style.visibility = "visible";

				document.getElementById("3am1th").style.visibility = "visible";
				document.getElementById("3am1thh").style.visibility = "visible";


				document.getElementById("ibn3amth").style.visibility = "visible";
				document.getElementById("ibn3amthh").style.visibility = "visible";

				document.getElementById("ibn3am1th").style.visibility = "visible";
				document.getElementById("ibn3am1thh").style.visibility = "visible";


				if (document.getElementById("okht").value > 1 && document.getElementById("akh1").value == "non") {
					document.getElementById("okht1thh").style.visibility = "hidden";
					document.getElementById("okht1th").style.visibility = "hidden";
				}
				document.getElementById("akh1thh").style.visibility = "visible";
				document.getElementById("akh1th").style.visibility = "visible";
			}

			document.getElementById("akh2thh").style.visibility = "visible";
			document.getElementById("akh2th").style.visibility = "visible";
			document.getElementById("okht2thh").style.visibility = "visible";
			document.getElementById("okht2th").style.visibility = "visible";
		}



		$('#myModal6').modal('hide');

	}
}




//okht chakika  


function handleSelectChange14() {

	if (document.getElementById("okht").value != "non") {
		if (document.getElementById("akh").value == "non") {
			if (document.getElementById("bnt").value != "non" || document.getElementById("bnt1").value != "non") {
				document.getElementById("okht1").value = "non";
				document.getElementById("okht1").selectedIndex = 0;



				document.getElementById("okht1th").style.visibility = "hidden";
				document.getElementById("okht1thh").style.visibility = "hidden";



				document.getElementById("akh1").value = "non";
				document.getElementById("akh1").selectedIndex = 0;



				document.getElementById("akh1th").style.visibility = "hidden";
				document.getElementById("akh1thh").style.visibility = "hidden";



				document.getElementById("ibnakh1").selectedIndex = 0;
				document.getElementById("ibnakh1").value = "non";

				document.getElementById("3am").value = "non";
				document.getElementById("3am").selectedIndex = 0;

				document.getElementById("3am1").value = "non";
				document.getElementById("3am1").selectedIndex = 0;

				document.getElementById("ibn3am").value = "non";
				document.getElementById("ibn3am").selectedIndex = 0;

				document.getElementById("ibn3am1").value = "non";
				document.getElementById("ibn3am1").selectedIndex = 0;

				document.getElementById("ibnakh").value = "non";
				document.getElementById("ibnakh").selectedIndex = 0;

				document.getElementById("ibnakhth").style.visibility = "hidden";
				document.getElementById("ibnakhthh").style.visibility = "hidden";


				document.getElementById("ibnakh1th").style.visibility = "hidden";
				document.getElementById("ibnakh1thh").style.visibility = "hidden";

				document.getElementById("3amth").style.visibility = "hidden";
				document.getElementById("3amthh").style.visibility = "hidden";

				document.getElementById("3am1th").style.visibility = "hidden";
				document.getElementById("3am1thh").style.visibility = "hidden";


				document.getElementById("ibn3amth").style.visibility = "hidden";
				document.getElementById("ibn3amthh").style.visibility = "hidden";

				document.getElementById("ibn3am1th").style.visibility = "hidden";
				document.getElementById("ibn3am1thh").style.visibility = "hidden";
				$('#myModal15').modal('show');

			}
			else {





				if (document.getElementById("okht").value > 1 && document.getElementById("akh1").value == "non") {
					document.getElementById("okht1").value = "non";
					document.getElementById("okht1").selectedIndex = 0;


					document.getElementById("okht1th").style.visibility = "hidden";
					document.getElementById("okht1thh").style.visibility = "hidden";



					$('#myModal14').modal('show');
				}

				if (document.getElementById("okht").value == "1") {
					document.getElementById("okht1thh").style.visibility = "visible";
					document.getElementById("okht1th").style.visibility = "visible";
				}
			}

		}
	} else {


		if (document.getElementById("akh").value == "non") {
			document.getElementById("okht1th").style.visibility = "visible";
			document.getElementById("okht1thh").style.visibility = "visible";

			document.getElementById("akh1th").style.visibility = "visible";
			document.getElementById("akh1thh").style.visibility = "visible";

			document.getElementById("ibnakh1th").style.visibility = "visible";
			document.getElementById("ibnakh1thh").style.visibility = "visible";

			document.getElementById("ibnakhth").style.visibility = "visible";
			document.getElementById("ibnakhthh").style.visibility = "visible";

			document.getElementById("3amth").style.visibility = "visible";
			document.getElementById("3amthh").style.visibility = "visible";

			document.getElementById("3am1th").style.visibility = "visible";
			document.getElementById("3am1thh").style.visibility = "visible";


			document.getElementById("ibn3amth").style.visibility = "visible";
			document.getElementById("ibn3amthh").style.visibility = "visible";

			document.getElementById("ibn3am1th").style.visibility = "visible";
			document.getElementById("ibn3am1thh").style.visibility = "visible";
		}

		$('#myModal14').modal('hide');


		$('#myModal15').modal('hide');

	}
}


//okht ab 

function handleSelectChange16() {

	if (document.getElementById("okht1").value != "non") {
		if (document.getElementById("akh1").value == "non") {
			if (document.getElementById("bnt").value != "non" || document.getElementById("bnt1").value != "non") {


				document.getElementById("ibnakh1").selectedIndex = 0;
				document.getElementById("ibnakh1").value = "non";

				document.getElementById("3am").value = "non";
				document.getElementById("3am").selectedIndex = 0;

				document.getElementById("3am1").value = "non";
				document.getElementById("3am1").selectedIndex = 0;

				document.getElementById("ibn3am").value = "non";
				document.getElementById("ibn3am").selectedIndex = 0;

				document.getElementById("ibn3am1").value = "non";
				document.getElementById("ibn3am1").selectedIndex = 0;

				document.getElementById("ibnakh").value = "non";
				document.getElementById("ibnakh").selectedIndex = 0;

				document.getElementById("ibnakhth").style.visibility = "hidden";
				document.getElementById("ibnakhthh").style.visibility = "hidden";


				document.getElementById("ibnakh1th").style.visibility = "hidden";
				document.getElementById("ibnakh1thh").style.visibility = "hidden";

				document.getElementById("3amth").style.visibility = "hidden";
				document.getElementById("3amthh").style.visibility = "hidden";

				document.getElementById("3am1th").style.visibility = "hidden";
				document.getElementById("3am1thh").style.visibility = "hidden";


				document.getElementById("ibn3amth").style.visibility = "hidden";
				document.getElementById("ibn3amthh").style.visibility = "hidden";

				document.getElementById("ibn3am1th").style.visibility = "hidden";
				document.getElementById("ibn3am1thh").style.visibility = "hidden";
				$('#myModal16').modal('show');

			}

		}

	} else {


		if (document.getElementById("akh1").value == "non") {
			document.getElementById("okht1th").style.visibility = "visible";
			document.getElementById("okht1thh").style.visibility = "visible";

			document.getElementById("akh1th").style.visibility = "visible";
			document.getElementById("akh1thh").style.visibility = "visible";

			document.getElementById("ibnakh1th").style.visibility = "visible";
			document.getElementById("ibnakh1thh").style.visibility = "visible";

			document.getElementById("ibnakhth").style.visibility = "visible";
			document.getElementById("ibnakhthh").style.visibility = "visible";

			document.getElementById("3amth").style.visibility = "visible";
			document.getElementById("3amthh").style.visibility = "visible";

			document.getElementById("3am1th").style.visibility = "visible";
			document.getElementById("3am1thh").style.visibility = "visible";


			document.getElementById("ibn3amth").style.visibility = "visible";
			document.getElementById("ibn3amthh").style.visibility = "visible";

			document.getElementById("ibn3am1th").style.visibility = "visible";
			document.getElementById("ibn3am1thh").style.visibility = "visible";
		}

		$('#myModal16').modal('hide');




	}
}































$(document)
	.ready(
		function() {
			$("#wizard").steps();
			$("#form")
				.steps(
					{
						labels: {
							cancel: "إلغاء",
							current: "current step:",
							pagination: "Pagination",
							finish: "حساب",
							next: "التالي",
							previous: "السابق",
							loading: "تحميل ..."
						},
						bodyTag: "fieldset",
						onStepChanging: function(
							event, currentIndex,
							newIndex) {
							// Always allow going backward even if the current step contains invalid fields!
							if (currentIndex > newIndex) {
								return true;
							}

							// Forbid suppressing "Warning" step if the user is to young
							if (newIndex === 3
								&& Number($("#age")
									.val()) < 18) {
								return false;
							}

							var form = $(this);

							// Clean up if user went backward before
							if (currentIndex < newIndex) {
								// To remove error styles
								$(
									".body:eq("
									+ newIndex
									+ ") label.error",
									form).remove();
								$(
									".body:eq("
									+ newIndex
									+ ") .error",
									form)
									.removeClass(
										"error");
							}

							// Disable validation on fields that are disabled or hidden.
							form.validate().settings.ignore = ":disabled,:hidden";

							// Start validation; Prevent going forward if false
							return form.valid();
						},
						onStepChanged: function(event,
							currentIndex,
							priorIndex) {
							// Suppress (skip) "Warning" step if the user is old enough.
							if (currentIndex === 2
								&& Number($("#age")
									.val()) >= 18) {
								$(this).steps("next");
							}

							// Suppress (skip) "Warning" step if the user is old enough and wants to the previous step.
							if (currentIndex === 2
								&& priorIndex === 3) {
								$(this).steps(
									"previous");
							}
						},
						onFinishing: function(event,
							currentIndex) {
							var form = $(this);

							// Disable validation on fields that are disabled.
							// At this point it's recommended to do an overall check (mean ignoring only disabled fields)
							form.validate().settings.ignore = ":disabled";
							
							
						




							function done(nombre, part, relation_familiale, cond) {
								var formData = new FormData();

								formData.append("part", part);
								formData.append("relation_familiale", relation_familiale);
								formData.append("nombre", nombre);

								formData.append("cond", cond);

								var params = new URLSearchParams(formData).toString();

								$.ajax({

									url: "/p",
									type: "Get",
									data: params,
									processData: false,
									contentType: false,
									success: function(data) {


									},
									error: function(xhr, status, error) {
										// Traiter les erreurs ici
									}
								});



							}


							var epaux = document.getElementById("epaux").value;
							var epause = document.getElementById("epause").value;
							var ab = document.getElementById("ab").value;
							var om = document.getElementById("om").value;
							var jad = document.getElementById("jad").value;
							var jada = document.getElementById("jada").value;
							var jada1 = document.getElementById("jada1").value;//li om
							var ibn = document.getElementById("ibn").value;
							var bnt = document.getElementById("bnt").value;
							var ibn1 = document.getElementById("ibn1").value;// ibn ibn 
							var bnt1 = document.getElementById("bnt1").value;// bnt ibn 

							var akh = document.getElementById("akh").value;
							var okht = document.getElementById("okht").value;
							var akh1 = document.getElementById("akh1").value;// akh ab
							var okht1 = document.getElementById("okht1").value;
							var akh2 = document.getElementById("akh2").value;// akh om
							var okht2 = document.getElementById("okht2").value;
							var ibnakh = document.getElementById("ibnakh").value;
							var ibnakh1 = document.getElementById("ibnakh1").value;
							var am = document.getElementById("3am").value;
							var am1 = document.getElementById("3am1").value;// 3am le ab
							var ibnam = document.getElementById("ibn3am").value;
							var ibnam1 = document.getElementById("ibn3am1").value;
							
							var wasiya=document.getElementById("wasiya").value;
						    var somme=document.getElementById("somme").value;
							var doyon=document.getElementById("doyon").value;
							var tajhez=document.getElementById("tajhez").value;

							var partepause = "0";
							var partepaux = "0";
							var partjada = "0";
							var partjada1 = "0";
							var partom = "0";
							var partab = "0";
							var partjad = "0";
							var partbnt = "0";
							var partibn = "0";
							var partbnt1 = "0";
							var partibn1 = "0";
							var partakh = "0";
							var partokht = "0";

							var partokht1 = "0";
							var partakh1 = "0";
							var stop=0;

var part="عاصب";


if(somme==0){
	   

stop=1;
document.getElementById("hya").style.backgroundColor = "#ED5565";
document.getElementById("somme").style.borderColor = "#ED5565";
document.getElementById("sommeError").style.display="block";

}

if(stop==0){










							//calcul jada
							if (jada != "non")
								if (om == "non" && ab == "non")
									partjada = "1/6";




							//calcul jada1

							if (jada1 != "non")
								if (om == "non")
									partjada1 = "1/6";


							//si on a les deux 
							if (jada1 != "non" && jada != "non" && partjada != 0 && partjada1 != 0)
								partjada = partjada1 = "1/12";


							if (partjada != "0")
								lookfor("-", partjada, "أم الأب");

							if (partjada1 != "0")
								lookfor("-", partjada1, "أم الأم");




							//calcul om
							if (om != "non") {

								if ((ibn != "non" || bnt != "non" || ibn1 != "non" || bnt1 != "non"))
									partom = "1/6";
								else
									if (akh > 1 || akh1 > 1 || akh2 > 1 || okht > 1 || okht1 > 1 || okht2 > 1)
										partom = "1/6";
									else
										partom = "1/3";
								lookfor("-", partom, "أم");
							}


							// calcul ab           
							if (ab != "non") {
								if ((ibn != "non" || ibn1 != "non"))
									partab = "1/6";
								else
									if (bnt != "non" || bnt1 != "non")
										partab = "1/6 + إضافة الى باقى التركة (ان تبقى شيء)";
									else
										partab = "عاصب";
								lookfor("-", partab, "أب");

							}
							// calcul jad       
							else {
								if (jad != "non") {
									if ((ibn != "non" || ibn1 != "non"))
										partjad = "1/6";
									else
										if (bnt != "non" || bnt1 != "non")
											partjad = "1/6 + إضافة الى باقى التركة (ان تبقى شيء)";
										else
											partjad = "عاصب";
									lookfor("-", partjad, "أب الأب");
								}
							}

							// calcul abna2

							if (bnt != "non") {
								if (ibn != "non") {
									partbnt = "للذكر مثل حظ الأنثيين";
									partibn = "للذكر مثل حظ الأنثيين";
									lookfor(ibn, partibn, "ابن");
									lookfor(" " + bnt, partbnt, "بنت");

								}
								if (bnt == 1) {
									if (ibn == "non") {
										partbnt = "1/2";
										lookfor(" " + bnt, partbnt, "بنت");
									}
								} else
									if (ibn == "non") {
										partbnt = "2/3";
										lookfor(" " + bnt, partbnt, "بنت");
									}
							}
							else
								if (ibn != "non") {
									partibn = "عاصب";
									lookfor(ibn, partibn, "ابن");

								}




							//  calcul ibn wa bnt al ibn

							if (ibn1 != "non") {
								if (bnt1 != "non") {
									partbnt1 = "للذكر مثل حظ الأنثيين";
									partibn1 = "للذكر مثل حظ الأنثيين";
									lookfor(" " + bnt1, partbnt1, "بنت ابن");

								}
								else
									partibn1 = "عاصب";
								lookfor(" " + ibn1, partibn1, "ابن ابن");
							} else {
								if (bnt1 != "non") {
									if (bnt == "1")
										partbnt1 = "1/6";
									else
										if (bnt1 == "1")
											partbnt1 = "1/2";
										else
											partbnt1 = "2/3";

									lookfor(" " + bnt1, partbnt1, "بنت ابن");


								}


							}



							//akh okht le om

							if (akh2 != "non" && okht2 != "non") {
								var a = parseInt(akh2) + parseInt(okht2);

								lookfor(" " + a, "1/3", "اخوة لأم");

							}

							else {
								if (akh2 > 1)
									lookfor(" " + akh2, "1/3", "أخ لأم");
								if (akh2 == "1")
									lookfor(" " + akh2, "1/6", "أخ لأم");

								if (okht2 > 1)
									lookfor(" " + okht2, "1/3", "أخت لأم");
								if (okht2 == "1")
									lookfor(" " + okht2, "1/6", "أخت لأم");


							}

							//akhckakik okhtchakika


							if (akh != "non") {
								if (okht != "non") {
									partokht = "للذكر مثل حظ الأنثيين";
									partakh = "للذكر مثل حظ الأنثيين";
									lookfor(akh, partakh, "أخ شقيق");
									lookfor(okht, partokht, "أخت شقيقة");
								

								}
							}
							
							if (bnt == "non" && bnt1 == "non") {
								if (okht != "non") {
									if (okht == 1) {
										if (akh == "non") {
											partokht = "1/2";
											lookfor(okht, partokht, "أخت شقيقة");
												
										                   }
									} else
										if (akh == "non") {
											partokht = "2/3";
											lookfor(okht, partokht, "أخت شقيقة");
											
										                   }
								                      }
							                                    }

							else
								if (okht != "non"){
									if (akh == "non") {
										partokht = "عاصبة";
										lookfor(okht, partokht, "أخت شقيقة");
									                   }}
							if (okht == "non"){
								if (akh != "non") {
									partakh = "عاصب";
									lookfor(akh, partakh, "أخ شقيق");

								}}




							// akh ab okht ab



							if (akh1 != "non") {
								if (okht1 != "non") {
									partokht1 = "للذكر مثل حظ الأنثيين";
									partakh1 = "للذكر مثل حظ الأنثيين";
									lookfor(okht1, partokht1, "أخت لأب");

								                       }
								else
									partakh1 = "عاصب";
								lookfor(akh1, partakh1, "أخ لاب");
							                      }
							else {
								if (okht1 != "non") {
									if (bnt == "non" && bnt1 == "non") {
										if (okht == "1")
											partokht1 = "1/6";
										else
											if (okht1 == "1")
												partokht1 = "1/2";
											else
												partokht1 = "2/3";

										lookfor(okht1, partokht1, "أخت لأب");
									                                      }
									else {
										partokht1 = "عاصبة";
										lookfor(okht1, partokht1, "أخت لأب");
									     }

								                       }
							          }




							// calcul epause     
							if (epause != "non") {
								if ((ibn != "non" || bnt != "non" || ibn1 != "non" || bnt1 != "non"))
									partepause = "1/8";
								else partepause = "1/4";

								lookfor(epause, partepause, "زوجـة");

							}







							// calcul epaux
							if (epaux != "non") {
								if ((ibn != "non" || bnt != "non" || ibn1 != "non" || bnt1 != "non"))
									partepaux = "1/4";
								else partepaux = "1/2";

								lookfor("-", partepaux, "زوج");

							}
							
							
							if(ibnakh!="non")
							lookfor(ibnakh,part,"ابن أخ شقيق");
							
								if(ibnakh1!="non")
							lookfor(ibnakh1,part,"ابن أخ لأب");
							
									if(am!="non")
							lookfor(am,part,"عم شقيق");
							
									if(am1!="non")
							lookfor(am1,part,"عم لأب");
							

	                          if(ibnam!="non")
							lookfor(am,part,"ابن عم شقيق");
							
									if(ibnam1!="non")
							lookfor(am1,part,"ابن عم لأب");


							var b = 0;
							if (b == 0)
								b = 5;

							var c = 0;
							if (c == 0)
								b = 5;










							function lookfor(nombre, part, relation_familiale) {
								var formData = new FormData();

								formData.append("part", part);
								formData.append("relation_familiale", relation_familiale);

								var params = new URLSearchParams(formData).toString();

								$.ajax({
									url: "/public",
									type: "GET",
									data: params,
									processData: false,
									contentType: false,
									success: function(data) {
										console.log(data[0]);
										var cond = data[0];
										done(nombre, part, relation_familiale, cond);
									},
									error: function(xhr, status, error) {
										// Traiter les erreurs ici
									}
								});



							}
							
							
 donne(somme,doyon,tajhez,wasiya);							


function donne(s,d,t,w) {
								var formData = new FormData();
  var d = parseFloat(d);
    var s = parseFloat(s);
      var t= parseFloat(t);
        var w= parseFloat(w);
        if(isNaN(d))
          d=0.00
        if(isNaN(t))
          t=0.00;

								formData.append("doyon", d);
								formData.append("somme", s);
								formData.append("tajhez", t);

								formData.append("wasiya", w);
					

								var params = new URLSearchParams(formData).toString();

								$.ajax({

									url: "/s",
									type: "GET",
									data: params,
									processData: false,
									contentType: false,
									success: function(data) {


									},
									error: function(xhr, status, error) {
										// Traiter les erreurs ici
									}
								});



							}





							




							// Start validation; Prevent form submission if false
							if (b == 5)
								return form.valid();}
						},
						onFinished: function(event,
							currentIndex) {
							var form = $(this);

							// Submit form input
							form.submit();
						}
					}).validate(
						{
							errorPlacement: function(
								error, element) {
								element.before(error);
							},
							rules: {
								confirm: {
									equalTo: "#password"
								}
							}
						});
		});