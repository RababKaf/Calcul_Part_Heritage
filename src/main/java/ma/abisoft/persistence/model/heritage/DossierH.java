package ma.abisoft.persistence.model.heritage;

import java.time.LocalTime;
import java.time.chrono.HijrahDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import ma.abisoft.persistence.model.User;


@Entity
@Table(name = "dossierH")
public class DossierH {
	public DossierH(){
		super();
		// TODO Auto-generated constructor stub
		//personnes=new ArrayList<>();
	}



	@Id
	@Column( name = "NUMERO_DOSSIER")
	private Long numero;
//	
//	@ManyToOne
//	@JoinColumn(name = "bureau_id")
//    private BureauH bureau;
	
	@Column(name = "DATE_DOSSIER_Miladi")
	private Date dateDossierMiladi;
	
	@Column(name = "NOM_DOSSIER")
	private String nomDossier;
		
	private Date dateCreation;
	
	@Column(name = "DATE_DOSSIER_Hijri")
	private String dateHijri;
	
	@Column(name = "HEURE_DOSSIER")
	private LocalTime heureDossier ;
	
	
	@Column(length = 500, name = "COMMENTAIRE")
	private String commentaire;

   
    
    @ManyToMany(mappedBy = "dossiers")
    private Set<Personne> personnes = new HashSet<>();

    
    @ManyToOne
	@JoinColumn(name="id")
	private User user;
    
    
   
    
	public User getUser() {
		return user;
	}







	public void setUser(User user2) {
		this.user = user2;
	}







	public void setPersonnes(Set<Personne> personnes) {
		this.personnes = personnes;
	}







	public Set<Personne> getPersonnes() {
		return personnes;
	}



	



	public Date getDateCreation() {
		return dateCreation;
	}







	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}







	public Long getNumero() {
		return numero;
	}







	public void setNumero(Long numero) {
		this.numero = numero;
	}







	public LocalTime getHeureDossier() {
		return heureDossier;
	}



	public String getNomDossier() {
		return nomDossier;
	}



	public void setNomDossier(String nomDossier) {
		this.nomDossier = nomDossier;
	}



	public void setHeureDossier(LocalTime heureDossier) {
		this.heureDossier = heureDossier;
	}



	



	public Date getDateDossierMiladi() {
		return dateDossierMiladi;
	}



	public void setDateDossierMiladi(Date dateDossierMiladi) {
		this.dateDossierMiladi = dateDossierMiladi;
	}



	



	public String getDateHijri() {
		return dateHijri;
	}



	public void setDateHijri(String dateHijri) {
		this.dateHijri = dateHijri;
	}



	public String getCommentaire() {
		return commentaire;
	}



	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}

}
