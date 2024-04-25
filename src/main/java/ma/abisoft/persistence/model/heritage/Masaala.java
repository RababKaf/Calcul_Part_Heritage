package ma.abisoft.persistence.model.heritage;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;





@Entity
	@Table(name = "masaala")
	public class Masaala {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	    private String relationfamiliale ;
	    
	    private String nombre;
	    
	    private String part;
	    
	    @Column(columnDefinition = "mediumtext")
	    private String cond;
	  
	 
        
        
	 
    
		
		
	 
		public String getNombre() {
			return nombre;
		}
		public void setNombre(String nombre) {
			this.nombre = nombre;
		}
		public String getPart() {
			return part;
		}
		public void setPart(String part) {
			this.part = part;
		}
		public Masaala() {};
		public Masaala(String relationFamiliale, String cond) {
			super();
			this.relationfamiliale = relationFamiliale;
			this.cond = cond;
		
		
		}

		public Long getId() {
			return id;
		}

		public String getRelationFamiliale() {
			return relationfamiliale;
		}

		public String getCond() {
			return cond;
		}

	

	

		public void setId(Long id) {
			this.id = id;
		}

		public void setRelationFamiliale(String relationFamiliale) {
			this.relationfamiliale = relationFamiliale;
		}

		public void setCond(String cond) {
			this.cond = cond;
		}

	

		
	    
	    
	    
}

