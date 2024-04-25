package ma.abisoft.persistence.model.heritage;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import ma.abisoft.persistence.model.User;

@Entity
@Table(name = "city")
public class Ville {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	private String cityName;

	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "region_id")
    private Region region;
//
//	 @OneToMany(mappedBy = "ville", cascade = CascadeType.ALL, orphanRemoval = true)
//	 private List<Office> listeOffice = new ArrayList<>();
//	 
	

//
//	public List<Office> getListeOffice() {
//		return listeOffice;
//	}
//
//
//	public void setListeOffice(List<Office> listeOffice) {
//		this.listeOffice = listeOffice;
//	}


	public Ville(String cityName) {
		super();
		this.cityName = cityName;
		
		//this.region = region;
	}

	public Ville() {};

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getCityName() {
		return cityName;
	}


	public Region getRegion() {
		return region;
	}


	public void setCityName(String cityName) {
		this.cityName = cityName;
	}


	public void setRegion(Region region) {
		this.region = region;
	}

    // Constructors, getters, and setters
    // ...
}


 
