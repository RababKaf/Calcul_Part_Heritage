/**
 * 
 */

function mouseDown(){

	  document.getElementById("labelError").style.display = "none";}
function mouseDown1(){  
	  document.getElementById("officeEmailError").style.display = "none";
	   document.getElementById("emailError").style.display = "none";
}

function mouseDown3(){ 
	  document.getElementById("adresseError").style.display = "none";
}

function mouseDown2(){ 
	  document.getElementById("cityError").style.display = "none";
	

	
	}
	
	
function mouseDownn(){
	   document.getElementById('faxError').style.display = "none";
	   	document.getElementById('teleError').style.display = "none"; 
	 
}
function mouseDownnn(){
	  document.getElementById('fixError').style.display = "none";
	  document.getElementById('telError').style.display = "none";}

	  //submit
	   function validateEmail(email){
      var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

      return re.test(email);
    }
    
 function phonenumber(inputtxt){
      var phoneno = /^\d{10}$/;
      return phoneno.test(inputtxt);
     /*  if(inputtxt.value.match(phoneno))
      {
          return true;
      }
      else
      {
         return false;
      } */
      }
	  			   
  document.forms.ff.addEventListener("submit", function(event){
    event.preventDefault(); // Prevent normal form submission
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var selectedCityId = document.getElementById("city").value;
    var formAction = document.forms.ff.getAttribute("action");
    var updatedAction = formAction.replace("nid", selectedCityId);
    document.forms.ff.setAttribute("action", updatedAction);

    
    
    
 
  		
  			
          var label = document.getElementById('label').value;
          var officeEmail=document.getElementById('officeEmail').value;
          var city = document.getElementById('city').value;
          var fix=document.getElementById('fix').value;
          var fax = document.getElementById('fax').value;
          var adresse=document.getElementById('adresse').value;
          
          
          
          
              passwordError1 = false;
         // document.getElementById('usernameError').innerHTML = ""; emailError
         // document.getElementById('passwordError').innerHTML = "";
         
          if (label == ""  ) {
              //passes error requiring something to be entered
             // document.getElementById('usernameError').innerHTML = "#{champs.user}";
              document.getElementById('labelError').style.display = "block"; 
              document.getElementById('labelError').style.color = "red"; 
          } 
        	  if(officeEmail== "" ){
              document.getElementById('officeEmailError').style.display = "block"; 
              document.getElementById('officeEmailError').style.color = "red";
        	  }
        	  else
        	  if(!validateEmail(officeEmail)){
        		document.getElementById('emailError').style.display = "block"; 
        	    document.getElementById('emailError').style.color= "red"; 
        	}
        	  
        	  
        	  
        	  if(fix=="" )
        		  {
        	 
              document.getElementById('fixError').style.display = "block"; 
              document.getElementById('fixError').style.color = "red"; 
        		  }	else
        		  if(!phonenumber(fax)){
        		document.getElementById('teleError').style.display = "block"; 
        	    document.getElementById('teleError').style.color= "red"; 
        	}
        		  
        		  
        		  
        		  
        	else
        		  if(!phonenumber(fix)){
        		document.getElementById('telError').style.display = "block"; 
        	    document.getElementById('telError').style.color= "red"; 
        	}
        	
        	  
        	  if( fax=="" ){
              document.getElementById('faxError').style.display = "block"; 
              document.getElementById('faxError').style.color = "red";}
        	  
            if(adresse==""){
             
              document.getElementById('adresseError').style.display = "block"; 
              document.getElementById('adresseError').style.color = "red";}
              //moves cursor to this field if error occurs
              //document.pageForm.userName.focus();
              //document.pageForm.userName.select();
              //checkev=0;
              
          //ensures that username meets alphanumberic regex requirements
           
          if(label != "" && officeEmail!= "" && fix!="" && fax!="" && adresse!="")
          if(validateEmail(officeEmail) && phonenumber(fix) && phonenumber(fax))
          {    document.forms.ff.submit();} 
       
          
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  });