package ma.abisoft.persistence.model.heritage;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Pdf {
	
	@Id
	@Column( name = "NUMERO_DOSSIER")
	private Long numero;
	
	@Column(name = "DATE_DOSSIER_Hijri")
	private String dateHijri;
	
	@Column(name = "DATE_DOSSIER_Miladi")
	private Date dateDossierMiladi;
	
	private String firstName;

    private String lastName;
    
    private String cintemoin;
	@Column(name = "nom_pere")
	private String nomPeret;
	
    private Date date_de_naissancet;
	
	private Date date_expiration_cint;
	private String nomt;
	
	private String prenomt;
	private String profession;
	
    private String nomh;
	
	private String prenomh;
	
	private Date date_de_naissanceh;
	
	private String relation;
	
	private String part;

	public Long getNumero() {
		return numero;
	}

	public void setNumero(Long numero) {
		this.numero = numero;
	}

	public String getDateHijri() {
		return dateHijri;
	}

	public void setDateHijri(String dateHijri) {
		this.dateHijri = dateHijri;
	}

	public Date getDateDossierMiladi() {
		return dateDossierMiladi;
	}

	public void setDateDossierMiladi(Date dateDossierMiladi) {
		this.dateDossierMiladi = dateDossierMiladi;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getCintemoin() {
		return cintemoin;
	}

	public void setCintemoin(String cintemoin) {
		this.cintemoin = cintemoin;
	}

	public String getNomPeret() {
		return nomPeret;
	}

	public void setNomPeret(String nomPeret) {
		this.nomPeret = nomPeret;
	}

	public Date getDate_de_naissancet() {
		return date_de_naissancet;
	}

	public void setDate_de_naissancet(Date date_de_naissancet) {
		this.date_de_naissancet = date_de_naissancet;
	}

	public Date getDate_expiration_cint() {
		return date_expiration_cint;
	}

	public void setDate_expiration_cint(Date date_expiration_cint) {
		this.date_expiration_cint = date_expiration_cint;
	}

	public String getNomt() {
		return nomt;
	}

	public void setNomt(String nomt) {
		this.nomt = nomt;
	}

	public String getPrenomt() {
		return prenomt;
	}

	public void setPrenomt(String prenomt) {
		this.prenomt = prenomt;
	}

	public String getProfession() {
		return profession;
	}

	public void setProfession(String profession) {
		this.profession = profession;
	}

	public String getNomh() {
		return nomh;
	}

	public void setNomh(String nomh) {
		this.nomh = nomh;
	}

	public String getPrenomh() {
		return prenomh;
	}

	public void setPrenomh(String prenomh) {
		this.prenomh = prenomh;
	}

	public Date getDate_de_naissanceh() {
		return date_de_naissanceh;
	}

	public void setDate_de_naissanceh(Date date_de_naissanceh) {
		this.date_de_naissanceh = date_de_naissanceh;
	}

	public String getRelation() {
		return relation;
	}

	public void setRelation(String relation) {
		this.relation = relation;
	}

	public String getPart() {
		return part;
	}

	public void setPart(String part) {
		this.part = part;
	}
	
	
    
    
	

}
