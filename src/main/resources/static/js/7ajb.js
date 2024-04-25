
function closeModal() {
	$('#myModal').modal('hide');
	$('#myModal2').modal('hide');
	$('#myModal3').modal('hide');
	$('#myModal4').modal('hide');
	$('#myModal5').modal('hide');
	$('#myModal6').modal('hide');
	$('#myModal7').modal('hide');
	$('#myModal8').modal('hide');

	$('#myModal9').modal('hide');
	$('#myModal10').modal('hide');

	$('#myModal11').modal('hide');
	$('#myModal12').modal('hide');
	$('#myModal13').modal('hide');

	$('#myModal14').modal('hide');
$('#myModal16').modal('hide');
	$('#myModal15').modal('hide');
}

function amhajb() {
	//hh
	document.getElementById("akh").value = "non";
	document.getElementById("akh").selectedIndex = 0;

	document.getElementById("akh1").value = "non";
	document.getElementById("akh1").selectedIndex = 0;

	document.getElementById("akh2").value = "non";
	document.getElementById("akh2").selectedIndex = 0;

	document.getElementById("ibnakh").value = "non";
	document.getElementById("ibnakh").selectedIndex = 0;

	document.getElementById("ibnakh1").value = "non";
	document.getElementById("ibnakh1").selectedIndex = 0;

	document.getElementById("okht").value = "non";
	document.getElementById("okht").selectedIndex = 0;

	document.getElementById("okht1").value = "non";
	document.getElementById("okht1").selectedIndex = 0;

	document.getElementById("okht2").value = "non";
	document.getElementById("okht2").selectedIndex = 0;





	document.getElementById("3am").value = "non";
	document.getElementById("3am").selectedIndex = 0;

	document.getElementById("3am1").value = "non";
	document.getElementById("3am1").selectedIndex = 0;

	document.getElementById("ibn3am").value = "non";
	document.getElementById("ibn3am").selectedIndex = 0;

	document.getElementById("ibn3am1").value = "non";
	document.getElementById("ibn3am1").selectedIndex = 0;


	document.getElementById("akh2thh").style.visibility = "hidden";
	document.getElementById("akh2th").style.visibility = "hidden";
	document.getElementById("okht2thh").style.visibility = "hidden";
	document.getElementById("okht2th").style.visibility = "hidden";

	document.getElementById("akh1thh").style.visibility = "hidden";
	document.getElementById("akh1th").style.visibility = "hidden";
	document.getElementById("okht1thh").style.visibility = "hidden";
	document.getElementById("okht1th").style.visibility = "hidden";

	document.getElementById("akhthh").style.visibility = "hidden";
	document.getElementById("akhth").style.visibility = "hidden";
	document.getElementById("okhtthh").style.visibility = "hidden";
	document.getElementById("okhtth").style.visibility = "hidden";

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

function V() {

	document.getElementById("akhthh").style.visibility = "visible";
	document.getElementById("akhth").style.visibility = "visible";
	document.getElementById("okhtthh").style.visibility = "visible";
	document.getElementById("okhtth").style.visibility = "visible";




	document.getElementById("akh1thh").style.visibility = "visible";
	document.getElementById("akh1th").style.visibility = "visible";
	document.getElementById("okht1thh").style.visibility = "visible";
	document.getElementById("okht1th").style.visibility = "visible";

	document.getElementById("akh2thh").style.visibility = "visible";
	document.getElementById("akh2th").style.visibility = "visible";
	document.getElementById("okht2thh").style.visibility = "visible";
	document.getElementById("okht2th").style.visibility = "visible";

	document.getElementById("ibnakhth").style.visibility = "visible";
	document.getElementById("ibnakhthh").style.visibility = "visible";
	document.getElementById("ibnakh1th").style.visibility = "visible";
	document.getElementById("ibnakh1thh").style.visibility = "visible";

	document.getElementById("3amth").style.visibility = "visible";
	document.getElementById("3amthh").style.visibility = "visible";
	document.getElementById("3am1th").style.visibility = "visible";
	document.getElementById("3am1thh").style.visibility = "visible";


	document.getElementById("ibn3amth").style.visibility = "visible";
	document.getElementById("ibn3amthh").style.visibility = "visible";
	document.getElementById("ibn3am1th").style.visibility = "visible";
	document.getElementById("ibn3am1thh").style.visibility = "visible";



}
//ibn
function handleSelectChange() {
	const selectedValue = document.getElementById("ibn").value;




	var abnae = document.getElementById("abnae");
	// Check the selected option and show/hide the modal accordingly
	if (document.getElementById("ibn").value != "non") {


		document.getElementById("ibn1").value = "non";
		document.getElementById("ibn1").selectedIndex = 0;

		document.getElementById("bnt1").value = "non";
		document.getElementById("bnt1").selectedIndex = 0;
		document.getElementById("bnt1thh").style.visibility = "hidden";
		document.getElementById("bnt1th").style.visibility = "hidden";
		document.getElementById("ibn1thh").style.visibility = "hidden";
		document.getElementById("ibn1th").style.visibility = "hidden";



		amhajb();


		$('#myModal').modal('show');
	} else {

		if (document.getElementById("ab").value == "non" && document.getElementById("jad").value == "non") {
			V();
			if (document.getElementById("bnt").value != "non") {
				document.getElementById("akh2thh").style.visibility = "hidden";
				document.getElementById("akh2th").style.visibility = "hidden";
				document.getElementById("okht2thh").style.visibility = "hidden";
				document.getElementById("okht2th").style.visibility = "hidden";
			}
		}
		document.getElementById("ibn1thh").style.visibility = "visible";
		document.getElementById("ibn1th").style.visibility = "visible";
		if (document.getElementById("bnt").value == 1 || document.getElementById("bnt").value == "non") {
			document.getElementById("bnt1thh").style.visibility = "visible";
			document.getElementById("bnt1th").style.visibility = "visible";
		}

		$('#myModal').modal('hide');

	}
}


//ibn ibn

function handleSelectChange1() {
	const selectedValue = document.getElementById("ibn1").value;




	// Check the selected option and show/hide the modal accordingly
	if (document.getElementById("ibn1").value != "non") {
		document.getElementById("bnt1thh").style.visibility = "visible";
		document.getElementById("bnt1th").style.visibility = "visible";


		amhajb();

		$('#myModal').modal('show');


	} else {
		if (document.getElementById("ab").value == "non" && document.getElementById("jad").value == "non")
			V();

		$('#myModal').modal('hide');
		if (document.getElementById("bnt").value != "non" || document.getElementById("bnt1").value != "non") {
			document.getElementById("akh2thh").style.visibility = "hidden";
			document.getElementById("akh2th").style.visibility = "hidden";
			document.getElementById("okht2thh").style.visibility = "hidden";
			document.getElementById("okht2th").style.visibility = "hidden";
		}
		if (document.getElementById("bnt").value > 1 && document.getElementById("bnt1th").style.visibility == "visible") { handleSelectChange5(); }



	}
}


//ab

function handleSelectChange2() {
	const selectedValue = document.getElementById("ab").value;




	// Check the selected option and show/hide the modal accordingly
	if (document.getElementById("ab").value != "non") {
		amhajb();

		document.getElementById("jad").value = "non";
		document.getElementById("jad").selectedIndex = 0;

		document.getElementById("jada").value = "non";
		document.getElementById("jada").selectedIndex = 0;

		document.getElementById("jadath").style.visibility = "hidden";
		document.getElementById("jadaths").style.visibility = "hidden";

		document.getElementById("jadth").style.visibility = "hidden";
		document.getElementById("jadthh").style.visibility = "hidden";




		$('#myModal2').modal('show');
	} else {
		if (document.getElementById("ibn").value == "non" && document.getElementById("ibn1").value == "non")
			V();
		if (document.getElementById("bnt").value != "non" || document.getElementById("bnt1").value != "non") {
			document.getElementById("akh2thh").style.visibility = "hidden";
			document.getElementById("akh2th").style.visibility = "hidden";
			document.getElementById("okht2thh").style.visibility = "hidden";
			document.getElementById("okht2th").style.visibility = "hidden";
		}
		if (document.getElementById("om").value == "non") {
			document.getElementById("jadath").style.visibility = "visible";
			document.getElementById("jadaths").style.visibility = "visible";
		}

		document.getElementById("jadth").style.visibility = "visible";
		document.getElementById("jadthh").style.visibility = "visible";

		$('#myModal2').modal('hide');
	}


}

//jad 
function handleSelectChange4() {


	// Check the selected option and show/hide the modal accordingly
	if (document.getElementById("jad").value != "non") {
		amhajb();


		$('#myModal4').modal('show');
	} else {
		if (document.getElementById("ibn").value == "non" && document.getElementById("ibn1").value == "non")
			V();

		if (document.getElementById("bnt").value != "non" || document.getElementById("bnt1").value != "non") {
			document.getElementById("akh2thh").style.visibility = "hidden";
			document.getElementById("akh2th").style.visibility = "hidden";
			document.getElementById("okht2thh").style.visibility = "hidden";
			document.getElementById("okht2th").style.visibility = "hidden";
		}

		$('#myModal4').modal('hide');

	}
}









//  om
function handleSelectChange3() {
	const selectedValue = document.getElementById("om").value;




	// Check the selected option and show/hide the modal accordingly
	if (selectedValue != "non") {

		document.getElementById("jada1").value = "non";
		document.getElementById("jada1").selectedIndex = 0;

		document.getElementById("jada").value = "non";
		document.getElementById("jada").selectedIndex = 0;

		document.getElementById("jadath").style.visibility = "hidden";
		document.getElementById("jada1th").style.visibility = "hidden";
		document.getElementById("jadaths").style.visibility = "hidden";
		document.getElementById("jada1ths").style.visibility = "hidden";




		$('#myModal3').modal('show');
	} else {
		if (document.getElementById("ab").value == "non") {
			document.getElementById("jadath").style.visibility = "visible";
			document.getElementById("jadaths").style.visibility = "visible";
		}


		document.getElementById("jada1ths").style.visibility = "visible";
		document.getElementById("jada1th").style.visibility = "visible";


		$('#myModal3').modal('hide');

	}
}

//bnt


//akh chakik
function handleSelectChange7() {



	// Check the selected option and show/hide the modal accordingly
	if (document.getElementById("akh").value != "non") {

		document.getElementById("ibnakh").value = "non";
		document.getElementById("ibnakh").selectedIndex = 0;

		document.getElementById("akh1").value = "non";
		document.getElementById("akh1").selectedIndex = 0;

		document.getElementById("okht1").value = "non";
		document.getElementById("okht1").selectedIndex = 0;

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


		document.getElementById("akh1thh").style.visibility = "hidden";
		document.getElementById("akh1th").style.visibility = "hidden";



		document.getElementById("okht1thh").style.visibility = "hidden";
		document.getElementById("okht1th").style.visibility = "hidden";

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



		$('#myModal7').modal('show');
	} else {


		document.getElementById("ibnakhth").style.visibility = "visible";
		document.getElementById("ibnakhthh").style.visibility = "visible";
		document.getElementById("ibnakh1th").style.visibility = "visible";
		document.getElementById("ibnakh1thh").style.visibility = "visible";

		document.getElementById("3amth").style.visibility = "visible";
		document.getElementById("3amthh").style.visibility = "visible";
		document.getElementById("3am1th").style.visibility = "visible";
		document.getElementById("3am1thh").style.visibility = "visible";


		document.getElementById("ibn3amth").style.visibility = "visible";
		document.getElementById("ibn3amthh").style.visibility = "visible";
		document.getElementById("ibn3am1th").style.visibility = "visible";
		document.getElementById("ibn3am1thh").style.visibility = "visible";
		document.getElementById("akh1thh").style.visibility = "visible";
		document.getElementById("akh1th").style.visibility = "visible";



		document.getElementById("okht1thh").style.visibility = "visible";
		document.getElementById("okht1th").style.visibility = "visible";

		if (document.getElementById("bnt1").value != "non" || document.getElementById("bnt").value != "non")
			if (document.getElementById("okht").value != "non") {
				document.getElementById("akh1thh").style.visibility = "hidden";
				document.getElementById("akh1th").style.visibility = "hidden";
						

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



				document.getElementById("okht1thh").style.visibility = "hidden";
				document.getElementById("okht1th").style.visibility = "hidden";
			}

		if (document.getElementById("okht").value > 1 && document.getElementById("akh1").value == "non") {
			handleSelectChange14()
		}



		$('#myModal7').modal('hide');

	}
}



//akh ab

function handleSelectChange8() {



	// Check the selected option and show/hide the modal accordingly
	if (document.getElementById("akh1").value != "non") {



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



		$('#myModal8').modal('show');
	} else {


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



		if (document.getElementById("okht").value > 1 && document.getElementById("okht1th").style.visibility == "visible") {
			handleSelectChange14();
		}
		
		if (document.getElementById("bnt").value != "non" || document.getElementById("bnt1").value != "non")
		 if(document.getElementById("okht1").value != "non")
		 handleSelectChange16();

		$('#myModal8').modal('hide');

	}
}


function handleSelectChange9() {



	// Check the selected option and show/hide the modal accordingly
	if (document.getElementById("ibnakh").value != "non") {



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



		$('#myModal9').modal('show');
	} else {


		document.getElementById("ibnakh1th").style.visibility = "visible";
		document.getElementById("ibnakh1thh").style.visibility = "visible";


		document.getElementById("3amth").style.visibility = "visible";
		document.getElementById("3amthh").style.visibility = "visible";

		document.getElementById("3am1th").style.visibility = "visible";
		document.getElementById("3am1thh").style.visibility = "visible";


		document.getElementById("ibn3amth").style.visibility = "visible";
		document.getElementById("ibn3amthh").style.visibility = "visible";

		document.getElementById("ibn3am1th").style.visibility = "visible";
		document.getElementById("ibn3am1thh").style.visibility = "visible";


		$('#myModal9').modal('hide');

	}
}




function handleSelectChange10() {



	// Check the selected option and show/hide the modal accordingly
	if (document.getElementById("ibnakh1").value != "non") {


		document.getElementById("3am").value = "non";
		document.getElementById("3am").selectedIndex = 0;

		document.getElementById("3am1").value = "non";
		document.getElementById("3am1").selectedIndex = 0;

		document.getElementById("ibn3am").value = "non";
		document.getElementById("ibn3am").selectedIndex = 0;

		document.getElementById("ibn3am1").value = "non";
		document.getElementById("ibn3am1").selectedIndex = 0;








		document.getElementById("3amth").style.visibility = "hidden";
		document.getElementById("3amthh").style.visibility = "hidden";

		document.getElementById("3am1th").style.visibility = "hidden";
		document.getElementById("3am1thh").style.visibility = "hidden";


		document.getElementById("ibn3amth").style.visibility = "hidden";
		document.getElementById("ibn3amthh").style.visibility = "hidden";

		document.getElementById("ibn3am1th").style.visibility = "hidden";
		document.getElementById("ibn3am1thh").style.visibility = "hidden";



		$('#myModal10').modal('show');
	} else {




		document.getElementById("3amth").style.visibility = "visible";
		document.getElementById("3amthh").style.visibility = "visible";

		document.getElementById("3am1th").style.visibility = "visible";
		document.getElementById("3am1thh").style.visibility = "visible";


		document.getElementById("ibn3amth").style.visibility = "visible";
		document.getElementById("ibn3amthh").style.visibility = "visible";

		document.getElementById("ibn3am1th").style.visibility = "visible";
		document.getElementById("ibn3am1thh").style.visibility = "visible";








		$('#myModal10').modal('hide');

	}
}


//3am chakik

function handleSelectChange11() {



	// Check the selected option and show/hide the modal accordingly
	if (document.getElementById("3am").value != "non") {


		document.getElementById("3am1").value = "non";
		document.getElementById("3am1").selectedIndex = 0;

		document.getElementById("ibn3am").value = "non";
		document.getElementById("ibn3am").selectedIndex = 0;

		document.getElementById("ibn3am1").value = "non";
		document.getElementById("ibn3am1").selectedIndex = 0;


		document.getElementById("3am1th").style.visibility = "hidden";
		document.getElementById("3am1thh").style.visibility = "hidden";


		document.getElementById("ibn3amth").style.visibility = "hidden";
		document.getElementById("ibn3amthh").style.visibility = "hidden";

		document.getElementById("ibn3am1th").style.visibility = "hidden";
		document.getElementById("ibn3am1thh").style.visibility = "hidden";



		$('#myModal11').modal('show');
	} else {





		document.getElementById("3am1th").style.visibility = "visible";
		document.getElementById("3am1thh").style.visibility = "visible";


		document.getElementById("ibn3amth").style.visibility = "visible";
		document.getElementById("ibn3amthh").style.visibility = "visible";

		document.getElementById("ibn3am1th").style.visibility = "visible";
		document.getElementById("ibn3am1thh").style.visibility = "visible";








		$('#myModal11').modal('hide');

	}
}

//3am ab

function handleSelectChange12() {

	if (document.getElementById("3am1").value != "non") {


		document.getElementById("ibn3am").value = "non";
		document.getElementById("ibn3am").selectedIndex = 0;

		document.getElementById("ibn3am1").value = "non";
		document.getElementById("ibn3am1").selectedIndex = 0;

		document.getElementById("ibn3amth").style.visibility = "hidden";
		document.getElementById("ibn3amthh").style.visibility = "hidden";

		document.getElementById("ibn3am1th").style.visibility = "hidden";
		document.getElementById("ibn3am1thh").style.visibility = "hidden";



		$('#myModal12').modal('show');
	} else {



		document.getElementById("ibn3amth").style.visibility = "visible";
		document.getElementById("ibn3amthh").style.visibility = "visible";

		document.getElementById("ibn3am1th").style.visibility = "visible";
		document.getElementById("ibn3am1thh").style.visibility = "visible";

		$('#myModal12').modal('hide');

	}
}

//ibn 3am chakik
function handleSelectChange13() {

	if (document.getElementById("ibn3am").value != "non") {



		document.getElementById("ibn3am1").value = "non";
		document.getElementById("ibn3am1").selectedIndex = 0;



		document.getElementById("ibn3am1th").style.visibility = "hidden";
		document.getElementById("ibn3am1thh").style.visibility = "hidden";



		$('#myModal13').modal('show');
	} else {



		document.getElementById("ibn3am1th").style.visibility = "visible";
		document.getElementById("ibn3am1thh").style.visibility = "visible";

		$('#myModal13').modal('hide');

	}
}

//okht chakika