package ma.abisoft.persistence.model.heritage;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Indeminite {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_indeminite")
	private Long id;
	private String parts;
	
	
	
	@OneToMany(mappedBy = "indeminite")
	private List<Personne> personnes;



	public Indeminite() {
		super();
		// TODO Auto-generated constructor stub
		personnes=new ArrayList<>();
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getParts() {
		return parts;
	}



	public void setParts(String parts) {
		this.parts = parts;
	}



	public List<Personne> getPersonnes() {
		return personnes;
	}



	public void setPersonnes(List<Personne> personnes) {
		this.personnes = personnes;
	} 
	
	

}
