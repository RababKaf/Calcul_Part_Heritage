package ma.abisoft.persistence.model.heritage;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.ManyToAny;

@Entity
public class ProprieteComerciale {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_propriete_comerciale")
	private Long id;
	private String adresse;
	private double prix;
	private double surface;
	
	@ManyToOne
	@JoinColumn(name = "id_proprite")
	private Propriete propriete;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public double getSurface() {
		return surface;
	}

	public void setSurface(double surface) {
		this.surface = surface;
	}

	public Propriete getPropriete() {
		return propriete;
	}

	public void setPropriete(Propriete propriete) {
		this.propriete = propriete;
	}
	
    

}
