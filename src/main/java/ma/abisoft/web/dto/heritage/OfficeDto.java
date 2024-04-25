package ma.abisoft.web.dto.heritage;

import org.springframework.web.multipart.MultipartFile;

import ma.abisoft.persistence.model.heritage.Ville;
import ma.abisoft.web.dto.UserDto;

public class OfficeDto {
	
	    
	    private String label ;
	
	    private String fix;
	    private String fax;
	    private String adresse;
	    private String officeEmail;
	    private Ville ville;
	  
	  //  private VilleDto vd;
	    
	    private UserDto userDto;
	


		public Ville getVille() {
			return ville;
		}



		public void setVille(Ville ville) {
			this.ville = ville;
		}



		public OfficeDto() {
	        // Default constructor
	    }
	    


	    // Getters and Setters

	    public String getLabel() {
			return label;
		}



		public String getFix() {
			return fix;
		}



		public String getFax() {
			return fax;
		}



		public String getAdresse() {
			return adresse;
		}



		public String getOfficeEmail() {
			return officeEmail;
		}



		


		public void setLabel(String label) {
			this.label = label;
		}



		public void setFix(String fix) {
			this.fix = fix;
		}



		public void setFax(String fax) {
			this.fax = fax;
		}



		public void setAdresse(String adresse) {
			this.adresse = adresse;
		}



		public void setOfficeEmail(String email) {
			this.officeEmail = email;
		}



		


		

	  


	    public UserDto getUserDto() {
	        return userDto;
	    }

	    public void setUserDto(UserDto userDto) {
	        this.userDto = userDto;
	    }
	}

