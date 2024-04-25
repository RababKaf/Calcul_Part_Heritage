package ma.abisoft.persistence.model.heritage;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;


@Entity
public class Argent {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_argent")
	private Long id;
	private Double somme;
	private String commentaire;
	private Boolean suprime;
	
	@OneToOne
	@JoinColumn(name = "id_proprite")
	private Propriete propriete;

	public Argent(Long id, Double somme) {
		super();
		this.id = id;
		this.somme = somme;
	}
    
	public void setPropriete(Propriete propriete) {
		this.propriete = propriete;
	}

	public Argent() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getSomme() {
		return somme;
	}

	public void setSomme(double somme) {
		this.somme = somme;
	}

	public String getCommentaire() {
		return commentaire;
	}

	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}

	public Boolean getSuprime() {
		return suprime;
	}

	public void setSuprime(Boolean suprime) {
		this.suprime = suprime;
	}

	public Propriete getPropriete() {
		return propriete;
	}
	
	

}
