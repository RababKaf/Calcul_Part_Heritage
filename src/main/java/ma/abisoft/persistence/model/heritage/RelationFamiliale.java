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
public class RelationFamiliale {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_relation_familiale")
	private Long id;
	private String nom;
	
	@OneToMany(mappedBy = "relationFamiliale")
	private List<Personne> personnes;

	
	
	
	
	
	
	
	
	
	public RelationFamiliale() {
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

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public List<Personne> getPersonnes() {
		return personnes;
	}

	public void setPersonnes(List<Personne> personnes) {
		this.personnes = personnes;
	}
	
	
	

}
