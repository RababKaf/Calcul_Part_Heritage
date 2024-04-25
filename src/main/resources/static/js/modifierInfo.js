function mouseDown(){

	  document.getElementById("firstNameError").style.display = "none";}
function mouseDown1(){  
	  document.getElementById("lastNameError").style.display = "none";
}

function mouseDown2(){ 
	  document.getElementById("telError").style.display = "none";
	  	document.getElementById('teleError').style.display = "none";
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
 

    
    
    
 
  		
  			
          var firstName = document.getElementById('firstName').value;
          var lastName=document.getElementById('lastName').value;
          var tel = document.getElementById('tel').value;
        
          
          
          
          
              
         // document.getElementById('usernameError').innerHTML = ""; emailError
         // document.getElementById('passwordError').innerHTML = "";
         
          if (firstName == ""  ) {
              //passes error requiring something to be entered
             // document.getElementById('usernameError').innerHTML = "#{champs.user}";
              document.getElementById('firstNameError').style.display = "block"; 
              document.getElementById('firstNameError').style.color = "red"; 
          } 
        	  if(lastName== ""){
              document.getElementById('lastNameError').style.display = "block"; 
              document.getElementById('lastNameError').style.color = "red";
        	  }
        	  if(tel=="" )
        		  {
        	 
              document.getElementById('telError').style.display = "block"; 
              document.getElementById('telError').style.color = "red"; 
        		  }else
        		  if(!phonenumber(tel)){
        		document.getElementById('teleError').style.display = "block"; 
        	    document.getElementById('teleError').style.color= "red"; 
        	}
        		  
        		
        	  
        
              //moves cursor to this field if error occurs
              //document.pageForm.userName.focus();
              //document.pageForm.userName.select();
              //checkev=0;
              
          //ensures that username meets alphanumberic regex requirements
           
          if(lastName != "" && firstName!= "" && tel!="" && phonenumber(tel))
          {    document.forms.ff.submit();} 
       
          
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  });/**
 * 
 */