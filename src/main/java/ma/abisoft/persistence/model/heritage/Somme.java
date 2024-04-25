package ma.abisoft.persistence.model.heritage;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Somme")
public class Somme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Double tarika ;
    private Double doyon ;
    private Double tajhez ;
    private Double wasiya;
    private Double somme;
    
    
    
    
	public Double getSomme() {
		return somme;
	}
	public void setSomme(Double somme) {
		this.somme = somme;
	}
	public Long getId() {
		return id;
	}
	public Double getTarika() {
		return tarika;
	}
	public Double getDoyon() {
		return doyon;
	}
	public Double getTajhez() {
		return tajhez;
	}
	public Double getWasiya() {
		return wasiya;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setTarika(Double tarika) {
		this.tarika = tarika;
	}
	public void setDoyon(Double doyon) {
		this.doyon = doyon;
	}
	public void setTajhez(Double tajhez) {
		this.tajhez = tajhez;
	}
	public void setWasiya(Double wasiya) {
		this.wasiya = wasiya;
	}
    
    
    
    
    
    
}
    
 
    
  
