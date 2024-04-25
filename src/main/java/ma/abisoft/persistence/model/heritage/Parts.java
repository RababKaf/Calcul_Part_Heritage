package ma.abisoft.persistence.model.heritage;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;





@Entity
	@Table(name = "parts")
	public class Parts {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	    private String relationFamiliale ;
	    
	    private String part;
	    
	    @Column(columnDefinition = "mediumtext")
	    private String cond;
	  
	 
        
        
	 
    
		
		
	 
		public String getPart() {
			return part;
		}
		public void setPart(String part) {
			this.part = part;
		}
		public Parts() {};
		public Parts(String relationFamiliale, String cond) {
			super();
			this.relationFamiliale = relationFamiliale;
			this.cond = cond;
		
		
		}

		public Long getId() {
			return id;
		}

		public String getrelationFamiliale() {
			return relationFamiliale;
		}

		public String getcond() {
			return cond;
		}

	

	

		public void setId(Long id) {
			this.id = id;
		}

		public void setrelationFamiliale(String relationFamiliale) {
			this.relationFamiliale = relationFamiliale;
		}

		public void setcond(String cond) {
			this.cond = cond;
		}

	

		
	    
	    
	    
}
