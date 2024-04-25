package ma.abisoft.persistence.model.heritage;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "region")
public class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name_region")
    private String nameRegion;

    @OneToMany(mappedBy = "region", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ville> cities = new ArrayList<>();

   

    public Region() {
    }

	public Region(String nameRegion) {
		super();
		this.nameRegion = nameRegion;
	}





	




	public Long getId() {
		return id;
	}





	public String getNameRegion() {
		return nameRegion;
	}





	public List<Ville> getCities() {
		return cities;
	}





	public void setId(Long id) {
		this.id = id;
	}





	public void setNameRegion(String nameRegion) {
		this.nameRegion = nameRegion;
	}





	public void setCities(List<Ville> cities) {
		this.cities = cities;
	}
	
	
}
