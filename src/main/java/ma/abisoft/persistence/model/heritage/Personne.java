package ma.abisoft.persistence.model.heritage;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.management.relation.Role;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Personne{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_personne")
	private Long id;
	private String adresse;
	private String cin;
	@Column(name = "nom_pere")
	private String nomPere;
	private String commentaire;
	
	private Date date_de_naissance;
	
	private Date date_expiration_cin;
	private String nom;
	
	private String prenom;
	private String profession;
	private String sexe;
	private boolean supprime;
	
	@OneToOne(mappedBy = "personne")
	private Propriete proprite;
	
	@ManyToOne
	@JoinColumn(name="id_indeminite")
	private Indeminite indeminite;
	
	@ManyToOne
	@JoinColumn(name="id_relation_familiale")
	private RelationFamiliale relationFamiliale;
	
	
	@ManyToOne
	@JoinColumn(name="id_prelevement")
	private Prelevement prelevement;
	
	@ManyToMany
	@JoinTable(name="dossier_personne",joinColumns = @JoinColumn(name="id_personne"),inverseJoinColumns = @JoinColumn(name="NUMERO_DOSSIER") )
	private Set<DossierH> dossiers = new HashSet<>();
	
	
	 @ManyToMany
	    @JoinTable(name = "personne_role",
	            joinColumns = @JoinColumn(name = "id_personne"),
	            inverseJoinColumns = @JoinColumn(name = "id_role"))
	    private Set<RoleH> roles = new HashSet<>();
	
	 
	 
	 
	
    
	public Indeminite getIndeminite() {
		return indeminite;
	}

	public void setIndeminite(Indeminite indeminite) {
		this.indeminite = indeminite;
	}

	public RelationFamiliale getRelationFamiliale() {
		return relationFamiliale;
	}

	public void setRelationFamiliale(RelationFamiliale relationFamiliale) {
		this.relationFamiliale = relationFamiliale;
	}

	public Prelevement getPrelevement() {
		return prelevement;
	}

	public void setPrelevement(Prelevement prelevement) {
		this.prelevement = prelevement;
	}

	public void setDossiers(Set<DossierH> dossiers) {
		this.dossiers = dossiers;
	}

	public void setRoles(Set<RoleH> roles) {
		this.roles = roles;
	}

	public Propriete getProprite() {
		return proprite;
	}

	public void setProprite(Propriete proprite) {
		this.proprite = proprite;
	}

	public String getNomPere() {
		return nomPere;
	}

	public void setNomPere(String nomPere) {
		this.nomPere = nomPere;
	}

	public Set<DossierH> getDossiers() {
		return dossiers;
	}
	
	public Set<RoleH> getRoles() {
		return roles;
	}

	
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
	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	public String getCommentaire() {
		return commentaire;
	}
	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}
	public Date getDate_de_naissance() {
		return date_de_naissance;
	}
	public void setDate_de_naissance(Date date_de_naissance) {
		this.date_de_naissance = date_de_naissance;
	}
	public Date getDate_expiration_cin() {
		return date_expiration_cin;
	}
	public void setDate_expiration_cin(Date date_expiration_cin) {
		this.date_expiration_cin = date_expiration_cin;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public String getSexe() {
		return sexe;
	}
	public void setSexe(String sexe) {
		this.sexe = sexe;
	}
	public boolean isSupprime() {
		return supprime;
	}
	public void setSupprime(boolean supprime) {
		this.supprime = supprime;
	}
	
	public Personne(Long id, String adresse, String cin,  Date date_de_naissance,
			Date date_expiration_cin, String nom, String prenom, String profession, String sexe) {
		super();
		this.id = id;
		this.adresse = adresse;
		this.cin = cin;
		this.date_de_naissance = date_de_naissance;
		this.date_expiration_cin = date_expiration_cin;
		this.nom = nom;
		this.prenom = prenom;
		this.profession = profession;
		this.sexe = sexe;
		
	}
	public Personne() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
