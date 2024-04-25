package ma.abisoft.persistence.model.heritage;

import java.util.ArrayList;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import antlr.collections.List;

@Entity
public class Prelevement {
	@Id
	@Column(name = "id_prelevement")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private 	Long id;
	private double preparation_defunt;
	private double dette;
	
	@OneToMany(mappedBy = "prelevement")
	private java.util.List<Personne> personnes; 
	
	public Prelevement() {
		super();
		// TODO Auto-generated constructor stub
		personnes=new ArrayList<>();
	}
	
	

	public java.util.List<Personne> getPersonnes() {
		return personnes;
	}



	public void setPersonnes(java.util.List<Personne> personnes) {
		this.personnes = personnes;
	}



	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public double getPreparation_defunt() {
		return preparation_defunt;
	}
	public void setPreparation_defunt(double preparation_defunt) {
		this.preparation_defunt = preparation_defunt;
	}
	public double getDette() {
		return dette;
	}
	public void setDette(double dette) {
		this.dette = dette;
	}
	
	
	

}
