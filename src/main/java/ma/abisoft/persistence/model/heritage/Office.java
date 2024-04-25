package ma.abisoft.persistence.model.heritage;

import java.sql.Blob;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.bind.DefaultValue;


import ma.abisoft.persistence.model.User;




@Entity
	@Table(name = "office")
	public class Office {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	    private String label ;
	    
	    private String fax;
	  
	    private String adresse;
	    
        private String fix;
	    
        private String officeEmail;
        
        
	 
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "ville_id")
        private Ville ville;
	    
	    
	    public Ville getVille() {
			return ville;
		}
		public void setVille(Ville ville) {
			this.ville = ville;
		}

		@OneToOne(mappedBy ="office", cascade = CascadeType.ALL)
	    private User user;
		@Lob
	//	@Column(columnDefinition = "MEDIUMBLOB")
		private Blob image;
		
		
		
	    
        public Blob getImage() {
			return image;
		}
		public void setImage(Blob image) {
			this.image = image;
		}
		public User getUser() {
			return user;
		}
		public String getOfficeEmail() {
			return officeEmail;
		}
		public void setOfficeEmail(String email) {
			this.officeEmail= email;
		}
		public void setUser(User user) {
			this.user = user;
		}
		public Office() {};
		public Office(String label, String fax, String adresse, String fix, String email) {
			super();
			this.label = label;
			this.fax = fax;
			this.adresse = adresse;
			this.fix = fix;
			this.officeEmail = email;
		
		}

		public Long getId() {
			return id;
		}

		public String getLabel() {
			return label;
		}

		public String getFax() {
			return fax;
		}

		public String getAdresse() {
			return adresse;
		}

		public String getFix() {
			return fix;
		}

	

		public void setId(Long id) {
			this.id = id;
		}

		public void setLabel(String label) {
			this.label = label;
		}

		public void setFax(String fax) {
			this.fax = fax;
		}

		public void setAdresse(String adresse) {
			this.adresse = adresse;
		}

		public void setFix(String fix) {
			this.fix = fix;
		}

		
	    
	    
	    
}
