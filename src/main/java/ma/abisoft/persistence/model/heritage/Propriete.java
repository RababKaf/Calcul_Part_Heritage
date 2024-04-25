package ma.abisoft.persistence.model.heritage;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Propriete {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_proprite")
	private Long id;
	private String commentaire;
	private int suprime;
	
	@OneToMany(mappedBy = "propriete")
	private List<ProprieteComerciale> proprieteComerciales;
	
	@OneToMany(mappedBy = "propriete")
	private List<Terain> terain;
	
	@OneToOne(mappedBy = "propriete")
	private Argent argent;
	
	@OneToOne
	@JoinColumn(name="id_personne")
	private Personne personne;
	
	@OneToMany(mappedBy = "propriete")
	private List<Autre> autres;
	
	
    
	public List<Terain> getTerain() {
		return terain;
	}

	public void setTerain(List<Terain> terain) {
		this.terain = terain;
	}

	public List<ProprieteComerciale> getProprieteComerciales() {
		return proprieteComerciales;
	}

	public Personne getPersonne() {
		return personne;
	}

	public void setPersonne(Personne personne) {
		this.personne = personne;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCommentaire() {
		return commentaire;
	}

	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}

	public int getSuprime() {
		return suprime;
	}

	public void setSuprime(int suprime) {
		this.suprime = suprime;
	}

	public Argent getArgent() {
		return argent;
	}

	public void setArgent(Argent argent) {
		this.argent = argent;
	}

	public Propriete() {
		super();
		this.proprieteComerciales=new ArrayList<>();
		this.autres=new ArrayList<>(); 
		this.terain=new ArrayList<>(); 
		// TODO Auto-generated constructor stub
	}

	public void setProprieteComerciales(List<ProprieteComerciale> proprieteComerciales) {
		this.proprieteComerciales = proprieteComerciales;
	}

	public List<Autre> getAutres() {
		return autres;
	}

	public void setAutres(List<Autre> autres) {
		this.autres = autres;
	}

	
	
	

}
